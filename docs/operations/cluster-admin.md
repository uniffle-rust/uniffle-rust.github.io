---
title: Cluster administration
description: Inspect and update a Riffle cluster with riffle-ctl and SQL queries.
parent: Operations
nav_order: 4
permalink: /operations/cluster-admin/
---

# Cluster administration

`riffle-ctl` queries coordinator tables and applies administrative changes to individual or piped server instances.

## Command groups

```text
riffle-ctl query ...
riffle-ctl instance { set | add | remove | kill }
riffle-ctl bench { disk { append | read | profile } | hdfs append }
riffle-ctl inspect file ...
riffle-ctl config init ...
```

## Query applications

```bash
./riffle-ctl query \
  --coordinator http://coordinator.example.com:21001 \
  --sql "select * from active_apps"

./riffle-ctl query \
  --coordinator http://coordinator.example.com:21001 \
  --sql "select * from historical_apps"
```

## Update one server

```bash
./riffle-ctl instance set \
  --instance 192.168.1.10:19998 \
  --status unhealthy
```

Replace the server’s custom tags:

```bash
./riffle-ctl instance set \
  --instance 192.168.1.10:19998 \
  --tags sata,rack-a
```

Built-in protocol tags such as `ss_v4`, `ss_v5`, and `GRPC` are always retained.

## Pipeline mode

When `--instance` is omitted, instance commands read JSON Lines from standard input. Every row must include `ip` and `http_port`.

```bash
./riffle-ctl query \
  --coordinator http://coordinator.example.com:21001 \
  --sql "select * from instances where tags like '%sata%'" \
  --json \
  | ./riffle-ctl instance set --status unhealthy
```

Pipeline mode makes the selection explicit and reviewable: run the query by itself first, inspect the resulting instances, and then pipe the same query into the update.

{: .danger }
> Confirm the coordinator endpoint, SQL filter, and selected instances before
> running `instance set`, `add`, `remove`, or `kill` against a production
> cluster.
