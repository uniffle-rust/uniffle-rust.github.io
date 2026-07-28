---
title: Spark and Apache Uniffle
description: Connect Spark applications to a Riffle shuffle-server deployment.
---

# Spark and Apache Uniffle

Riffle implements the shuffle-server side of an Apache Uniffle deployment. Spark continues to use the Uniffle client and `RssShuffleManager`, while the coordinator assigns Riffle servers.

## Spark settings

A minimal Spark configuration has this shape:

```properties
spark.shuffle.manager=org.apache.spark.shuffle.RssShuffleManager
spark.rss.storage.type=MEMORY_LOCALFILE
```

The exact client artifact and additional settings depend on the Spark and Apache Uniffle versions in your environment. Keep those client-side versions aligned with the protocol capabilities advertised by the selected Riffle release.

For HDFS-backed storage, also enable:

```properties
spark.rss.client.remote.storage.useLocalConfAsDefault=true
```

## Server capability tags

Riffle advertises tags to the coordinator:

```toml
tags = ["GRPC", "ss_v5", "GRPC_NETTY"]
```

Built-in capability tags such as `ss_v4`, `ss_v5`, and `GRPC` are retained by the server. Custom tags can describe pools, device classes, or operational groups.

## Connection checklist

1. Verify every Riffle server can reach every coordinator endpoint.
2. Confirm the server registers with the protocol tags required by the client.
3. Match `spark.rss.storage.type` to the storage enabled on the server.
4. Check coordinator assignments and server heartbeats before running a large job.
5. Validate a small Spark workload, then inspect Riffle and coordinator metrics.

The [Docker quick start](/guide/docker) provides a working example with Spark, a coordinator, and two Riffle servers.

::: warning Version alignment
This guide documents the current branch. For an existing cluster, use the changelog and the linked source tag to verify its supported transports and configuration names.
:::
