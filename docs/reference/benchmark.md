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

Each bar shows total runtime, split into shuffle write and shuffle read time.
Lower is better.

<figure class="benchmark-chart" aria-labelledby="terasort-chart-caption">
  <figcaption id="terasort-chart-caption" class="benchmark-chart__legend">
    <span class="benchmark-chart__legend-series">
      <span><i class="benchmark-chart__key benchmark-chart__key--phase-1"></i>Shuffle write</span>
      <span><i class="benchmark-chart__key benchmark-chart__key--phase-2"></i>Shuffle read</span>
    </span>
    <span class="benchmark-chart__legend-total">Total</span>
    <span class="benchmark-chart__legend-delta">Runtime vs Spark ESS</span>
  </figcaption>
  <div class="benchmark-chart__rows" role="list">
    <div class="benchmark-chart__row" role="listitem" aria-label="Vanilla Spark ESS baseline: 4.2 minutes total; shuffle write, 1.3 minutes; shuffle read, 2.9 minutes">
      <div class="benchmark-chart__label">Vanilla Spark ESS</div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 15.12%">1.3</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 33.72%">2.9</span>
      </div>
      <div class="benchmark-chart__total">4.2 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--baseline">—</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Riffle gRPC with 10 gigabyte buffer: 4.0 minutes total, 4.8 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.9 minutes; shuffle read, 2.1 minutes">
      <div class="benchmark-chart__label">Riffle gRPC <small>10 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 22.09%">1.9</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 24.42%">2.1</span>
      </div>
      <div class="benchmark-chart__total">4.0 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster">−4.8%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Riffle gRPC with 300 gigabyte buffer: 3.5 minutes total, 16.7 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.4 minutes; shuffle read, 2.1 minutes">
      <div class="benchmark-chart__label">Riffle gRPC <small>300 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 16.28%">1.4</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 24.42%">2.1</span>
      </div>
      <div class="benchmark-chart__total">3.5 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster">−16.7%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Riffle uRPC with 10 gigabyte buffer: 3.8 minutes total, 9.5 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.6 minutes; shuffle read, 2.2 minutes">
      <div class="benchmark-chart__label">Riffle uRPC <small>10 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 18.60%">1.6</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 25.58%">2.2</span>
      </div>
      <div class="benchmark-chart__total">3.8 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster">−9.5%</div>
    </div>
    <div class="benchmark-chart__row benchmark-chart__row--best" role="listitem" aria-label="Riffle uRPC with 300 gigabyte buffer: fastest at 3.2 minutes total, 23.8 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.2 minutes; shuffle read, 2.0 minutes">
      <div class="benchmark-chart__label">Riffle uRPC <span class="benchmark-chart__meta"><small>300 GB</small><strong>Fastest</strong></span></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 13.95%">1.2</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 23.26%">2.0</span>
      </div>
      <div class="benchmark-chart__total"><strong>3.2 min</strong></div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster"><strong>−23.8%</strong></div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle gRPC with 10 gigabyte buffer: 4.0 minutes total, 4.8 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.8 minutes; shuffle read, 2.2 minutes">
      <div class="benchmark-chart__label">Uniffle gRPC <small>10 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 20.93%">1.8</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 25.58%">2.2</span>
      </div>
      <div class="benchmark-chart__total">4.0 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster">−4.8%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle gRPC with 300 gigabyte buffer: 8.6 minutes total, 104.8 percent higher runtime than Vanilla Spark ESS; shuffle write, 2.7 minutes; shuffle read, 5.9 minutes">
      <div class="benchmark-chart__label">Uniffle gRPC <small>300 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 31.40%">2.7</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 68.60%">5.9</span>
      </div>
      <div class="benchmark-chart__total">8.6 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--slower">+104.8%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle Netty with default allocator and 10 gigabyte buffer: 5.1 minutes total, 21.4 percent higher runtime than Vanilla Spark ESS; shuffle write, 2.7 minutes; shuffle read, 2.4 minutes">
      <div class="benchmark-chart__label">Uniffle Netty, default allocator <small>10 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 31.40%">2.7</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 27.91%">2.4</span>
      </div>
      <div class="benchmark-chart__total">5.1 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--slower">+21.4%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle Netty with jemalloc and 10 gigabyte buffer: 4.5 minutes total, 7.1 percent higher runtime than Vanilla Spark ESS; shuffle write, 2.0 minutes; shuffle read, 2.5 minutes">
      <div class="benchmark-chart__label">Uniffle Netty, jemalloc <small>10 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 23.26%">2.0</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 29.07%">2.5</span>
      </div>
      <div class="benchmark-chart__total">4.5 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--slower">+7.1%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle Netty with default allocator and 300 gigabyte buffer: 4.0 minutes total, 4.8 percent lower runtime than Vanilla Spark ESS; shuffle write, 1.5 minutes; shuffle read, 2.5 minutes">
      <div class="benchmark-chart__label">Uniffle Netty, default allocator <small>300 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 17.44%">1.5</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 29.07%">2.5</span>
      </div>
      <div class="benchmark-chart__total">4.0 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--faster">−4.8%</div>
    </div>
    <div class="benchmark-chart__row" role="listitem" aria-label="Uniffle Netty with jemalloc and 300 gigabyte buffer: 6.6 minutes total, 57.1 percent higher runtime than Vanilla Spark ESS; shuffle write, 1.9 minutes; shuffle read, 4.7 minutes">
      <div class="benchmark-chart__label">Uniffle Netty, jemalloc <small>300 GB</small></div>
      <div class="benchmark-chart__bar" aria-hidden="true">
        <span class="benchmark-chart__phase benchmark-chart__phase--1" style="width: 22.09%">1.9</span>
        <span class="benchmark-chart__phase benchmark-chart__phase--2" style="width: 54.65%">4.7</span>
      </div>
      <div class="benchmark-chart__total">6.6 min</div>
      <div class="benchmark-chart__delta benchmark-chart__delta--slower">+57.1%</div>
    </div>
  </div>
</figure>

The Riffle uRPC protocol is named `NETTY` on the Java side.

{: .note }
> These figures are project-reported measurements, not a guarantee for another
> cluster. Compare with the same Spark version, data shape, network, disks,
> storage capacity, and concurrency before drawing conclusions.

See the [source README](https://github.com/zuston/riffle#readme) for the original report.
