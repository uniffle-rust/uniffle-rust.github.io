---
title: Read ahead for faster shuffle reads
parent: Blog
nav_order: 1
permalink: /blog/read-ahead/
description: How Riffle uses read ahead and the Linux page cache to reduce shuffle-read latency.
---

<article class="blog-post" markdown="1">

# Read ahead: cutting shuffle-read stalls with the Linux page cache
{: .blog-post__title }

<p class="blog-post__meta">July 28, 2025 · Performance · 7 min read</p>

<p class="blog-post__lead">Riffle's read-ahead path moves upcoming disk extents into the Linux page cache before the executor asks for them. The first microbenchmark cut total read time from 1.823 seconds to 0.270 seconds; later validation reported more than 15% faster shuffle reads.</p>

<div class="blog-metrics" role="list" aria-label="Reported read-ahead results">
  <div role="listitem">
    <strong>85.2%</strong>
    <span>lower total read time in the initial microbenchmark</span>
  </div>
  <div role="listitem">
    <strong>90.2%</strong>
    <span>lower median batch latency in the same run</span>
  </div>
  <div role="listitem">
    <strong>&gt;15%</strong>
    <span>faster shuffle reads reported by later validation</span>
  </div>
</div>

## Why reads stall

Shuffle readers usually consume a partition in ascending file-offset order.
Without prefetching, each RPC can arrive before its pages are resident, leaving
the request path waiting on disk I/O. The effect is most visible in cold-cache
reads and in the long tail.

[Issue #370](https://github.com/zuston/riffle/issues/370) framed the optimization:
use the page cache to bring the next extent into memory before it is requested,
reducing long-tail read latency without changing the data format or the Apache
Uniffle client protocol.

## The first implementation

[PR #411](https://github.com/zuston/riffle/pull/411) added a read-ahead layer
around Riffle's local-file handler. On Linux, the layer calls
`posix_fadvise(..., POSIX_FADV_WILLNEED)` for the next file range. The kernel can
then start I/O while the application consumes the current range.

<div class="read-ahead-flow" role="img" aria-label="Current read enters the local-file layer, sequential access is detected, the next extent is prefetched into the page cache, and the following request becomes a cache hit">
  <span>Read current extent</span>
  <i aria-hidden="true">→</i>
  <span>Detect the next range</span>
  <i aria-hidden="true">→</i>
  <span>Warm page cache</span>
  <i aria-hidden="true">→</i>
  <span>Serve the next read</span>
</div>

The initial implementation used a 14 MB batch. It prefetched four batches on
the first read and scheduled another two batches as the reader approached the
end of the loaded window. Prefetch work stayed below the existing local-file
interface, so the normal read path did not need a separate storage format.

## What the benchmark showed

The PR description records a cold-cache test over 1 GB with a 14 MB batch. The
captured run below shows one worker reading 20 batches, with a 400 ms pause
between batches; the page cache was cleared before each run.

<figure class="blog-figure">
  <a href="/assets/images/blog/read-ahead-benchmark.png">
    <img src="/assets/images/blog/read-ahead-benchmark.png" alt="Terminal benchmark comparing Riffle disk reads without and with read ahead. Total read time falls from 1823 milliseconds to 270 milliseconds, and median batch latency falls from 92.119 milliseconds to 9.019 milliseconds.">
  </a>
  <figcaption>
    The original benchmark attached to
    <a href="https://github.com/zuston/riffle/pull/411">PR #411</a>.
    The upper run disables read ahead; the lower run enables it.
    <a href="/assets/images/blog/read-ahead-benchmark.png">Open the full-size image</a>.
  </figcaption>
</figure>

| Measurement | Without read ahead | With read ahead | Change |
| --- | ---: | ---: | ---: |
| Total read time | 1,823 ms | 270 ms | **−85.2%** |
| Median batch latency | 92.119 ms | 9.019 ms | **−90.2%** |
| Maximum batch latency | 109.361 ms | 108.966 ms | −0.4% |

The total and median numbers move sharply because most reads can consume pages
loaded by the previous prefetch. The maximum barely changes, which is a useful
reminder: read ahead overlaps recurring sequential I/O; it does not eliminate
every cold or first-touch stall.

This is a focused microbenchmark, not a promise for every Spark workload.
[PR #488](https://github.com/zuston/riffle/pull/488) later reports the broader
validation result separately: **more than 15% improvement in shuffle-read
speed** for the first-phase sequential strategy.

## Activating it only when it helps

Blindly prefetching every read would waste bandwidth and evict useful pages.
Riffle therefore evolved the first mechanism into two activation paths.

### Sequential partitions

[Issue #454](https://github.com/zuston/riffle/issues/454) proposed using client
read information to distinguish sequential access.
[PR #456](https://github.com/zuston/riffle/pull/456) implemented that detection
and added the per-application switch:

```properties
spark.rss.riffle.readAheadEnabled=true
```

The server applies read ahead to applications identified as sequential instead
of enabling it indiscriminately.

### AQE skew partitions

Adaptive Query Execution can split a large skewed partition into non-sequential
ranges. The server can no longer infer the next range from the current offset.
[PR #488](https://github.com/zuston/riffle/pull/488) introduced a second
strategy: the client sends a read plan containing upcoming segments.

Because these segments are smaller and more numerous, Riffle processes them in
a shared, dedicated thread pool and uses a semaphore to cap concurrency. That
keeps prefetch overhead from overwhelming the normal RPC path.

<div class="blog-strategy">
  <div>
    <strong>Sequential strategy</strong>
    <span>The server predicts the next contiguous file window.</span>
  </div>
  <div>
    <strong>Read-plan strategy</strong>
    <span>The client reports upcoming ranges for AQE skew reads.</span>
  </div>
</div>

## Enabling read-plan prefetch

The read-plan path requires the Apache Uniffle client change from
[apache/uniffle#2603](https://github.com/apache/uniffle/pull/2603). The Spark
application reports upcoming segments with:

```properties
spark.rss.riffle.readAheadEnabled=true
spark.rss.client.read.nextReadSegmentsReportEnabled=true
```

The configuration used in PR #488 was:

```toml
[localfile_store.read_ahead_options]
batch_size = "15M"
batch_number = 4
read_plan_enable = true
read_plan_concurrency = 1000

[urpc_config]
get_index_rpc_version = "V2"
```

Treat these values as a starting point. Batch size and concurrency should be
tuned against disk bandwidth, page-cache capacity, partition size, and the
number of simultaneous readers.

## Measuring effectiveness

The follow-up work made read ahead observable rather than opaque:

- [PR #461](https://github.com/zuston/riffle/pull/461) added hit, miss, bytes,
  wasted bytes, and operation-duration metrics.
- [PR #463](https://github.com/zuston/riffle/pull/463) scoped the latency
  comparison to data-file reads.
- [PR #484](https://github.com/zuston/riffle/pull/484) corrected the hit metric
  and added an end-to-end sequential-read latency measurement.
- [PR #493](https://github.com/zuston/riffle/pull/493) added hit and miss
  metrics for read-plan tasks.

The operational question is not simply whether prefetch is enabled. Watch hit
rate, hit latency versus the no-ahead baseline, and the proportion of prefetched
bytes that are never consumed. A high hit rate with excessive wasted bytes can
still increase disk pressure and hurt neighboring workloads.

## The result

Read ahead turns a predictable access pattern into useful overlap: while Spark
processes one shuffle block, Riffle asks Linux to fetch the next. Sequential
detection keeps the optimization selective; client-supplied read plans extend
it to AQE skew; dedicated concurrency control keeps the background work bounded.

The mechanism is intentionally small, but it removes disk wait from the hottest
part of the shuffle-read path—and the original benchmark makes that effect
visible.

### Sources

- [Issue #370: Fully use the page cache to implement read ahead](https://github.com/zuston/riffle/issues/370)
- [PR #411: Add support of read ahead](https://github.com/zuston/riffle/pull/411)
- [Issue #454: Activate read ahead on sequential access](https://github.com/zuston/riffle/issues/454)
- [PR #456: Infer sequential reads](https://github.com/zuston/riffle/pull/456)
- [PR #488: Accept read plans for AQE skew](https://github.com/zuston/riffle/pull/488)

</article>
