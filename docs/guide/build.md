---
title: Build from source
description: Compile Riffle server, coordinator, and command-line tools from source.
parent: Getting started
nav_order: 3
permalink: /guide/build/
---

# Build from source

Riffle is a Rust workspace containing separate server, coordinator, and administration binaries.

## Clone and compile

```bash
git clone https://github.com/zuston/riffle.git
cd riffle

cargo build --release -p riffle-server
cargo build --release -p riffle-coordinator
cargo build --release -p riffle-ctl
```

Release binaries are written below `target/release/`.

## Feature builds

Build HDFS support:

```bash
cargo build --release -p riffle-server --features hdfs
```

Build the server with HDFS, structured logging, and memory profiling support:

```bash
cargo build --release -p riffle-server --features hdrs,logforth,memory-prof
```

Build with the Linux `io_uring` local I/O engine:

```bash
cargo build --release -p riffle-server --features io-uring
```

{: .tip }
> Build `riffle-ctl` separately. The tool does not need to link `libhdfs` or
> `libjvm.so`, even when the server is built with HDFS-related features.

## Run the server

Set the worker address and point the process at a TOML configuration:

```bash
WORKER_IP=10.0.0.12 \
RUST_LOG=info \
WORKER_CONFIG_PATH=./config.toml \
./target/release/riffle-server
```

Configuration is covered in [Server configuration](/configuration/server). Review the [changelog](/changelog) when you need to trace when a build flag or capability was introduced.
