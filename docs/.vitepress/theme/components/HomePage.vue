<script setup lang="ts">
import { releases } from '../../data/changelog'

const latest = releases[0]
</script>

<template>
  <main class="riffle-home">
    <section class="riffle-hero">
      <div class="riffle-hero-copy">
        <span class="home-pill"><i aria-hidden="true"></i>Apache Uniffle-compatible · Rust</span>
        <h1>Shuffle data.<br><em>Not resources.</em></h1>
        <p>
          A production-ready remote shuffle server engineered for sustained throughput,
          predictable storage, and operational control at hyperscale.
        </p>
        <div class="home-actions">
          <a class="home-action primary" href="/guide/docker">Run locally <span aria-hidden="true">→</span></a>
          <a class="home-action secondary" href="/guide/introduction">Read the guide</a>
        </div>
        <div class="home-release">
          <span>Latest</span>
          <a :href="`/changelog#${latest.tag}`">{{ latest.tag }}</a>
          <time :datetime="latest.date">{{ latest.date }}</time>
        </div>
      </div>

      <div class="home-terminal" aria-label="Riffle server configuration example">
        <header>
          <span><i></i><i></i><i></i></span>
          <strong>config.toml</strong>
          <small>riffle-server</small>
        </header>
        <pre><code><span class="terminal-muted"># One server. Three storage tiers.</span>
<span class="terminal-key">store_type</span> = <span class="terminal-string">"MEMORY_LOCALFILE_HDFS"</span>
<span class="terminal-key">grpc_port</span> = <span class="terminal-number">21100</span>
<span class="terminal-key">coordinator_quorum</span> = [<span class="terminal-string">"rss:21000"</span>]

<span class="terminal-section">[memory_store]</span>
<span class="terminal-key">capacity</span> = <span class="terminal-string">"10G"</span>

<span class="terminal-section">[localfile_store]</span>
<span class="terminal-key">data_paths</span> = [<span class="terminal-string">"/data1"</span>, <span class="terminal-string">"/data2"</span>]
<span class="terminal-key">direct_io_enable</span> = <span class="terminal-bool">true</span>

<span class="terminal-section">[metrics]</span>
<span class="terminal-key">http_port</span> = <span class="terminal-number">19998</span></code></pre>
        <footer>
          <span><i></i>server ready</span>
          <code>WORKER_IP=10.0.0.12 ./riffle-server</code>
        </footer>
      </div>
    </section>

    <section class="home-proof-band">
      <div class="home-proof-lead">
        <span class="section-kicker">Production signal</span>
        <h2>Built under real shuffle pressure.</h2>
        <p>Reported from Riffle’s production deployment supporting hyperscale Spark workloads.</p>
      </div>
      <dl>
        <div><dt>10 PB</dt><dd>shuffle data daily</dd></div>
        <div><dt>500 GB/s</dt><dd>aggregate throughput</dd></div>
        <div><dt>3 tiers</dt><dd>memory · disk · HDFS</dd></div>
      </dl>
    </section>

    <section class="home-system">
      <header class="home-section-heading">
        <span class="section-kicker">Compatible by design</span>
        <h2>Keep the Uniffle workflow.<br>Replace the hot path.</h2>
        <p>Spark and the Uniffle coordinator stay familiar. Riffle takes over the shuffle-server boundary.</p>
      </header>

      <div class="system-flow">
        <div><span>01</span><strong>Spark</strong><small>Uniffle client</small></div>
        <i aria-hidden="true">→</i>
        <div><span>02</span><strong>Coordinator</strong><small>assignment</small></div>
        <i aria-hidden="true">→</i>
        <div class="active"><span>03</span><strong>Riffle</strong><small>shuffle server</small></div>
        <i aria-hidden="true">→</i>
        <div><span>04</span><strong>Storage</strong><small>memory · disk · HDFS</small></div>
      </div>
    </section>

    <section class="home-capabilities">
      <header class="home-section-heading compact">
        <span class="section-kicker">Operate the system</span>
        <h2>Performance is only useful when you can control it.</h2>
      </header>
      <div class="capability-list">
        <a href="/configuration/storage">
          <span>01</span>
          <strong>Tiered storage</strong>
          <p>Coordinate memory, local disk, direct I/O, io_uring, and HDFS spill.</p>
          <i aria-hidden="true">↗</i>
        </a>
        <a href="/operations/monitoring">
          <span>02</span>
          <strong>Observability</strong>
          <p>Prometheus metrics, Grafana dashboards, tracing, and profiling endpoints.</p>
          <i aria-hidden="true">↗</i>
        </a>
        <a href="/operations/cluster-admin">
          <span>03</span>
          <strong>Cluster control</strong>
          <p>Inspect applications and administer server state with SQL and riffle-ctl.</p>
          <i aria-hidden="true">↗</i>
        </a>
      </div>
    </section>

    <section class="home-cta">
      <span class="section-kicker">Start with the whole stack</span>
      <h2>Coordinator, two Riffle servers,<br>Spark, Prometheus, and Grafana.</h2>
      <div class="home-cta-command">
        <code>cd dev/integration && docker compose up -d</code>
        <a href="/guide/docker">Open quick start →</a>
      </div>
    </section>
  </main>
</template>
