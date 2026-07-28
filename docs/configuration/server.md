---
title: Server configuration
description: Configure the current Riffle server process and runtime services.
parent: Configuration
nav_order: 1
permalink: /configuration/server/
---

# Server configuration

Riffle reads a TOML file from the path in `WORKER_CONFIG_PATH`. The exact key set changes between releases, so treat this page as documentation for the current `master` branch and use the [changelog](/changelog) to trace version changes.

## Minimal shape

```toml
store_type = "MEMORY_LOCALFILE"
grpc_port = 21100
coordinator_quorum = ["coordinator-1:21000", "coordinator-2:21000"]
heartbeat_interval_seconds = 2
tags = ["GRPC", "ss_v5"]

[memory_store]
capacity = "10G"

[localfile_store]
data_paths = ["/data1/riffle", "/data2/riffle"]
min_number_of_available_disks = 1

[runtime_config]
read_thread_num = 100
localfile_write_thread_num = 100
default_thread_num = 10

[metrics]
http_port = 19998
```

Start the process:

```bash
WORKER_IP=10.0.0.12 \
RUST_LOG=info \
WORKER_CONFIG_PATH=/etc/riffle/server.toml \
./riffle-server
```

## Top-level settings

| Key | Purpose |
| --- | --- |
| `store_type` | Selects the enabled storage combination, such as memory plus local file. |
| `grpc_port` | Uniffle-compatible gRPC service port. |
| `urpc_port` | Custom stream protocol port when that transport is enabled. |
| `coordinator_quorum` | Coordinator endpoints used for registration and heartbeats. |
| `heartbeat_interval_seconds` | Interval between coordinator heartbeats. |
| `tags` | Scheduling and protocol capability tags reported by the server. |

## Runtime pools

The `[runtime_config]` table separates work across dedicated thread pools:

```toml
[runtime_config]
read_thread_num = 100
localfile_write_thread_num = 100
hdfs_write_thread_num = 20
http_thread_num = 2
default_thread_num = 10
dispatch_thread_num = 100
```

Start with values appropriate for the machine’s CPU count, storage latency, and expected concurrency, then tune from observed queueing and resource saturation.

## Application limits

```toml
[app_config]
app_heartbeat_timeout_min = 5
partition_limit_enable = true
partition_limit_threshold = "20G"
partition_limit_memory_backpressure_ratio = 0.2
```

Partition controls keep unusually large partitions from consuming the full memory tier. Validate the selected threshold with the real partition-size distribution.

## Logging and tracing

```toml
[log]
path = "/var/log/riffle/server.log"
rotation = "Daily"

[tracing]
jaeger_reporter_endpoint = "http://jaeger:14268"
jaeger_service_name = "riffle-server"
```

Review [Monitoring](/operations/monitoring) for metrics and [Profiling](/operations/profiling) for on-demand flamegraphs.
