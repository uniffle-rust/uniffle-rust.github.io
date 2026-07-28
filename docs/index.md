---
title: Home
layout: home
nav_order: 1
permalink: /
description: Production-ready, Apache Uniffle-compatible shuffle infrastructure built for massive throughput.
---

# Riffle
{: .home-title }

High-throughput shuffle infrastructure written in Rust, fully compatible with
Apache Uniffle, and proven in production at **16 PB per day** and
**600 GB/s aggregate throughput**.
{: .home-lead }

[Get started]({% link guide/introduction.md %}){: .btn .btn-primary .mr-2 }
[See performance]({% link reference/benchmark.md %}){: .btn }

---

## Performance first

Riffle is engineered for sustained shuffle pressure with efficient memory use,
direct I/O, `io_uring`, and tiered storage across memory, local disks, and HDFS.

## Fully compatible with Apache Uniffle

Keep the official Apache Uniffle client and coordinator. Riffle replaces only
the shuffle-server layer, so Spark applications retain the same remote shuffle
architecture and deployment model.

## Production ready at hyperscale

The project reports production deployment at **16 PB of shuffle data per day**
and **600 GB/s aggregate throughput**. Prometheus metrics, profiling,
disk controls, and `riffle-ctl` support day-to-day operation at scale.
[Review the benchmark context]({% link reference/benchmark.md %}) before
comparing results across environments.

## Start with a complete environment

The Docker integration stack includes an Uniffle coordinator, two Riffle
servers, Spark, Prometheus, Pushgateway, and Grafana.

```bash
git clone https://github.com/zuston/riffle.git
cd riffle/dev/integration
docker compose up -d
```

[Open the Docker quick start]({% link guide/docker.md %}){: .text-link }
