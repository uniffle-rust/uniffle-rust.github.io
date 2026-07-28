---
title: Disk performance
description: Configure io_uring, direct I/O flushes, and throughput limits for Riffle local storage.
parent: Operations
nav_order: 3
permalink: /operations/disk-performance/
---

# Disk performance

Riffle provides three separate controls for local storage behavior: an `io_uring` engine, direct I/O flushes, and a per-disk throughput limiter.

## io_uring

The `io_uring` engine targets modern Linux kernels (5.10 or newer; verified by the project on Anolis OS 8).

```bash
cargo build --release -p riffle-server --features io-uring
```

```toml
[localfile_store.io_uring_options]
threads = 2
```

The project reports up to roughly 25% higher write throughput and about 3× lower CPU load in its write-intensive test. Re-test on the exact kernel, filesystem, controller, and drive model used in production.

## Direct I/O flushes

Buffered writes can create latency spikes when the Linux page cache flushes dirty data. Riffle can use direct I/O for writes while retaining buffered reads:

```toml
[localfile_store]
data_paths = ["/data1/riffle", "/data2/riffle"]
direct_io_enable = true
direct_io_read_enable = false
```

This combination aims for predictable flush behavior without giving up page-cache benefits on reads.

## Throughput limiting

Apply a per-disk capacity:

```toml
[io_limiter]
capacity = "1G"
```

Exercise the limiter with `riffle-ctl`:

```bash
./riffle-ctl bench disk append \
  --dir /data1/bench \
  --batch-number 100 \
  --concurrency 200 \
  --write-size 10M \
  --disk-throughput 100M \
  --throttle
```

## Tune in this order

1. Establish single-device throughput and latency without Riffle.
2. Benchmark the Riffle path with representative block sizes.
3. Select buffered or direct write behavior.
4. Size per-disk capacity below the point where tail latency becomes unstable.
5. Increase concurrency only while throughput improves without unacceptable read latency.

Do not extrapolate the project benchmark directly to different hardware. Storage firmware, filesystem choice, queue depth, and workload mix all materially affect results.
