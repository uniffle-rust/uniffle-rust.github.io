---
title: io_uring for local shuffle I/O
parent: Blog
nav_order: 1
permalink: /blog/io-uring/
description: How Riffle uses io_uring to increase local shuffle throughput while reducing CPU load.
---

<article class="blog-post" markdown="1">

# io_uring: more disk throughput with less CPU
{: .blog-post__title }

<p class="blog-post__meta">July 28, 2026 · Performance · 7 min read</p>

<p class="blog-post__lead">At high shuffle throughput, moving bytes is only half the cost. The other half is submitting I/O, waking threads, copying buffers, and handling completions. Riffle's io_uring engine moves that coordination off the request path—and a 2.2 TB TeraSort validation reported higher write throughput with roughly one-third of the CPU load.</p>

<div class="blog-metrics" role="list" aria-label="Reported io_uring results">
  <div role="listitem">
    <strong>~25%</strong>
    <span>higher write throughput reported by the Riffle RFC</span>
  </div>
  <div role="listitem">
    <strong>~3×</strong>
    <span>lower CPU load in the same validation</span>
  </div>
  <div role="listitem">
    <strong>2.2 TB</strong>
    <span>TeraSort run handled by one Riffle server</span>
  </div>
</div>

## Why asynchronous disk I/O matters

Riffle absorbs shuffle writes in memory and flushes them to local disks in the
background. Under sustained load, the storage engine has to process many
independent buffers while continuing to serve reads. A conventional blocking
path ties submission and completion work to more application threads, adding
context switches and CPU overhead as concurrency rises.

[RFC #554](https://github.com/zuston/riffle/issues/554) proposed an
`io_uring`-based local-file handler for this workload. The goal was not to make
the device itself faster. It was to keep more requests in flight with fewer
threads and less coordination on the hot path.

## One engine, two queues

[PR #549](https://github.com/zuston/riffle/pull/549) introduced the first
experimental engine. Each engine shard accepts read and write tasks, places
operations into the kernel's submission queue, and resolves their waiting
callers from the completion queue.

<div class="io-uring-flow" role="img" aria-label="Shuffle tasks enter an io_uring engine shard, operations are batched into the submission queue, Linux performs disk I/O, and results return through the completion queue">
  <span>Shuffle tasks</span>
  <i aria-hidden="true">→</i>
  <span>Submission queue</span>
  <i aria-hidden="true">→</i>
  <span>Disk I/O</span>
  <i aria-hidden="true">→</i>
  <span>Completion queue</span>
</div>

The write path uses vectored writes, allowing a composed shuffle payload to be
submitted without first flattening every segment into one contiguous
application buffer. Reads can use buffered or direct I/O, while the socket path
can hand data to a pipe for zero-copy transfer.

The important shift is ownership: a small number of I/O workers drive many
operations. [PR #570](https://github.com/zuston/riffle/pull/570) later reduced
the default to **two io_uring threads per disk** after testing showed that two
threads could preserve overall throughput.

## What the TeraSort run showed

The RFC records a 2.2 TB TeraSort application with one Riffle server handling
all shuffle data. It reports write throughput reaching **5 GB/s**, compared
with **3.75 GB/s** on the previous path, summarized by the project as an
approximately 25% improvement. CPU load was reported at roughly one-third of
the non-io_uring run.

<figure class="blog-figure">
  <a href="/assets/images/blog/io-uring-cpu-load.png">
    <img src="/assets/images/blog/io-uring-cpu-load.png" alt="Riffle CPU monitoring dashboard comparing a TeraSort interval with io_uring against an interval without io_uring. The annotated load chart shows a substantially lower peak with io_uring.">
  </a>
  <figcaption>
    The original CPU dashboard attached to
    <a href="https://github.com/zuston/riffle/issues/554">RFC #554</a>.
    The annotated load panel compares the io_uring and non-io_uring intervals.
    <a href="/assets/images/blog/io-uring-cpu-load.png">Open the full-size image</a>.
  </figcaption>
</figure>

| 2.2 TB TeraSort phase | With io_uring | Without io_uring | Duration change |
| --- | ---: | ---: | ---: |
| Shuffle write | 3.4 min | 4.1 min | **−17.1%** |
| Shuffle read | 6.3 min | 8.3 min | **−24.1%** |
| Combined | 9.7 min | 12.4 min | **−21.8%** |

These phase durations are an end-to-end application result, not an isolated
disk benchmark. The RFC separately notes that standalone read throughput did
not improve significantly: reads were less intensive and each operation
already transferred relatively large blocks. The clearest direct benefit was
the write-heavy path and its lower CPU cost.

## Zero-copy reads with `splice`

The local engine was only the first step.
[PR #559](https://github.com/zuston/riffle/pull/559) added `splice`-based reads
for the Linux 5.10 deployment target. Instead of copying file data into an
application buffer and then copying it again to the socket, Riffle can move the
data through a pipe while keeping the payload in kernel space.

<div class="blog-strategy">
  <div>
    <strong>Buffered read</strong>
    <span>File data is materialized in a userspace buffer before the response is sent.</span>
  </div>
  <div>
    <strong>Splice read</strong>
    <span>The kernel moves file data through a pipe toward the socket without a userspace payload copy.</span>
  </div>
</div>

[PR #560](https://github.com/zuston/riffle/pull/560) then made the read mode a
client-visible choice across buffered I/O, direct I/O, `sendfile`, and
`splice`. [PR #568](https://github.com/zuston/riffle/pull/568) added the
`TOTAL_URING_SPLICE` metric so operators can confirm that eligible reads are
actually taking the zero-copy path.

## Enabling the engine

io_uring support is compiled explicitly and is available only on Linux. The
project requires Linux kernel 5.10 or later and reports validation on Anolis OS
8.

```shell
cargo build --release -p riffle-server --features io-uring
```

Enable the local-file engine in the server configuration:

```toml
[localfile_store.io_uring_options]
threads = 2
io_depth = 64
```

Two threads and an I/O depth of 64 are the current defaults. They should still
be validated against the number and type of local disks, CPU topology, and
expected spill concurrency.

## From experimental to resilient

Asynchronous I/O expands the number of states the storage engine must handle:
partial vectored writes, file lifetime across queued tasks, alignment for
`O_DIRECT`, and rollback when a later chunk fails. The implementation evolved
through targeted fixes rather than treating the first benchmark as the finish
line.

- [PR #553](https://github.com/zuston/riffle/pull/553) fixed a buffer-lifetime
  issue that could cause data inconsistency.
- [PR #608](https://github.com/zuston/riffle/pull/608) split vectored writes
  that exceed Linux's `UIO_MAXIOV` limit.
- [PR #620](https://github.com/zuston/riffle/pull/620) added rollback when a
  later write chunk fails after earlier chunks have reached disk.
- [PR #623](https://github.com/zuston/riffle/pull/623) aligned direct appends
  and submitted them through io_uring so `O_DIRECT` works on the new engine.

This reliability work matters as much as the headline throughput. Shuffle data
is temporary, but silent corruption or a logically successful partial write
can invalidate an entire stage.

## The result

io_uring gives Riffle a storage path shaped for high concurrency: composed
writes are submitted in batches, completions are handled by a small worker set,
and eligible reads can reach the network through `splice`. In the reported
TeraSort run, that translated into more write throughput, lower application
phase time, and much lower CPU load.

The larger lesson is not that every read or disk becomes faster. It is that
reducing per-operation coordination leaves more CPU available for the parts of
shuffle service that cannot be offloaded.

### Sources

- [RFC #554: Introduce io_uring for local-file storage](https://github.com/zuston/riffle/issues/554)
- [PR #549: Add the experimental io_uring engine](https://github.com/zuston/riffle/pull/549)
- [PR #559: Add zero-copy reads with splice](https://github.com/zuston/riffle/pull/559)
- [PR #560: Select the uRPC read I/O mode](https://github.com/zuston/riffle/pull/560)
- [PR #568: Add the io_uring splice metric](https://github.com/zuston/riffle/pull/568)
- [PR #570: Use two io_uring threads by default](https://github.com/zuston/riffle/pull/570)
- [Riffle README: io_uring quick start](https://github.com/zuston/riffle#io_uring-based-disk-io)

</article>
