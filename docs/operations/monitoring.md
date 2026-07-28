---
title: Monitoring
description: Export Riffle metrics to Prometheus and use the bundled Grafana dashboard.
parent: Operations
nav_order: 1
permalink: /operations/monitoring/
---

# Monitoring

Riffle exposes HTTP metrics and can push labeled metrics to a Prometheus Pushgateway.

## Metrics configuration

```toml
[metrics]
http_port = 19998
push_gateway_endpoint = "http://pushgateway.example.com:9091"
push_interval_sec = 10
labels = { env = "production", service = "riffle" }
```

Use stable labels such as environment, cluster, and service. Avoid per-application or other high-cardinality label values at the server level.

## Grafana dashboard

The repository’s [`grafana`](https://github.com/zuston/riffle/tree/master/grafana) directory contains dashboard assets. Configure Prometheus collection first, then import the dashboard JSON into Grafana.

The Docker integration environment preconfigures:

- Prometheus at `http://localhost:9090`
- Pushgateway at `http://localhost:9091`
- Grafana at `http://localhost:3000`
- Riffle metrics on ports `19998` and `19999`

## What to watch

Build an operational view around:

- server health and coordinator heartbeat continuity;
- memory tier occupancy and spill activity;
- local disk availability, throughput, and latency;
- HDFS request latency and failures when enabled;
- read/write request rates and error counts;
- runtime pool saturation and queueing.

Pair service metrics with host-level CPU, memory, network, and per-device disk metrics. Shuffle bottlenecks often move between those resources as workload shape changes.

## First-response sequence

1. Confirm coordinator and server processes are healthy.
2. Check whether the issue affects one server, one rack, or the full cluster.
3. Compare memory pressure, spill rate, and disk latency.
4. Check request errors and transport saturation.
5. Capture profiling data only after establishing the affected process and time window.

Continue with [Profiling](/operations/profiling) or [Disk performance](/operations/disk-performance) for deeper inspection.
