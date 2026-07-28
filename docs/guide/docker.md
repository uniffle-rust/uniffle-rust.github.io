---
title: Docker quick start
description: Start a complete Riffle, Uniffle, Spark, Prometheus, and Grafana environment.
---

# Docker quick start

The integration stack starts an Uniffle coordinator, two Riffle servers, a Spark client, Prometheus, Pushgateway, and Grafana on one Docker network.

## Prerequisites

- Git
- Docker with Compose support
- Enough memory to run the coordinator, two servers, and Spark locally

## Start the stack

```bash
git clone https://github.com/zuston/riffle.git
cd riffle/dev/integration
docker compose up -d
docker compose ps
```

Use `docker-compose` in place of `docker compose` if your environment uses the standalone Compose binary.

The Riffle integration environment starts services in dependency order. The shuffle servers wait for a healthy coordinator, and the Spark client waits for both servers.

## Open the services

| Service | Address |
| --- | --- |
| Uniffle coordinator | `http://localhost:19995` |
| Riffle server 1 metrics | `http://localhost:19998/metrics` |
| Riffle server 2 metrics | `http://localhost:19999/metrics` |
| Prometheus | `http://localhost:9090` |
| Pushgateway | `http://localhost:9091` |
| Grafana | `http://localhost:3000` |

Grafana uses `admin` / `admin` for the local integration environment and includes a preloaded Riffle dashboard.

## Inspect and test

Follow all logs:

```bash
docker compose logs -f
```

Open the Spark container:

```bash
docker compose exec spark-client /bin/bash
spark-shell --master 'local[*]'
```

Run the integration test profile:

```bash
docker compose --profile test up riffle-test
```

## Stop the stack

```bash
docker compose down
```

::: warning Local environment only
The included credentials, port exposure, and single-network layout are intended for development and integration testing. Review security, persistence, and resource limits before adapting the Compose file for another environment.
:::

For the source integration guide, see [`dev/integration/README.md`](https://github.com/zuston/riffle/blob/master/dev/integration/README.md).
