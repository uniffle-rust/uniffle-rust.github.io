---
title: Home
layout: home
nav_order: 1
permalink: /
description: Production-ready, Apache Uniffle-compatible shuffle infrastructure built for massive throughput.
---

# Riffle
{: .home-title }

A Rust shuffle server fully compatible with Apache Uniffle. Proven in
production at **16 PB/day** and **600 GB/s**.
{: .home-lead }

[Get started]({% link guide/introduction.md %}){: .btn .btn-primary .mr-2 }
[See performance]({% link reference/benchmark.md %}){: .btn }

---

## Hybrid storage, tiered by design

Spark executors write through the standard Uniffle client into the Riffle
cluster. Inside each server, data spills across memory, NVMe local disks, and
HDFS, so hot partitions stay fast while cold data drains to remote storage.

<figure class="home-figure">
  <img src="{% link assets/images/riffle-arch-hybrid-storage.png %}" alt="Riffle architecture: Spark executors in a K8s pod write to the Riffle shuffle cluster, where each server tiers data across memory, NVMe SSD, and HDFS">
  <figcaption>Spark client to Riffle cluster, with the memory &rarr; NVMe &rarr; HDFS spill path inside each shuffle server.</figcaption>
</figure>

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
