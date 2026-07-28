---
title: Storage backends
description: Configure Riffle memory, local disk, HDFS, and hybrid spill behavior.
---

# Storage backends

Riffle can combine an in-memory hot tier with local files and HDFS. The `store_type` value enables the combination, while dedicated TOML tables control each backend.

## Memory

```toml
[memory_store]
capacity = "10G"
buffer_ticket_timeout_sec = 300
buffer_ticket_check_interval_sec = 10
dashmap_shard_amount = 128
```

`capacity` is the memory budget for buffered shuffle data. The hybrid store watermarks determine when buffered data starts and stops spilling.

## Local file

```toml
[localfile_store]
data_paths = ["/data1/riffle", "/data2/riffle"]
min_number_of_available_disks = 1
disk_high_watermark = 0.8
disk_low_watermark = 0.7
disk_max_concurrency = 2000
disk_write_buf_capacity = "1M"
disk_read_buf_capacity = "1M"
disk_healthy_check_interval_sec = 60
```

Spread `data_paths` across independent devices. Set `min_number_of_available_disks` to the minimum healthy capacity required for the server to remain available.

For `io_uring`, direct I/O, and disk throttling controls, see [Disk performance](/operations/disk-performance).

## HDFS

Build the server with HDFS support:

```bash
cargo build --release -p riffle-server --features hdfs
```

Configure concurrency and optional Kerberos identity:

```toml
[hdfs_store]
max_concurrency = 50
partition_write_max_concurrency = 20

[hdfs_store.kerberos_security_config]
keytab_path = "/etc/security/keytabs/riffle.keytab"
principal = "riffle/worker-1.example.com@EXAMPLE.COM"
```

Run with the Kerberos configuration and credential cache:

```bash
KRB5_CONFIG=/etc/krb5.conf \
KRB5CCNAME=/tmp/krb5cc_riffle \
RUST_LOG=info \
./riffle-server
```

When HDFS storage is active, set this Spark client option:

```properties
spark.rss.client.remote.storage.useLocalConfAsDefault=true
```

## Hybrid spill

```toml
[hybrid_store]
memory_spill_high_watermark = 0.8
memory_spill_low_watermark = 0.2
memory_single_buffer_max_spill_size = "1G"
memory_spill_to_cold_threshold_size = "128M"
memory_spill_to_localfile_concurrency = 4000
memory_spill_to_hdfs_concurrency = 500
huge_partition_memory_spill_to_hdfs_threshold_size = "64M"
```

The high watermark begins spill pressure; the low watermark marks the recovery target. Tune the two as a pair to avoid rapid oscillation, and keep spill concurrency within the throughput envelope of the backing devices.
