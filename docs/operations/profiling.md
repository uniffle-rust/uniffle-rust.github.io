---
title: Profiling
description: Build Riffle with profiling support and capture heap or CPU flamegraphs.
parent: Operations
nav_order: 2
permalink: /operations/profiling/
---

# Profiling

Build the server with memory profiling enabled:

```bash
cargo build --release -p riffle-server --features memory-prof
```

With the HTTP service configured and reachable, use the debug endpoints:

```text
http://<server>:<http-port>/debug/heap/profile
http://<server>:<http-port>/debug/pprof/profile
```

The heap endpoint produces heap profiling data; the pprof endpoint captures a CPU profile for the configured sampling window.

## Safe capture workflow

1. Identify one affected server from metrics before profiling.
2. Record the server version, workload window, and active configuration.
3. Capture a short baseline outside the incident window.
4. Capture the same duration during the problem.
5. Compare profiles together with request rate, memory pressure, and storage latency.

{: .warning }
> Profiling consumes CPU, memory, and I/O. Start with a short capture on one
> server and observe its impact before collecting from additional processes.
