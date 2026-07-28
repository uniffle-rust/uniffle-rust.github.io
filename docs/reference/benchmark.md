---
title: Benchmark
description: Environment, configuration, and TeraSort results reported by the Riffle project.
parent: Reference
nav_order: 1
permalink: /reference/benchmark/
---

# Benchmark

The Riffle repository reports a TeraSort comparison using a 273 GB compressed dataset. The numbers below retain the original environment and configuration context.

## Environment

| Type | Description |
| --- | --- |
| Software | Uniffle 0.8.0, Hadoop 3.2.2, Spark 3.1.2 |
| Machine | 96 cores, 512 GB memory, 4 × 1 TB SATA SSD, 8 GB/s network |
| Hadoop YARN cluster | 1 ResourceManager + 40 NodeManagers |
| Uniffle cluster | 1 coordinator + 1 shuffle server |

## Spark configuration

```properties
spark.executor.instances=400
spark.executor.cores=1
spark.executor.memory=2g
spark.shuffle.manager=org.apache.spark.shuffle.RssShuffleManager
spark.rss.storage.type=MEMORY_LOCALFILE
```

## TeraSort result

The parenthesized values are the two phases reported by the original benchmark.

| Implementation / buffer | Total |
| --- | ---: |
| Vanilla Spark ESS | 4.2 min (1.3 / 2.9) |
| Riffle gRPC / 10 GB | 4.0 min (1.9 / 2.1) |
| Riffle gRPC / 300 GB | 3.5 min (1.4 / 2.1) |
| Riffle custom stream / 10 GB | 3.8 min (1.6 / 2.2) |
| Riffle custom stream / 300 GB | **3.2 min** (1.2 / 2.0) |
| Uniffle gRPC / 10 GB | 4.0 min (1.8 / 2.2) |
| Uniffle gRPC / 300 GB | 8.6 min (2.7 / 5.9) |
| Uniffle Netty, default allocator / 10 GB | 5.1 min (2.7 / 2.4) |
| Uniffle Netty, jemalloc / 10 GB | 4.5 min (2.0 / 2.5) |
| Uniffle Netty, default allocator / 300 GB | 4.0 min (1.5 / 2.5) |
| Uniffle Netty, jemalloc / 300 GB | 6.6 min (1.9 / 4.7) |

The Riffle custom stream protocol is named `NETTY` on the Java side.

{: .note }
> These figures are project-reported measurements, not a guarantee for another
> cluster. Compare with the same Spark version, data shape, network, disks,
> storage capacity, and concurrency before drawing conclusions.

See the [source README](https://github.com/zuston/riffle#readme) for the original report.
