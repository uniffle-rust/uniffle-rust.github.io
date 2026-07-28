---
title: Introduction
description: Understand where Riffle fits in an Apache Uniffle deployment.
---

# Introduction

Riffle is a high-performance shuffle server written in Rust and designed as a compatible implementation of the [Apache Uniffle](https://github.com/apache/uniffle) shuffle service.

It keeps the familiar remote shuffle architecture: Spark executors use the Uniffle client, a coordinator assigns shuffle servers, and Riffle stores and serves shuffle blocks. The replacement boundary is the shuffle server itself.

## Architecture

```text
Spark applications
        │  Apache Uniffle client
        ▼
Uniffle coordinator
        │  assignments + heartbeats
        ▼
Riffle shuffle servers
        │
        ├── memory
        ├── local files / io_uring
        └── HDFS
```

## Why Riffle

- **Protocol compatibility.** Riffle is built to participate in an Apache Uniffle deployment.
- **Tiered storage.** Memory, local file, and HDFS backends can be combined for different workload shapes.
- **Operational control.** Metrics, profiling endpoints, disk throttling, and `riffle-ctl` are part of the normal workflow.
- **Rust implementation.** The server targets efficient resource use and predictable behavior under sustained shuffle pressure.

The project reports production deployment at nearly **10 PB of shuffle data per day** and **500 GB/s aggregate throughput** for hyperscale Spark workloads. See the [benchmark context](/reference/benchmark) before comparing those numbers with another environment.

## Components

| Component | Role |
| --- | --- |
| `riffle-server` | Handles shuffle writes, reads, storage, and server-side metrics. |
| `riffle-coordinator` | Coordinates server assignment and cluster metadata. |
| `riffle-ctl` | Queries and administers a running cluster. |
| Apache Uniffle client | Connects Spark applications to the remote shuffle service. |

## Documentation and release history

This guide describes the current `master` branch. The [changelog](/changelog) lists every stable and pre-release tag, the exact source commit, and the changes introduced since the preceding tag.

## Next step

For the fastest local evaluation, start the complete integration environment with [Docker Compose](/guide/docker). To create optimized binaries, continue to [Build from source](/guide/build).
