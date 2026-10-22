---
title: Changelog
layout: changelog
nav_order: 2
permalink: /changelog/
description: Every Riffle version and the changes introduced in each release.
---

# Changelog

## [v0.30.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.30.0-rc1)

_October 21, 2026_

#### What's Changed
* chore: remove legacy configs and grafana template by @zuston in https://github.com/zuston/riffle/pull/716
* refactor: extract coordinator + server startup logic into a reusable service by @zuston in https://github.com/zuston/riffle/pull/717
* chore(deps): upgrade tonic to 0.14.6 and prost to 0.14 by @zuston in https://github.com/zuston/riffle/pull/718
* fix(coordinator): adapt TCP incoming to tonic 0.14 by @zuston in https://github.com/zuston/riffle/pull/719
* fix(bench): fix compilation failures by making frame helpers public by @zuston in https://github.com/zuston/riffle/pull/720
* feat: remove rust nightly feature usage by @zuston in https://github.com/zuston/riffle/pull/721
* feat: introduce riffle-client by @zuston in https://github.com/zuston/riffle/pull/711
* feat(client): introduce mini_cluster by @zuston in https://github.com/zuston/riffle/pull/722
* fix(server)(test): fix flaky idle partition scheduling assertion for event-bus by @zuston in https://github.com/zuston/riffle/pull/726
* feat(client): add support of compression by @zuston in https://github.com/zuston/riffle/pull/724
* feat(client): add support of re-assignment by @zuston in https://github.com/zuston/riffle/pull/723
* chore: upgrade version to 0.30.0 by @zuston in https://github.com/zuston/riffle/pull/728


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.29.0-rc1...v0.30.0-rc1


## [v0.29.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.29.0-rc1)

_October 16, 2026_

#### What's Changed
* feat(memory): add allocated buffer high watermark health check by @zuston in https://github.com/zuston/riffle/pull/696
* refactor(store): unify owned and spilled write contexts by @zuston in https://github.com/zuston/riffle/pull/698
* fix(uring): avoid io_uring idle wait being charged as iowait by @zuston in https://github.com/zuston/riffle/pull/697
* refactor(store): re-define trait for the store by @zuston in https://github.com/zuston/riffle/pull/699
* chore: attach the production rpc throughput screenshots by @zuston in https://github.com/zuston/riffle/pull/700
* feat(server): stable sequence for all tags by @zuston in https://github.com/zuston/riffle/pull/701
* fix(localfile): Add slash on deleting meta with app prefix by @zuston in https://github.com/zuston/riffle/pull/702
* feat(localfile): attach lock partition uid for await-tree when waiting flushing partition file lock by @zuston in https://github.com/zuston/riffle/pull/704
* feat(localfile): add metric of `localfile_spill_partition_lock_waiting_number` to indicate the spill lock retention by @zuston in https://github.com/zuston/riffle/pull/705
* feat: upgrade logforth to 0.30.1 version to eliminate log buffer OOM by @zuston in https://github.com/zuston/riffle/pull/706
* feat(localfile): introduce flushing scheduling policy about partition priority by @zuston in https://github.com/zuston/riffle/pull/703
* feat(localfile): move spill scheduling policy to hybrid store config by @zuston in https://github.com/zuston/riffle/pull/708
* feat: introduce app stats to activate appInfos report on heartbeat by @zuston in https://github.com/zuston/riffle/pull/709
* feat(coordinator): collect and expose app stats into http api by @zuston in https://github.com/zuston/riffle/pull/710
* chore: remove agents.md by @zuston in https://github.com/zuston/riffle/pull/714
* chore: bump version to 0.29.0 by @zuston in https://github.com/zuston/riffle/pull/715


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.28.0-rc1...v0.29.0-rc1


## [v0.28.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.28.0-rc1)

_September 9, 2026_

#### What's Changed
* chore(deps): prune dependencies by @zuston in https://github.com/zuston/riffle/pull/667
* refactor(coordinator): re-org coordinator module by @zuston in https://github.com/zuston/riffle/pull/668
* feat(ci): publish reusable `integration` builder images by @zuston in https://github.com/zuston/riffle/pull/678
* feat(coordinator): support exclusive server tags by @zuston in https://github.com/zuston/riffle/pull/679
* fix(coordinator): Expire stale shuffle servers based on heartbeat timeout by @zuston in https://github.com/zuston/riffle/pull/680
* feat(coordinator): add riffle-coordinator into the integration test CI by @zuston in https://github.com/zuston/riffle/pull/681
* feat(coordinator): Introduce access plugin by @zuston in https://github.com/zuston/riffle/pull/682
* feat(coordinator): Introduce JS as dynamic access plugin by @zuston in https://github.com/zuston/riffle/pull/683
* feat(urpc)(uring): make frame parsing zero-copy by @zuston in https://github.com/zuston/riffle/pull/685
* feat(ci): reuse release builder image for `with-hdrs` workflow job by @zuston in https://github.com/zuston/riffle/pull/689
* feat(urpc)(uring): centralize frame response encoding by @zuston in https://github.com/zuston/riffle/pull/686
* feat(urpc)(uring): disable sendfile/splice mechanism by default by @zuston in https://github.com/zuston/riffle/pull/687
* feat(urpc)(uring): record the metrics of urpc connection and parsing latency by @zuston in https://github.com/zuston/riffle/pull/690
* feat(urpc)(uring): add CI tests by @zuston in https://github.com/zuston/riffle/pull/692
* feat(urpc)(uring): pin handler runtimes to urpc engine cores by @zuston in https://github.com/zuston/riffle/pull/691
* feat: configure TCP keepalive for server connections by @zuston in https://github.com/zuston/riffle/pull/693
* fix(urpc)(uring): wait for completions only at io depth capacity by @zuston in https://github.com/zuston/riffle/pull/694
* chore: bump version to 0.28.0 by @zuston in https://github.com/zuston/riffle/pull/695


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.27.0...v0.28.0-rc1


## [v0.27.0](https://github.com/zuston/riffle/releases/tag/v0.27.0)

_August 11, 2026_

#### What's Changed
* fix(server): disable jemalloc memory-prof feature for the better performance by default by @zuston in https://github.com/zuston/riffle/pull/655
* feat(server): improve release compiler level to 3 by @zuston in https://github.com/zuston/riffle/pull/656
* fix(uring): validate actual read length against request by @zuston in https://github.com/zuston/riffle/pull/658
* feat(localfile): limit concurrent writes per disk by @zuston in https://github.com/zuston/riffle/pull/657
* feat(mem): introduce indexed memory buffer with lazy block-position index by @zuston in https://github.com/zuston/riffle/pull/660
* feat(urpc): add pluggable `io_uring` net engine by @zuston in https://github.com/zuston/riffle/pull/661
* feat(ci): publish reusable release builder images by @zuston in https://github.com/zuston/riffle/pull/663
* fix(hdrs): propagate HDFS file close errors by @zuston in https://github.com/zuston/riffle/pull/665
* feat(localfile): remove `sync_all` to improve performance by @zuston in https://github.com/zuston/riffle/pull/654
* chore: bump version to 0.27.0 by @zuston in https://github.com/zuston/riffle/pull/666


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.26.0...v0.27.0


## [v0.27.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.27.0-rc1)

_August 6, 2026_

#### What's Changed
* fix(server): disable jemalloc memory-prof feature for the better performance by default by @zuston in https://github.com/zuston/riffle/pull/655
* feat(server): improve release compiler level to 3 by @zuston in https://github.com/zuston/riffle/pull/656
* fix(uring): validate actual read length against request by @zuston in https://github.com/zuston/riffle/pull/658
* feat(localfile): limit concurrent writes per disk by @zuston in https://github.com/zuston/riffle/pull/657
* feat(mem): introduce indexed memory buffer with lazy block-position index by @zuston in https://github.com/zuston/riffle/pull/660
* feat(urpc): add pluggable `io_uring` net engine by @zuston in https://github.com/zuston/riffle/pull/661
* feat(ci): publish reusable release builder images by @zuston in https://github.com/zuston/riffle/pull/663
* fix(hdrs): propagate HDFS file close errors by @zuston in https://github.com/zuston/riffle/pull/665
* feat(localfile): remove `sync_all` to improve performance by @zuston in https://github.com/zuston/riffle/pull/654
* chore: bump version to 0.27.0 by @zuston in https://github.com/zuston/riffle/pull/666


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.26.0...v0.27.0-rc1


## [v0.26.0](https://github.com/zuston/riffle/releases/tag/v0.26.0)

_August 3, 2026_

#### What's Changed
* fix(ctl): build riffle-ctl without hdrs to avoid libjvm dependency by @zuston in https://github.com/zuston/riffle/pull/638
* fix(ctl): handle empty pipeline query output without error by @zuston in https://github.com/zuston/riffle/pull/639
* feat(ctl): activate push down without running apps column in instances table by @zuston in https://github.com/zuston/riffle/pull/640
* chore(ctl): remove postgres-server mechanism by @zuston in https://github.com/zuston/riffle/pull/641
* refactor(ctl): re-org ctl commands by @zuston in https://github.com/zuston/riffle/pull/642
* refactor(ctl): simplify commands by @zuston in https://github.com/zuston/riffle/pull/643
* feat(urpc): add support of vectored tcp-stream write by @zuston in https://github.com/zuston/riffle/pull/644
* fix(urpc): avoid extra copy when decoding strings by @zuston in https://github.com/zuston/riffle/pull/645
* perf(urpc): reduce buffer copies in streaming parse by @zuston in https://github.com/zuston/riffle/pull/646
* fix(urpc): skip shuffle server fields in streaming parse by @zuston in https://github.com/zuston/riffle/pull/647
* fix(urpc): enable streaming parse by default by @zuston in https://github.com/zuston/riffle/pull/648
* feat(hdfs): update hdfs-native version to 0.14.3 by @zuston in https://github.com/zuston/riffle/pull/652
* feat(hdfs): introduce the huge partition spill threshold config option by @zuston in https://github.com/zuston/riffle/pull/651
* chore: bump version to 0.26.0 by @zuston in https://github.com/zuston/riffle/pull/653


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.25.0-rc1...v0.26.0


## [v0.26.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.26.0-rc1)

_July 29, 2026_

#### What's Changed
* fix(ctl): build riffle-ctl without hdrs to avoid libjvm dependency by @zuston in https://github.com/zuston/riffle/pull/638
* fix(ctl): handle empty pipeline query output without error by @zuston in https://github.com/zuston/riffle/pull/639
* feat(ctl): activate push down without running apps column in instances table by @zuston in https://github.com/zuston/riffle/pull/640
* chore(ctl): remove postgres-server mechanism by @zuston in https://github.com/zuston/riffle/pull/641
* refactor(ctl): re-org ctl commands by @zuston in https://github.com/zuston/riffle/pull/642
* refactor(ctl): simplify commands by @zuston in https://github.com/zuston/riffle/pull/643
* feat(urpc): add support of vectored tcp-stream write by @zuston in https://github.com/zuston/riffle/pull/644
* fix(urpc): avoid extra copy when decoding strings by @zuston in https://github.com/zuston/riffle/pull/645
* perf(urpc): reduce buffer copies in streaming parse by @zuston in https://github.com/zuston/riffle/pull/646
* fix(urpc): skip shuffle server fields in streaming parse by @zuston in https://github.com/zuston/riffle/pull/647
* fix(urpc): enable streaming parse by default by @zuston in https://github.com/zuston/riffle/pull/648
* feat(hdfs): update hdfs-native version to 0.14.3 by @zuston in https://github.com/zuston/riffle/pull/652
* feat(hdfs): introduce the huge partition spill threshold config option by @zuston in https://github.com/zuston/riffle/pull/651
* chore: bump version to 0.26.0 by @zuston in https://github.com/zuston/riffle/pull/653


**Full Changelog**: https://github.com/zuston/riffle/compare/v0.25.0-rc1...v0.26.0-rc1


## [v0.25.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.25.0-rc1)

_June 22, 2026_

- show running_apps in instances table · [#630](https://github.com/zuston/riffle/pull/630)
- expose running app count fetch failures and reduce fetch concurrency · [#636](https://github.com/zuston/riffle/pull/636)
- release timeout ticket budget · [#635](https://github.com/zuston/riffle/pull/635)
- correct batch kill progress and failure counting · [#629](https://github.com/zuston/riffle/pull/629)
- bump version to 0.25.0 · [#637](https://github.com/zuston/riffle/pull/637)
- disable flaky test of graceful_shutdown_test · [#632](https://github.com/zuston/riffle/pull/632)
- fix typo of kerberos · [#631](https://github.com/zuston/riffle/pull/631)

## [v0.24.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.24.0-rc1)

_June 1, 2026_

- add support of server tags modification via riffle-ctl · [#626](https://github.com/zuston/riffle/pull/626)
- implement O_DIRECT append aligned with sync_io · [#623](https://github.com/zuston/riffle/pull/623)
- streaming parser EOF hang on mid-frame close · [#624](https://github.com/zuston/riffle/pull/624)
- bump version to 0.24.0 · [#628](https://github.com/zuston/riffle/pull/628)

## [v0.23.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.23.0-rc1)

_May 25, 2026_

- add metrics for connection buffer capacity tracking · [#618](https://github.com/zuston/riffle/pull/618)
- add streaming urpc parsing for SendShuffleData · [#617](https://github.com/zuston/riffle/pull/617)
- bump version 0.23 · [#619](https://github.com/zuston/riffle/pull/619)

## [v0.22.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.22.0-rc1)

_April 20, 2026_

- only activate hard_split when client partition reassign is enabled · [#615](https://github.com/zuston/riffle/pull/615)
- increase max_connections to 200K · [#614](https://github.com/zuston/riffle/pull/614)
- add await-tree and more logs for different phases of one request · [#612](https://github.com/zuston/riffle/pull/612)
- ensure await-tree is registered only once to prevent significant performance regression · [#609](https://github.com/zuston/riffle/pull/609)
- Subtract metric of read_ahead_active_tasks in ReadAheadLayerWrapper · [#606](https://github.com/zuston/riffle/pull/606)
- bump version to 0.22.0 · [#611](https://github.com/zuston/riffle/pull/611)
- fix(localfile)(uring): writing iovec chunked on exceeding UIO_MAXIOV limit · [#608](https://github.com/zuston/riffle/pull/608)

## [v0.21.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.21.0-rc1)

_March 24, 2026_

- Add histogram for RPC batch data bytes in SendDataRequestCommand · [`49423cc`](https://github.com/zuston/riffle/commit/49423cc)
- allow client to configure app heartbeat timeout · [#599](https://github.com/zuston/riffle/pull/599)
- add metric of urpc_request_number · [#596](https://github.com/zuston/riffle/pull/596)
- Add metric of time spent (ms) looking up memory spill partitions · [#595](https://github.com/zuston/riffle/pull/595)
- Log the partitions that are split/huge for the first time · [#594](https://github.com/zuston/riffle/pull/594)
- Abort core-affinity in aarch64 to improve performance · [#578](https://github.com/zuston/riffle/pull/578)
- Dedicated buffer size tracking to speed up spill lookup · [#576](https://github.com/zuston/riffle/pull/576)
- Support read all for `sync_io` at `IoMode::DIRECT_IO` · [#582](https://github.com/zuston/riffle/pull/582)
- Align with the latest profiling in README · [#577](https://github.com/zuston/riffle/pull/577)
- Try to add agents.md · [#571](https://github.com/zuston/riffle/pull/571)
- Adjust uring default threads to 2 · [#570](https://github.com/zuston/riffle/pull/570)
- avoid incorrect purge by rechecking app heartbeat timeout · [#598](https://github.com/zuston/riffle/pull/598)
- Distinguish `ENOSPC` from disk corruption in health check · [#589](https://github.com/zuston/riffle/pull/589)
- fix use-after-move bug for splice_pipe · [#579](https://github.com/zuston/riffle/pull/579)
- Potential file leak on async-task missing · [#572](https://github.com/zuston/riffle/pull/572)
- Bump version to 0.21.0 · [#603](https://github.com/zuston/riffle/pull/603)
- feat(1/N)(coordinator): Introduce coordinator module · [#574](https://github.com/zuston/riffle/pull/574)

## [v0.20.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.20.0-rc2)

_February 4, 2026_

- Distinguish `ENOSPC` from disk corruption in health check (#589) · [#591](https://github.com/zuston/riffle/pull/591)

## [v0.20.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.20.0-rc1)

_December 31, 2025_

- Add metric for splice · [#568](https://github.com/zuston/riffle/pull/568)
- Standardize naming by hard-split and add metric · [#565](https://github.com/zuston/riffle/pull/565)
- Introduce a pluggable mem-buffer mechanism and an optimized staging buffer impl · [#564](https://github.com/zuston/riffle/pull/564)
- Fallback to `psync` engine when `sendfile` is selected · [#562](https://github.com/zuston/riffle/pull/562)
- Refactor and introduce the `urpcReadIoMode` for client · [#560](https://github.com/zuston/riffle/pull/560)
- Introduce zero-copy reads to socket using `splice` · [#559](https://github.com/zuston/riffle/pull/559)
- Only make this valid on Linux · [#558](https://github.com/zuston/riffle/pull/558)
- Respect io-uring config options · [#551](https://github.com/zuston/riffle/pull/551)
- Activate anolisos8 + arm64 release · [#550](https://github.com/zuston/riffle/pull/550)
- Add support of `io_uring` engine (experimental) · [#549](https://github.com/zuston/riffle/pull/549)
- Use the `HARD_SPLIT_FROM_SERVER` code to followup uniffle impl · [#547](https://github.com/zuston/riffle/pull/547)
- Upgrade integration env to anolisos8 · [#544](https://github.com/zuston/riffle/pull/544)
- Quick start to build the riffle cluster · [#535](https://github.com/zuston/riffle/pull/535)
- Must register hard-split metric · [#569](https://github.com/zuston/riffle/pull/569)
- Data inconsistency due to hanging pointer of written bytes · [#553](https://github.com/zuston/riffle/pull/553)
- Hang with sql-tests · [#539](https://github.com/zuston/riffle/pull/539)
- With token to avoid api limit on setup-protoc · [#538](https://github.com/zuston/riffle/pull/538)
- flaky test of urpc#test_client · [#537](https://github.com/zuston/riffle/pull/537)
- Bump version to 0.20.0 · [#567](https://github.com/zuston/riffle/pull/567)
- Add uring quick-start · [#561](https://github.com/zuston/riffle/pull/561)
- Remove v2 suffix for memory buffer · [#548](https://github.com/zuston/riffle/pull/548)
- Remove unrelated tests · [#533](https://github.com/zuston/riffle/pull/533)
- feat(ci)(3/N): Add prometheus + grafana in integration test · [#540](https://github.com/zuston/riffle/pull/540)

## [v0.19.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.19.0-rc1)

_December 3, 2025_

- Trigger partition split when storage is unhealthy · [#532](https://github.com/zuston/riffle/pull/532)
- Use `spark.rss.riffle.getMemoryDataUrpcVersion` for client to control compatible urpc version · [#529](https://github.com/zuston/riffle/pull/529)
- Introduce `isEnd` to indicate EOF on getting memory data · [#527](https://github.com/zuston/riffle/pull/527)
- Bump version to 0.19.0 · [#536](https://github.com/zuston/riffle/pull/536)
- Upgrade version to 0.18.1 · [#528](https://github.com/zuston/riffle/pull/528)
- feat(ci)(2/N): Add tpcds test with uniffle + spark · [#534](https://github.com/zuston/riffle/pull/534)
- feat(ci)(1/N):  Introduce integration tests with uniffle + spark · [#531](https://github.com/zuston/riffle/pull/531)

## [v0.18.2](https://github.com/zuston/riffle/releases/tag/v0.18.2)

_January 21, 2026_

- Abort core-affinity in aarch64 to improve performance · [#578](https://github.com/zuston/riffle/pull/578)

## [v0.18.1](https://github.com/zuston/riffle/releases/tag/v0.18.1)

_December 29, 2025_

- Activate anolisos8 + arm64 release · [`ed0fa55`](https://github.com/zuston/riffle/commit/ed0fa55)
- Bump version to 0.18.1 · [`0f01fa5`](https://github.com/zuston/riffle/commit/0f01fa5)

## [v0.18.0](https://github.com/zuston/riffle/releases/tag/v0.18.0)

_November 19, 2025_

This stable release promotes **v0.18.0-rc2** without additional source changes.

## [v0.18.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.18.0-rc2)

_November 19, 2025_

- activate amd64 + anolisos release · [#526](https://github.com/zuston/riffle/pull/526)

## [v0.18.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.18.0-rc1)

_November 14, 2025_

- Add support of partition_stats management · [#521](https://github.com/zuston/riffle/pull/521)
- Always show the app's hdfs root · [#516](https://github.com/zuston/riffle/pull/516)
- Potential duplicate `partition_stats` report bound by the same task_attempt_id · [#524](https://github.com/zuston/riffle/pull/524)
- Implement `display` for `PurgeReason` to show more infos · [#522](https://github.com/zuston/riffle/pull/522)
- Bump version to 0.18.0 · [#525](https://github.com/zuston/riffle/pull/525)
- Delete unused proto fields for `ReportShuffleResultRequest` · [`15bfe0b`](https://github.com/zuston/riffle/commit/15bfe0b)

## [v0.17.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.17.0-rc1)

_October 15, 2025_

- Make jemalloc as default feature · [#515](https://github.com/zuston/riffle/pull/515)
- Replace all dashmap to ddashmap with fast hash · [#514](https://github.com/zuston/riffle/pull/514)
- Refactor ddashmap to set up the hash algo · [#512](https://github.com/zuston/riffle/pull/512)
- Add support of kill with blocking wait · [#510](https://github.com/zuston/riffle/pull/510)
- Refactor admin http api to add more api · [#509](https://github.com/zuston/riffle/pull/509)
- Reduce binary size · [#507](https://github.com/zuston/riffle/pull/507)
- Correct the read ahead task metrics on deletion · [#513](https://github.com/zuston/riffle/pull/513)
- Remove unix specified import to avoid compile failure in windows · [#511](https://github.com/zuston/riffle/pull/511)

## [v0.16.0](https://github.com/zuston/riffle/releases/tag/v0.16.0)

_September 16, 2025_

- Only log active urpc request in await-tree · [#506](https://github.com/zuston/riffle/pull/506)
- Always use Bytesize crate to remove `readable_size` · [#505](https://github.com/zuston/riffle/pull/505)
- Add default runtime config test · [#504](https://github.com/zuston/riffle/pull/504)
- Bump version to 0.17.0 · [#503](https://github.com/zuston/riffle/pull/503)

## [v0.16.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.16.0-rc2)

_September 16, 2025_

- Disable fail fast and anolisos8 on release workflow · [#502](https://github.com/zuston/riffle/pull/502)

## [v0.16.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.16.0-rc1)

_September 15, 2025_

- Add root into the read-ahead processor await-tree log · [#501](https://github.com/zuston/riffle/pull/501)
- Normalize app_id output · [#500](https://github.com/zuston/riffle/pull/500)
- Purge apps when accepting force-kill signal · [#499](https://github.com/zuston/riffle/pull/499)
- Distinguish metrics based on read-ahead being disabled · [#495](https://github.com/zuston/riffle/pull/495)
- Add metric to observe small range read latency/size · [#497](https://github.com/zuston/riffle/pull/497)
- Accept read plan and then to prefetch to adapt AQE skew optimization · [#488](https://github.com/zuston/riffle/pull/488)
- followup #481 to respect options setting by client for read-ahead batch number/size · [#485](https://github.com/zuston/riffle/pull/485)
- Correct hit metric and introduce 2 metrics to indicate duration · [#484](https://github.com/zuston/riffle/pull/484)
- Introduce seperated options to control ahead batch number/size for client · [#481](https://github.com/zuston/riffle/pull/481)
- Mark partial logs with long-running tag · [#479](https://github.com/zuston/riffle/pull/479)
- Await-tree log with read/writer options · [#477](https://github.com/zuston/riffle/pull/477)
- Missing `task_id` for read plan · [#491](https://github.com/zuston/riffle/pull/491)
- Noisy log when deleting in read ahead io layer · [#472](https://github.com/zuston/riffle/pull/472)
- Incorrect log when conf key updating · [#468](https://github.com/zuston/riffle/pull/468)
- Hang on holding load_task · [#476](https://github.com/zuston/riffle/pull/476)
- Make sequential param as false by default · [#474](https://github.com/zuston/riffle/pull/474)
- Bump version to 0.16.0 · [#473](https://github.com/zuston/riffle/pull/473)
- feat(read-ahead)(read-plan): Use dedicated thread pool for read-plan processor · [#494](https://github.com/zuston/riffle/pull/494)
- feat(read-ahead)(read-plan): Add hit/miss metrics · [#493](https://github.com/zuston/riffle/pull/493)

## [v0.15.1](https://github.com/zuston/riffle/releases/tag/v0.15.1)

_September 11, 2025_

- Add metric to observe small range read latency/size · [#497](https://github.com/zuston/riffle/pull/497)

## [v0.15.0](https://github.com/zuston/riffle/releases/tag/v0.15.0)

_August 28, 2025_

This stable release promotes **v0.15.0-rc3** without additional source changes.

## [v0.15.0-rc3](https://github.com/zuston/riffle/releases/tag/v0.15.0-rc3)

_August 28, 2025_

- Hang on holding load_task · [#476](https://github.com/zuston/riffle/pull/476)

## [v0.15.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.15.0-rc2)

_August 27, 2025_

- Make sequential param as false by default · [#474](https://github.com/zuston/riffle/pull/474)

## [v0.15.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.15.0-rc1)

_August 25, 2025_

- Introduce optional huge_partition_spill var to disable flushing to HDFS · [#467](https://github.com/zuston/riffle/pull/467)
- Simplify pre-check logic for hdfs · [#455](https://github.com/zuston/riffle/pull/455)
- Invalid upload operation for centos7 binaries · [#462](https://github.com/zuston/riffle/pull/462)
- Always print normalized app_id in logs · [#460](https://github.com/zuston/riffle/pull/460)
- Use `mut self` for builder-style chaining for `ReadingViewContext` · [#459](https://github.com/zuston/riffle/pull/459)
- Bump version to 0.15.0 · [#457](https://github.com/zuston/riffle/pull/457)
- fix(read-ahead)(5/N): Only record data file reading latency · [#463](https://github.com/zuston/riffle/pull/463)
- feat(read-ahead)(4/N): Add more metrics · [#461](https://github.com/zuston/riffle/pull/461)
- feat(read-ahead)(3/N): Complete read-ahead configuration options · [#458](https://github.com/zuston/riffle/pull/458)
- feat(read-ahead)(2/N): Infer localfile sequential read to activate read ahead · [#456](https://github.com/zuston/riffle/pull/456)

## [v0.14.1](https://github.com/zuston/riffle/releases/tag/v0.14.1)

_August 14, 2025_

This stable release promotes **v0.14.1-rc1** without additional source changes.

## [v0.14.1-rc1](https://github.com/zuston/riffle/releases/tag/v0.14.1-rc1)

_August 14, 2025_

- Remove metric label of huge_partition_number · [#444](https://github.com/zuston/riffle/pull/444)
- Too frequent log output on urpc `send_data` · [#452](https://github.com/zuston/riffle/pull/452)
- Always print normalized app_id in logs · [#442](https://github.com/zuston/riffle/pull/442)
- README update again · [#450](https://github.com/zuston/riffle/pull/450)
- README update · [#445](https://github.com/zuston/riffle/pull/445)

## [v0.14.0](https://github.com/zuston/riffle/releases/tag/v0.14.0)

_August 13, 2025_

This stable release promotes **v0.14.0-rc5** without additional source changes.

## [v0.14.0-rc5](https://github.com/zuston/riffle/releases/tag/v0.14.0-rc5)

_August 13, 2025_

- Correct artifacts name · [#449](https://github.com/zuston/riffle/pull/449)

## [v0.14.0-rc4](https://github.com/zuston/riffle/releases/tag/v0.14.0-rc4)

_August 12, 2025_

- Multi artifacts for one arch and os · [#447](https://github.com/zuston/riffle/pull/447)

## [v0.14.0-rc3](https://github.com/zuston/riffle/releases/tag/v0.14.0-rc3)

_August 12, 2025_

- Unknown flag when uploading to release page · [#446](https://github.com/zuston/riffle/pull/446)

## [v0.14.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.14.0-rc2)

_August 12, 2025_

- Use fixed rustc version to bypass build failure on macos · [#443](https://github.com/zuston/riffle/pull/443)

## [v0.14.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.14.0-rc1)

_August 8, 2025_

- Add rpc duration to inspect · [#441](https://github.com/zuston/riffle/pull/441)
- Add server status transition reason · [#440](https://github.com/zuston/riffle/pull/440)
- Enable keep_alive and nodelay for connection · [#437](https://github.com/zuston/riffle/pull/437)
- Add support of task_ids filter on memory getting rpc · [#433](https://github.com/zuston/riffle/pull/433)
- Add cluster ids config to simplify specify coordinator url · [#430](https://github.com/zuston/riffle/pull/430)
- Remove unused param and make updated status as enum · [#429](https://github.com/zuston/riffle/pull/429)
- Fallback to localfile on huge partition writing hdfs failure · [#415](https://github.com/zuston/riffle/pull/415)
- Detailed log on flushing failure · [#416](https://github.com/zuston/riffle/pull/416)
- Add license file · [#417](https://github.com/zuston/riffle/pull/417)
- Add default tags · [#413](https://github.com/zuston/riffle/pull/413)
- Add support of read ahead · [#411](https://github.com/zuston/riffle/pull/411)
- Upgrade hdrs version to record opening file error · [#408](https://github.com/zuston/riffle/pull/408)
- Add fallback mechanism to avoid panic on application id parsing · [#407](https://github.com/zuston/riffle/pull/407)
- Align with the same prefix of `spark.rss.riffle` for all client options · [`1003155`](https://github.com/zuston/riffle/commit/1003155)
- Add hdfs append action to test · [#400](https://github.com/zuston/riffle/pull/400)
- Add precheck mechanism to avoid silent failure · [#405](https://github.com/zuston/riffle/pull/405)
- Refactor the `let chains` to fix release CI · [#422](https://github.com/zuston/riffle/pull/422)
- Remove HDFS main app dir when explicit-unresgiter or heartbeat-timeout · [#420](https://github.com/zuston/riffle/pull/420)
- Missing component identifier in asset file name · [#402](https://github.com/zuston/riffle/pull/402)
- Add updated cargo.lock of upgraded hdrs version · [#409](https://github.com/zuston/riffle/pull/409)

## [v0.13.0](https://github.com/zuston/riffle/releases/tag/v0.13.0)

_July 24, 2025_

This stable release promotes **v0.13.0-rc2** without additional source changes.

## [v0.13.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.13.0-rc2)

_July 24, 2025_

- Upgrade hdrs version to record opening file error · [#408](https://github.com/zuston/riffle/pull/408)

## [v0.13.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.13.0-rc1)

_July 22, 2025_

- Only one thread can create dir on hdfs and upgrade hdrs version to print stacktrace · [#396](https://github.com/zuston/riffle/pull/396)
- Support per-application toggle for sendfile feature · [#393](https://github.com/zuston/riffle/pull/393)
- Respect client-side RSS configs when applying app-level options · [#391](https://github.com/zuston/riffle/pull/391)
- Use sendfile to optimize file-to-socket transfers on Linux · [#379](https://github.com/zuston/riffle/pull/379)
- Activate log append into stdout for default log · [#384](https://github.com/zuston/riffle/pull/384)
- Replaced BufWriter with an explicit write buffer for TcpStream · [#378](https://github.com/zuston/riffle/pull/378)
- Align with log options · [#375](https://github.com/zuston/riffle/pull/375)
- Build artifacts for labeled PR · [#376](https://github.com/zuston/riffle/pull/376)
- Avoid panic on hdfs client creating failure · [#398](https://github.com/zuston/riffle/pull/398)
- Reserve log guard to make it valid · [#394](https://github.com/zuston/riffle/pull/394)
- Simplify sendfile logic and fix sendfile hang · [#389](https://github.com/zuston/riffle/pull/389)
- logforth compatibility with version 0.21.6 · [#373](https://github.com/zuston/riffle/pull/373)
- LocalIO trait · [#377](https://github.com/zuston/riffle/pull/377)
- Remove noisy log about ticket checking · [#382](https://github.com/zuston/riffle/pull/382)
- Upgrade logforth to 0.26.2 to fix rolling · [#380](https://github.com/zuston/riffle/pull/380)
- Upgrade logforth version to 0.26.1 · [#372](https://github.com/zuston/riffle/pull/372)

## [v0.12.0](https://github.com/zuston/riffle/releases/tag/v0.12.0)

_June 19, 2025_

This stable release promotes **v0.12.0-rc4** without additional source changes.

## [v0.12.0-rc4](https://github.com/zuston/riffle/releases/tag/v0.12.0-rc4)

_June 19, 2025_

- Only retrieve necessary tables for query · [#359](https://github.com/zuston/riffle/pull/359)
- Incorrect logic of is_huge_partition · [#360](https://github.com/zuston/riffle/pull/360)
- Remove reject mod · [#356](https://github.com/zuston/riffle/pull/356)

## [v0.12.0-rc3](https://github.com/zuston/riffle/releases/tag/v0.12.0-rc3)

_June 17, 2025_

- Make service unhealthy if IO operation timeout · [#354](https://github.com/zuston/riffle/pull/354)
- Correct apps purge due to incorrect timeout · [#355](https://github.com/zuston/riffle/pull/355)
- Potential invalid huge partition mark · [#353](https://github.com/zuston/riffle/pull/353)

## [v0.12.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.12.0-rc2)

_June 16, 2025_

- Compile failure with feature hdrs · [#352](https://github.com/zuston/riffle/pull/352)

## [v0.12.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.12.0-rc1)

_June 16, 2025_

- Add urpc decoding bench · [#350](https://github.com/zuston/riffle/pull/350)
- Remove app level statistics with metrics format · [#347](https://github.com/zuston/riffle/pull/347)
- Add riffle-ctl introduction · [#348](https://github.com/zuston/riffle/pull/348)
- Expose partition split triggered info into http api · [#346](https://github.com/zuston/riffle/pull/346)
- Add support of kill command · [#338](https://github.com/zuston/riffle/pull/338)
- Add the QPS metric · [#342](https://github.com/zuston/riffle/pull/342)
- Refine index file format capacity · [#340](https://github.com/zuston/riffle/pull/340)
- Reduce too many await-tree and refine hashmap capacity on parsing · [#339](https://github.com/zuston/riffle/pull/339)
- Introduce `ApplicationId` for better hash/allocation/clone performance · [#337](https://github.com/zuston/riffle/pull/337)
- Skip strings and numa awareness · [#336](https://github.com/zuston/riffle/pull/336)
- Use flatten encoding for `send_shuffle_data` / `report_shuffle_result` · [#332](https://github.com/zuston/riffle/pull/332)
- Add bench for protobuf flat/nested structure · [#330](https://github.com/zuston/riffle/pull/330)
- Use extend to add multi blockIds of treemap for performance · [#329](https://github.com/zuston/riffle/pull/329)
- Directly serialize for only one partition on blockIds getting · [#328](https://github.com/zuston/riffle/pull/328)
- More precise rpc batch data size bucket · [#327](https://github.com/zuston/riffle/pull/327)
- Split into multiple files for app_manager · [#325](https://github.com/zuston/riffle/pull/325)
- Use block pool for composed_bytes to reduce long-tail latency · [#322](https://github.com/zuston/riffle/pull/322)
- Remove lock on localfile reading · [#321](https://github.com/zuston/riffle/pull/321)
- Refactor extended dashmap for app manager · [#320](https://github.com/zuston/riffle/pull/320)
- Detect disk write+read with more data by direct IO · [#345](https://github.com/zuston/riffle/pull/345)
- Disable disk detection on test env · [#351](https://github.com/zuston/riffle/pull/351)
- Bump version to 0.12.0 · [#349](https://github.com/zuston/riffle/pull/349)
- Revert &quot;feat: Use block pool for composed_bytes to reduce long-tail latency (…&quot; · [#323](https://github.com/zuston/riffle/pull/323)

## [v0.11.0](https://github.com/zuston/riffle/releases/tag/v0.11.0)

_June 3, 2025_

This stable release promotes **v0.11.0-rc2** without additional source changes.

## [v0.11.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.11.0-rc2)

_June 3, 2025_

- Disable parking_lot deadlock detection by default · [#319](https://github.com/zuston/riffle/pull/319)

## [v0.11.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.11.0-rc1)

_May 28, 2025_

- Eliminate cost of partition uid construction on partition limit/split disabled · [#317](https://github.com/zuston/riffle/pull/317)
- Replace rwlock with parking_lot mutex in memory buffer access · [#316](https://github.com/zuston/riffle/pull/316)
- Await-tree too much/heavy spans · [#314](https://github.com/zuston/riffle/pull/314)
- Introducing dashmap extend to unify invoking sides · [#313](https://github.com/zuston/riffle/pull/313)
- Unify rpc batch data bytes into one metric with different labels · [#308](https://github.com/zuston/riffle/pull/308)
- Add received bytes in active app infos · [#307](https://github.com/zuston/riffle/pull/307)
- Pre-check target status and echo error failure · [#306](https://github.com/zuston/riffle/pull/306)
- Collect read local data bytes with histogram format · [#305](https://github.com/zuston/riffle/pull/305)
- Introducing decommission_grpc_mode in update status command of ctl · [#304](https://github.com/zuston/riffle/pull/304)
- Automatically reload tables on the PostgreSQL server · [#302](https://github.com/zuston/riffle/pull/302)
- Using more fast hasher in app hotpoint dashmap · [#301](https://github.com/zuston/riffle/pull/301)
- Collect localfile index data bytes with histogram format · [#300](https://github.com/zuston/riffle/pull/300)
- Upgrade await-tree for better performance · [#293](https://github.com/zuston/riffle/pull/293)
- Remove unnecessary files to free up disk space · [#294](https://github.com/zuston/riffle/pull/294)
- Introducing disk-read-bench to test read performance · [#291](https://github.com/zuston/riffle/pull/291)
- add PostgreSQL protocol support for better inspection · [#284](https://github.com/zuston/riffle/pull/284)
- Decomposed into sub-crates to optimize build performance · [#288](https://github.com/zuston/riffle/pull/288)
- Pluggable historical apps store · [#282](https://github.com/zuston/riffle/pull/282)
- Optional reconfigurable conf · [#281](https://github.com/zuston/riffle/pull/281)
- Using mem table to replace csv disk datasource · [#275](https://github.com/zuston/riffle/pull/275)
- Eliminate outdated config option of dashmap shard · [#276](https://github.com/zuston/riffle/pull/276)
- Remove unnecessary raw bytestring value to eliminate copy cost in config_ref · [#273](https://github.com/zuston/riffle/pull/273)
- Tolerating partial coordinator heartbeat connection failures · [#270](https://github.com/zuston/riffle/pull/270)
- Decrease grpc number metrics in some abnormal cases · [#309](https://github.com/zuston/riffle/pull/309)
- Panic on cpu profiling · [#290](https://github.com/zuston/riffle/pull/290)
- Invalid on_change on duplicate registered same conf key · [#280](https://github.com/zuston/riffle/pull/280)
- Upgrade version to 0.11.0 · [#315](https://github.com/zuston/riffle/pull/315)
- With bytes size in rpc localfile get data/index · [#312](https://github.com/zuston/riffle/pull/312)
- Log throttle layer being enabled · [#271](https://github.com/zuston/riffle/pull/271)

## [v0.10.0](https://github.com/zuston/riffle/releases/tag/v0.10.0)

_May 22, 2025_

This stable release promotes **v0.10.0-rc3** without additional source changes.

## [v0.10.0-rc3](https://github.com/zuston/riffle/releases/tag/v0.10.0-rc3)

_May 22, 2025_

- fix: Panic on cpu profiling #290 · [`a2be6d4`](https://github.com/zuston/riffle/commit/a2be6d4)

## [v0.10.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.10.0-rc2)

_May 14, 2025_

- Dedicated options to control read/write throttle · [#267](https://github.com/zuston/riffle/pull/267)
- Re-introducing throttle mechanism · [#263](https://github.com/zuston/riffle/pull/263)
- Completion all status updating ctl interface · [#260](https://github.com/zuston/riffle/pull/260)
- Simplify release workflow · [#259](https://github.com/zuston/riffle/pull/259)
- Add support of riffle-ctl macos release CI · [#258](https://github.com/zuston/riffle/pull/258)
- Incorrect shuffle-server-ip due to the random port initialization sequence · [#264](https://github.com/zuston/riffle/pull/264)

## [v0.10.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.10.0-rc1)

_May 8, 2025_

- Dynamic concurrency limiter for event bus · [#255](https://github.com/zuston/riffle/pull/255)
- Optional unhealthy status on initial starting · [#256](https://github.com/zuston/riffle/pull/256)
- Introducing disk bench/profiler commands to inspect IO performance · [#253](https://github.com/zuston/riffle/pull/253)
- Distinguish dynamic or static config options for performance · [#248](https://github.com/zuston/riffle/pull/248)
- Throw root cause on hdfs operations failure · [#245](https://github.com/zuston/riffle/pull/245)
- Inject ports into process env · [#242](https://github.com/zuston/riffle/pull/242)
- Rename update state http API of admin handler · [#220](https://github.com/zuston/riffle/pull/220)
- Using dynamic http port to fetch · [#235](https://github.com/zuston/riffle/pull/235)
- Add support of deletion retry · [#234](https://github.com/zuston/riffle/pull/234)
- Introduce option for service with random ports if used · [#231](https://github.com/zuston/riffle/pull/231)
- Expose version + build date into http api · [#229](https://github.com/zuston/riffle/pull/229)
- Maximize available disk space for github action · [#215](https://github.com/zuston/riffle/pull/215)
- Make exceeding duration IO exit for hdfs append operation · [#203](https://github.com/zuston/riffle/pull/203)
- Add more logs when decommission · [#208](https://github.com/zuston/riffle/pull/208)
- Fallback to capacity/2 when acquired ticket &gt; capacity in throttle layer · [#254](https://github.com/zuston/riffle/pull/254)
- Correct hdfs writing failure log · [#246](https://github.com/zuston/riffle/pull/246)
- Remove child log path with server_id · [#240](https://github.com/zuston/riffle/pull/240)
- Activate internal grpc service · [#226](https://github.com/zuston/riffle/pull/226)
- No space left on device when compiling · [#218](https://github.com/zuston/riffle/pull/218)
- Introduce on_change for callback · [#249](https://github.com/zuston/riffle/pull/249)
- Introducing multi pluggable layers for IO · [#232](https://github.com/zuston/riffle/pull/232)
- Bump version to 0.10.0 · [#257](https://github.com/zuston/riffle/pull/257)
- Upgrade hdfs-native to 0.11.2 for better write stability · [#244](https://github.com/zuston/riffle/pull/244)
- Eliminate all compiler warnings · [#241](https://github.com/zuston/riffle/pull/241)
- feat(ctl)(4/N): Support pipeline mode for decommission · [#225](https://github.com/zuston/riffle/pull/225)
- fix(heartbeat)(2/N): Reset is_healthy rpc param when state is not active · [#222](https://github.com/zuston/riffle/pull/222)
- feat(heartbeat)(1/N): Align with uniffle heartbeat protobuf · [#219](https://github.com/zuston/riffle/pull/219)
- feat(ctl)(3/N): Add historical_apps and active_apps tables to query · [#213](https://github.com/zuston/riffle/pull/213)
- feat(ctl)(2/N): Add support of node update command · [#211](https://github.com/zuston/riffle/pull/211)
- feat(ctl)(1/N): Add query command for ctl · [#190](https://github.com/zuston/riffle/pull/190)

## [v0.9.1-rc1](https://github.com/zuston/riffle/releases/tag/v0.9.1-rc1)

_May 20, 2025_

- Panic on cpu profiling · [`68ae68a`](https://github.com/zuston/riffle/commit/68ae68a)

## [v0.9.0](https://github.com/zuston/riffle/releases/tag/v0.9.0)

_April 16, 2025_

This stable release promotes **v0.9.0-rc5** without additional source changes.

## [v0.9.0-rc5](https://github.com/zuston/riffle/releases/tag/v0.9.0-rc5)

_April 16, 2025_

- Activate internal grpc service · [#226](https://github.com/zuston/riffle/pull/226)

## [v0.9.0-rc4](https://github.com/zuston/riffle/releases/tag/v0.9.0-rc4)

_April 15, 2025_

- Reset is_healthy rpc param when state is not active · [#223](https://github.com/zuston/riffle/pull/223)
- Invalid decommission operation · [`6e7b796`](https://github.com/zuston/riffle/commit/6e7b796)

## [v0.9.0-rc3](https://github.com/zuston/riffle/releases/tag/v0.9.0-rc3)

_April 15, 2025_

- Invalid decommission operation · [#221](https://github.com/zuston/riffle/pull/221)

## [v0.9.0-rc2](https://github.com/zuston/riffle/releases/tag/v0.9.0-rc2)

_April 9, 2025_

- Bump version to 0.9.0 · [#210](https://github.com/zuston/riffle/pull/210)
- Update README · [#209](https://github.com/zuston/riffle/pull/209)

## [v0.9.0-rc1](https://github.com/zuston/riffle/releases/tag/v0.9.0-rc1)

_April 9, 2025_

- Add context for local io failure · [#201](https://github.com/zuston/riffle/pull/201)
- Mix different apps api into one · [#199](https://github.com/zuston/riffle/pull/199)
- Add support of heap profile with multi format · [#198](https://github.com/zuston/riffle/pull/198)
- Add support of cpu profile with multi format · [#197](https://github.com/zuston/riffle/pull/197)
- Unify index encode/decode into one place · [#155](https://github.com/zuston/riffle/pull/155)
- Expose http api to decommission · [#194](https://github.com/zuston/riffle/pull/194)
- Bound server_id into log parent folder · [#193](https://github.com/zuston/riffle/pull/193)
- Remove legacy memory profile dump with pprof format · [#195](https://github.com/zuston/riffle/pull/195)
- Introducing option to control disk pre launch purge · [#192](https://github.com/zuston/riffle/pull/192)
- Support decommission grpc api · [#191](https://github.com/zuston/riffle/pull/191)
- Bound shuffle_server_id into disk detection file name to ensure unique · [#189](https://github.com/zuston/riffle/pull/189)
- Involve version into the prometheus metric label · [#185](https://github.com/zuston/riffle/pull/185)
- Activate partition limit whatever partition split happens · [#205](https://github.com/zuston/riffle/pull/205)
- Flaky test of get_data_from_localfile · [#187](https://github.com/zuston/riffle/pull/187)
- Pre-check partition-limit and partition-split threshold value · [#206](https://github.com/zuston/riffle/pull/206)

## [v0.8.2](https://github.com/zuston/riffle/releases/tag/v0.8.2)

_March 27, 2025_

This stable release promotes **v0.8.2-rc1** without additional source changes.

## [v0.8.2-rc1](https://github.com/zuston/riffle/releases/tag/v0.8.2-rc1)

_March 27, 2025_

- Activate conf reload for partition limit related conf · [#183](https://github.com/zuston/riffle/pull/183)
- Add fallback for byteString in conf reload · [#180](https://github.com/zuston/riffle/pull/180)
- Generics to simplify reconf value invoking · [#179](https://github.com/zuston/riffle/pull/179)
- Add support of conf reload · [#178](https://github.com/zuston/riffle/pull/178)
- Add deadlock detection · [#177](https://github.com/zuston/riffle/pull/177)
- Add panic hook to catch it · [#176](https://github.com/zuston/riffle/pull/176)
- Attach tokio runtime name into background await-tree logs · [#175](https://github.com/zuston/riffle/pull/175)
- Align arm binary name with other binaries · [#174](https://github.com/zuston/riffle/pull/174)
- Bump version to 0.8.2 · [#184](https://github.com/zuston/riffle/pull/184)
- Eliminate all compiler warnings · [#181](https://github.com/zuston/riffle/pull/181)

## [v0.8.1](https://github.com/zuston/riffle/releases/tag/v0.8.1)

_March 19, 2025_

- Upload binaries to corresponding release page · [#172](https://github.com/zuston/riffle/pull/172)
- Rename release binary from uniffle-worker to riffle-server · [#171](https://github.com/zuston/riffle/pull/171)
- Attach tag/branch info into release artifact · [#170](https://github.com/zuston/riffle/pull/170)
- Bump version to 0.8.1 · [#173](https://github.com/zuston/riffle/pull/173)

## [v0.8.0](https://github.com/zuston/riffle/releases/tag/v0.8.0)

_March 19, 2025_

- Release build with anolisos8.8 on amd64 · [#165](https://github.com/zuston/riffle/pull/165)
- Add support of partition split · [#164](https://github.com/zuston/riffle/pull/164)
- followup to ignore non-huge-partition apps · [#163](https://github.com/zuston/riffle/pull/163)
- followup to activate historical app http json handler · [#162](https://github.com/zuston/riffle/pull/162)
- Support historical apps recording · [#161](https://github.com/zuston/riffle/pull/161)
- Token bucket IO limiter · [#157](https://github.com/zuston/riffle/pull/157)
- Add support index consistency detection for debug · [#153](https://github.com/zuston/riffle/pull/153)
- Add support of heap profile flamegraph · [#145](https://github.com/zuston/riffle/pull/145)
- Add support of async watermark-spill trigger · [#144](https://github.com/zuston/riffle/pull/144)
- Aggressively moving forward low-watermark on sensitive spill · [#142](https://github.com/zuston/riffle/pull/142)
- Unify await_tree spawn runtime · [#137](https://github.com/zuston/riffle/pull/137)
- Add await-tree for heartbeat task · [#136](https://github.com/zuston/riffle/pull/136)
- Log watermark spill conditions to check correctness · [#135](https://github.com/zuston/riffle/pull/135)
- Only mark as unhealthy when node app_running_num &gt; 50 · [#159](https://github.com/zuston/riffle/pull/159)
- Potential incorrect partition lock deletion due to the shuffle level purge · [#156](https://github.com/zuston/riffle/pull/156)
- Align with the meaning of empty option of io_scheduler to disable it · [#152](https://github.com/zuston/riffle/pull/152)
- Log flush error on flushing failure · [#151](https://github.com/zuston/riffle/pull/151)
- Activate huge_partition limit mechanism due to incorrect partition_ids · [#149](https://github.com/zuston/riffle/pull/149)
- Replace `add` with `sub` for `GAUGE_MEMORY_SPILL_IN_FLIGHT_BYTES_OF_HUGE_PARTITION` · [#141](https://github.com/zuston/riffle/pull/141)
- Exclude in_flight_bytes when looking up candidates · [#140](https://github.com/zuston/riffle/pull/140)
- Forget to register metric of memory_spill_in_flight_bytes_of_huge_partition · [#139](https://github.com/zuston/riffle/pull/139)
- Bump version to 0.8.0 · [#167](https://github.com/zuston/riffle/pull/167)
- Add more mem infos when huge partition limited happens · [#147](https://github.com/zuston/riffle/pull/147)
- Add detailed operations on await-tree log · [#143](https://github.com/zuston/riffle/pull/143)
- Bump version to 0.7.1 · [#138](https://github.com/zuston/riffle/pull/138)

## [v0.7.0](https://github.com/zuston/riffle/releases/tag/v0.7.0)

_March 4, 2025_

- Scope huge_partition's flight bytes into the watermark spill calculation to avoid backpressure · [#130](https://github.com/zuston/riffle/pull/130)
- Upgrade clap to version 4.x · [#127](https://github.com/zuston/riffle/pull/127)
- Unlimited dispatcher event-bus concurrency · [#121](https://github.com/zuston/riffle/pull/121)
- Add grafana dashboard template · [#119](https://github.com/zuston/riffle/pull/119)
- Expose http json api to get apps info · [#117](https://github.com/zuston/riffle/pull/117)
- Scope independent grpc request paths into qps metrics · [#115](https://github.com/zuston/riffle/pull/115)
- Introduce local_disk_service_used metric · [#114](https://github.com/zuston/riffle/pull/114)
- Adapt with multi different disks number on min_available_disk_number config · [#109](https://github.com/zuston/riffle/pull/109)
- Add disk explorer to detect bandwidth · [#105](https://github.com/zuston/riffle/pull/105)
- More easier to specify io-scheduler bandwidth config option · [#104](https://github.com/zuston/riffle/pull/104)
- Add health check policy for potential system hang · [#99](https://github.com/zuston/riffle/pull/99)
- local_disk_used_ratio is always 0 · [#113](https://github.com/zuston/riffle/pull/113)
- Bump the version to 0.7.0 · [#133](https://github.com/zuston/riffle/pull/133)
- Log the huge partition limitation configs · [#131](https://github.com/zuston/riffle/pull/131)
- Rename the data validation tools to ctl · [#126](https://github.com/zuston/riffle/pull/126)
- Remove unused code · [#123](https://github.com/zuston/riffle/pull/123)
- Remove the legacy jemalloc heap profile way · [#118](https://github.com/zuston/riffle/pull/118)
- Delete async local io code · [#110](https://github.com/zuston/riffle/pull/110)
- Remove unused structure · [#102](https://github.com/zuston/riffle/pull/102)
- Use parking_lot mutex to replace std for better performance in await-tree · [#122](https://github.com/zuston/riffle/pull/122)

## [v0.6.0](https://github.com/zuston/riffle/releases/tag/v0.6.0)

_February 20, 2025_

- Add the metric of resident bytes · [#97](https://github.com/zuston/riffle/pull/97)
- Sync all on buffer write to avoid latter page cache flush back storm · [#93](https://github.com/zuston/riffle/pull/93)
- direct_io with timeout mechanism to fast fail when io hang · [#80](https://github.com/zuston/riffle/pull/80)
- Inject cpu_arch into metric system and http service · [#79](https://github.com/zuston/riffle/pull/79)
- Trigger release binary on master push · [#78](https://github.com/zuston/riffle/pull/78)
- Introduce option to control read/append direct io · [#72](https://github.com/zuston/riffle/pull/72)
- Build binary that run on anolis aarch64 · [#67](https://github.com/zuston/riffle/pull/67)
- Enable memory-prof feature when releasing · [#65](https://github.com/zuston/riffle/pull/65)
- Exceed capacity permits request to fallback to the biggest capacity buffer · [#95](https://github.com/zuston/riffle/pull/95)
- Enable O_DIRECT + O_NOATIME flags on direct read · [#88](https://github.com/zuston/riffle/pull/88)
- CI failure of get_data_from_localfile · [#90](https://github.com/zuston/riffle/pull/90)
- Respect read/append independent direct-io option · [#87](https://github.com/zuston/riffle/pull/87)
- Fast fail on throwing dir_not_found to ignore events dropped metrics · [#84](https://github.com/zuston/riffle/pull/84)
- Add local_disk_healthy metric · [#81](https://github.com/zuston/riffle/pull/81)
- Unset runtime blocking thread num to activate parallel ability · [#76](https://github.com/zuston/riffle/pull/76)
- Correct status code of huge partition requirement rejection · [#66](https://github.com/zuston/riffle/pull/66)
- [followup] debug: Correct partitionId to log · [#92](https://github.com/zuston/riffle/pull/92)
- Log duration when getting local data + index · [#91](https://github.com/zuston/riffle/pull/91)
- [#74] fix(single-buffer-flush): Avoid using the global lock to skip some single partition flush logics · [#75](https://github.com/zuston/riffle/pull/75)

## [v0.5.0](https://github.com/zuston/riffle/releases/tag/v0.5.0)

_February 11, 2025_

- Remove duplicate CI workflows to speed up and add test on aarch64 · [#55](https://github.com/zuston/riffle/pull/55)
- Respect the log directory for logforth · [#61](https://github.com/zuston/riffle/pull/61)
- Lazily initialize hdfs client to reduce unnecessary memory footprint · [#58](https://github.com/zuston/riffle/pull/58)
- Avoid sync block_on when registering · [#56](https://github.com/zuston/riffle/pull/56)
- Add symbolize for memory profile · [#54](https://github.com/zuston/riffle/pull/54)
- Add the metric of memory_allocated_tickets_num · [#52](https://github.com/zuston/riffle/pull/52)
- Upgrade to actions/upload-artifact@v4 · [#53](https://github.com/zuston/riffle/pull/53)
- Introduce option to mark service unhealthy when exceeding the memory allocation threshold · [#51](https://github.com/zuston/riffle/pull/51)
- Report block id number into metric system · [#50](https://github.com/zuston/riffle/pull/50)
- Introduce pluggable block id manager · [#41](https://github.com/zuston/riffle/pull/41)
- Release workflow with hdrs feature · [#59](https://github.com/zuston/riffle/pull/59)
- Correct check of allocator allocation size in health service · [#60](https://github.com/zuston/riffle/pull/60)
- Directly return when app has been purged · [#38](https://github.com/zuston/riffle/pull/38)
- Collapse partial section · [#63](https://github.com/zuston/riffle/pull/63)
- Update README · [#62](https://github.com/zuston/riffle/pull/62)

## [v0.4.1](https://github.com/zuston/riffle/releases/tag/v0.4.1)

_January 16, 2025_

- Add more await-tree logs on getting block_id bitmap · [#39](https://github.com/zuston/riffle/pull/39)
- Inject compile git commit id into the runtime · [#37](https://github.com/zuston/riffle/pull/37)
- App clone when registering for global race condition to speed up · [#36](https://github.com/zuston/riffle/pull/36)
- Avoid hang when getting blockId bitmap · [#35](https://github.com/zuston/riffle/pull/35)

## [v0.4.0](https://github.com/zuston/riffle/releases/tag/v0.4.0)

_January 15, 2025_

- Try to merge multi blockIds bitmap into one by shuffleId to reduce memory footprint · [#25](https://github.com/zuston/riffle/pull/25)
- Purge blockId bitmap on shuffle level deletion · [#24](https://github.com/zuston/riffle/pull/24)
- Make debug level to 1 for better pprof visualization · [#22](https://github.com/zuston/riffle/pull/22)
- Use take to avoid allocation when releasing ioBuffer · [#21](https://github.com/zuston/riffle/pull/21)
- Auto return back to the buffer pool when buffer is useless · [#20](https://github.com/zuston/riffle/pull/20)
- Support direct io for predictable io performance · [#19](https://github.com/zuston/riffle/pull/19)
- Only delete hdfs files with owned shuffle-server id · [#32](https://github.com/zuston/riffle/pull/32)
- Align with the internal blockId config · [#33](https://github.com/zuston/riffle/pull/33)
- Correct partition number metric · [#30](https://github.com/zuston/riffle/pull/30)
- Correct snake case of getHdfsDelegator · [#27](https://github.com/zuston/riffle/pull/27)
- Allow dead_code and unused import or vars · [#26](https://github.com/zuston/riffle/pull/26)
- Update croaring to the version 2.x · [#23](https://github.com/zuston/riffle/pull/23)
- Update README · [`888c959`](https://github.com/zuston/riffle/commit/888c959)
- With offset in reading await-tree log · [`d297d29`](https://github.com/zuston/riffle/commit/d297d29)
- Add support of customized buffer percent · [`7e44106`](https://github.com/zuston/riffle/commit/7e44106)
- Balance append + read operations · [`9c152bd`](https://github.com/zuston/riffle/commit/9c152bd)
- Collect read memory allocation time · [`17d4bd9`](https://github.com/zuston/riffle/commit/17d4bd9)
- Scope io duration with timeout · [`05feaac`](https://github.com/zuston/riffle/commit/05feaac)

## [v0.3.1](https://github.com/zuston/riffle/releases/tag/v0.3.1)

_December 24, 2024_

- Record health stat transition in logs · [`89105af`](https://github.com/zuston/riffle/commit/89105af)
- Extra health check for disk used ratio to fallback assp · [`566fc1c`](https://github.com/zuston/riffle/commit/566fc1c)
- Local calculate for p99/pxx · [`74b3719`](https://github.com/zuston/riffle/commit/74b3719)
- Introduce logforth crate to rolling file and auto purge · [`21d6af8`](https://github.com/zuston/riffle/commit/21d6af8)

## [v0.3.0](https://github.com/zuston/riffle/releases/tag/v0.3.0)

_December 20, 2024_

- Simplify multi level event bus · [`6f8e2b5`](https://github.com/zuston/riffle/commit/6f8e2b5)
- Introduce unified metrics for rpc latency · [`6e5a57b`](https://github.com/zuston/riffle/commit/6e5a57b)
- Mark hdfs unhealthy once the oom occurs · [`20d332e`](https://github.com/zuston/riffle/commit/20d332e)
- More infos in localfile io operations · [`4f445b7`](https://github.com/zuston/riffle/commit/4f445b7)
- Set the concurrency limit followed by the runtime thread num by default · [`4b00aa2`](https://github.com/zuston/riffle/commit/4b00aa2)
- Scope the io operations into the runtime dedicated spawn_blocking thread_pools · [`758e9e4`](https://github.com/zuston/riffle/commit/758e9e4)
- Support fallback when warm is unhealthy · [`269d79f`](https://github.com/zuston/riffle/commit/269d79f)
- try(localfile)(3/N): correct the data file offset · [`a8aea68`](https://github.com/zuston/riffle/commit/a8aea68)
- amend the lazily freeze operation · [`732e5f1`](https://github.com/zuston/riffle/commit/732e5f1)
- Freeze data only when flushing to reduce resident memory size · [`1f1e8e1`](https://github.com/zuston/riffle/commit/1f1e8e1)

## [v0.2.0](https://github.com/zuston/riffle/releases/tag/v0.2.0)

_December 10, 2024_

- Print more logs on fs failure operations · [`480e30c`](https://github.com/zuston/riffle/commit/480e30c)
- Add all config options · [`3c59aed`](https://github.com/zuston/riffle/commit/3c59aed)
- Add support of customize labels · [`d67201b`](https://github.com/zuston/riffle/commit/d67201b)
- Only unregister huge partition metric if exists · [`e3c8190`](https://github.com/zuston/riffle/commit/e3c8190)
- Add partition number into app dashboard · [`fe4d2c5`](https://github.com/zuston/riffle/commit/fe4d2c5)
- Add basic apps dashboard · [`aad5445`](https://github.com/zuston/riffle/commit/aad5445)
- Add app level flushed bytes metrics · [`257c1c9`](https://github.com/zuston/riffle/commit/257c1c9)
- Correct illegal filter out condition when topN data size &lt;=0 · [`da77fb7`](https://github.com/zuston/riffle/commit/da77fb7)
- Correct date + partition number in apps dashboard · [`f503133`](https://github.com/zuston/riffle/commit/f503133)
- Correct duration in app dashboard · [`7be3c67`](https://github.com/zuston/riffle/commit/7be3c67)
- Make the invalid_block_id as -1 rather than 0 to fix block_id=0 reading dead loop · [`a4f8e44`](https://github.com/zuston/riffle/commit/a4f8e44)
- Remove the crc verfication to reduce cpu cost · [`d764bd4`](https://github.com/zuston/riffle/commit/d764bd4)
- correct html title · [`40e7b63`](https://github.com/zuston/riffle/commit/40e7b63)
- Filter out &lt;=0 resident apps · [`0de052d`](https://github.com/zuston/riffle/commit/0de052d)

## [v0.1.0](https://github.com/zuston/riffle/releases/tag/v0.1.0)

_December 5, 2024_

- Add basic release workflow · [`3ef8b5e`](https://github.com/zuston/riffle/commit/3ef8b5e)
- Add disk used ratio metric · [`c651ed5`](https://github.com/zuston/riffle/commit/c651ed5)
- Add gauge metric of huge partition number · [`c680dbb`](https://github.com/zuston/riffle/commit/c680dbb)
- Add long tail latency of transport log to analyze · [`a10b7a9`](https://github.com/zuston/riffle/commit/a10b7a9)
- Introduce storage level flushing size histogram · [`071c9cd`](https://github.com/zuston/riffle/commit/071c9cd)
- Fine-grained event metrics for localfile/hdfs flushing · [`92054a9`](https://github.com/zuston/riffle/commit/92054a9)
- Introduce option to control the huge partition flushing to hdfs threshold to avoid too much small events · [`7e0dfca`](https://github.com/zuston/riffle/commit/7e0dfca)
- Add huge partition number metric · [`04ac7ce`](https://github.com/zuston/riffle/commit/04ac7ce)
- Output huge partition marking · [`beb93f6`](https://github.com/zuston/riffle/commit/beb93f6)
- Catch up the localfile/hdfs underlying flush failure · [`b443774`](https://github.com/zuston/riffle/commit/b443774)
- Add support of partition number metrics · [`cb3c718`](https://github.com/zuston/riffle/commit/cb3c718)
- Provide hdrs as another hdfs writing choice · [`9e10a66`](https://github.com/zuston/riffle/commit/9e10a66)
- Make hdfs dependencies as the pluggable choice · [`6fcd537`](https://github.com/zuston/riffle/commit/6fcd537)
- Introduce heartbeat interval option of 2 seconds by default · [`12a1ac5`](https://github.com/zuston/riffle/commit/12a1ac5)
- Support jemalloc pprof to simplify memory profile · [`ef76731`](https://github.com/zuston/riffle/commit/ef76731)
- Introduce service_is_healthy metric · [`48a3c65`](https://github.com/zuston/riffle/commit/48a3c65)
- Introduce independent health service for more policies · [`38f205c`](https://github.com/zuston/riffle/commit/38f205c)
- Apply the unified rejection policy gateway · [`a697611`](https://github.com/zuston/riffle/commit/a697611)
- Add r1_tool to check the data consistency · [`f5b1120`](https://github.com/zuston/riffle/commit/f5b1120)
- Support kerberos kinit and update · [`391f074`](https://github.com/zuston/riffle/commit/391f074)
- Add support of writing multi same partition files at the same time · [`99ff722`](https://github.com/zuston/riffle/commit/99ff722)
- Reduce io operations · [`f39befb`](https://github.com/zuston/riffle/commit/f39befb)
- Add metrics about index file reading · [`be404be`](https://github.com/zuston/riffle/commit/be404be)
- Use the independent read runtime to delegate reading to avoid effecting grpc runtime · [`921a188`](https://github.com/zuston/riffle/commit/921a188)
- Add metrics/logs about disk reading · [`a620770`](https://github.com/zuston/riffle/commit/a620770)
- Add support of specifying concurrency · [`8b2b492`](https://github.com/zuston/riffle/commit/8b2b492)
- Enable the hierarchy event bus · [`4c51c18`](https://github.com/zuston/riffle/commit/4c51c18)
- Support hierarchy event bus for spill · [`15bfa50`](https://github.com/zuston/riffle/commit/15bfa50)
- Add test case about app is not found · [`bb924d4`](https://github.com/zuston/riffle/commit/bb924d4)
- Check app valid when spill or get · [`c79b195`](https://github.com/zuston/riffle/commit/c79b195)
- Add test case about spill fail and then drop · [`1e3d08a`](https://github.com/zuston/riffle/commit/1e3d08a)
- Introduce the unified rejection policy framework · [`e64723d`](https://github.com/zuston/riffle/commit/e64723d)
- Create spill test arch · [`963b336`](https://github.com/zuston/riffle/commit/963b336)
- Add support of single buffer spill · [`e2d2fba`](https://github.com/zuston/riffle/commit/e2d2fba)
- Amend to isolate localfile + hdfs writing runtime · [`7077bed`](https://github.com/zuston/riffle/commit/7077bed)
- Use the once cell to replace the ugly dashmap container only for later initialization in event bus · [`007e1f7`](https://github.com/zuston/riffle/commit/007e1f7)
- Implement huge partition -&gt; hdfs directly · [`e8e575b`](https://github.com/zuston/riffle/commit/e8e575b)
- Isolate storage and app_manager initialization · [`097f7b0`](https://github.com/zuston/riffle/commit/097f7b0)
- More quick to watermark spill · [`dd8812a`](https://github.com/zuston/riffle/commit/dd8812a)
- Distinguish in queue/in flushing of memory spill · [`039553a`](https://github.com/zuston/riffle/commit/039553a)
- Bind the every grpc thread into fixed physical core to improve performance · [`65c2e74`](https://github.com/zuston/riffle/commit/65c2e74)
- Add await-tree monitor when executing by subscribers · [`5bbaea5`](https://github.com/zuston/riffle/commit/5bbaea5)
- Introduce bps metrics for disk · [`6458b8f`](https://github.com/zuston/riffle/commit/6458b8f)
- Introduce io counter metrics for disk · [`fb11be0`](https://github.com/zuston/riffle/commit/fb11be0)
- Introduce disk_write_buf_capacity to control the buf size · [`98209aa`](https://github.com/zuston/riffle/commit/98209aa)
- Introduce event bus · [`35342a7`](https://github.com/zuston/riffle/commit/35342a7)
- Clear up all previous disk files when initializing localfile store · [`b329491`](https://github.com/zuston/riffle/commit/b329491)
- Use the BufWriter to reduce system call invoke for performance · [`3417145`](https://github.com/zuston/riffle/commit/3417145)
- Add metrics of disk append/read/stats operations time histogram · [`4638368`](https://github.com/zuston/riffle/commit/4638368)
- Collect spill batch size histogram metrics · [`d791807`](https://github.com/zuston/riffle/commit/d791807)
- Collect histogram metric for bytes freeze when getting memory data · [`db101f5`](https://github.com/zuston/riffle/commit/db101f5)
- Use dedicated urpc runtime pool for urpc · [`7b16dea`](https://github.com/zuston/riffle/commit/7b16dea)
- Eliminate unnecessary bytes copy when flushing · [`d6fb242`](https://github.com/zuston/riffle/commit/d6fb242)
- add more await-tree for disk operations · [`94ac95c`](https://github.com/zuston/riffle/commit/94ac95c)
- Add await-tree support for appManager · [`cdedda6`](https://github.com/zuston/riffle/commit/cdedda6)
- Print out await-tree tasks with sorted registry ID · [`dfb7b42`](https://github.com/zuston/riffle/commit/dfb7b42)
- Set the default feature with hdfs,jemalloc,allocator-analysis · [`178bfd6`](https://github.com/zuston/riffle/commit/178bfd6)
- Add more operations await for disk await-tree · [`0b7c834`](https://github.com/zuston/riffle/commit/0b7c834)
- Add await-tree for ticket scheduled check operation · [`39d8f50`](https://github.com/zuston/riffle/commit/39d8f50)
- Add support of parking_lot deadlock detection · [`fd109e7`](https://github.com/zuston/riffle/commit/fd109e7)
- Make local disk write all async · [`834bb9f`](https://github.com/zuston/riffle/commit/834bb9f)
- Avoid re-calculate composed bytes total len · [`4aceaef`](https://github.com/zuston/riffle/commit/4aceaef)
- Add more logs about appIds for those timeout tickets owner · [`1a91edc`](https://github.com/zuston/riffle/commit/1a91edc)
- Sort the blockId by task attempt id for AQE · [`9b821b6`](https://github.com/zuston/riffle/commit/9b821b6)
- Introduce the mimalloc · [`4c17f42`](https://github.com/zuston/riffle/commit/4c17f42)
- Support alternative memory allocated analysis · [`31d8e60`](https://github.com/zuston/riffle/commit/31d8e60)
- Fast fail when port has been used · [`c7f5fc0`](https://github.com/zuston/riffle/commit/c7f5fc0)
- Output more logs about heartbeat timeout · [`e1a042a`](https://github.com/zuston/riffle/commit/e1a042a)
- Remove the purged appId topN metrics · [`4e55ccf`](https://github.com/zuston/riffle/commit/4e55ccf)
- Unify setting the default value for some config options · [`dcd802e`](https://github.com/zuston/riffle/commit/dcd802e)
- Enable huge partition limitation · [`31d5b97`](https://github.com/zuston/riffle/commit/31d5b97)
- Refresh heartbeat time for every rpc especially for spark driver hang · [`6a4289b`](https://github.com/zuston/riffle/commit/6a4289b)
- Support spill to HDFS · [`626b9a8`](https://github.com/zuston/riffle/commit/626b9a8)
- Avoid extra mem allocation when reading · [`da03b40`](https://github.com/zuston/riffle/commit/da03b40)
- Introduce the composed byte for multi bytes · [`b0c4e01`](https://github.com/zuston/riffle/commit/b0c4e01)
- Avoid extra mem allocation to speed up reading · [`beab85a`](https://github.com/zuston/riffle/commit/beab85a)
- support await-tree tracing for request · [`10081c5`](https://github.com/zuston/riffle/commit/10081c5)
- add some logs when encountering unexpected cases · [`71eb1b1`](https://github.com/zuston/riffle/commit/71eb1b1)
- dump disk checking by await tree · [`ab3c6bf`](https://github.com/zuston/riffle/commit/ab3c6bf)
- add metric of connection number · [`eaadf2c`](https://github.com/zuston/riffle/commit/eaadf2c)
- setup metrics · [`484802c`](https://github.com/zuston/riffle/commit/484802c)
- implement get_local_data rpc · [`79bbe0b`](https://github.com/zuston/riffle/commit/79bbe0b)
- implement get_memory_data · [`6e796b8`](https://github.com/zuston/riffle/commit/6e796b8)
- improve performance to make socket shared by multiple listener · [`1773a1e`](https://github.com/zuston/riffle/commit/1773a1e)
- segment lock concurrency from 4 -&gt; 10 · [`56aff08`](https://github.com/zuston/riffle/commit/56aff08)
- support initial segment lock · [`a8724b3`](https://github.com/zuston/riffle/commit/a8724b3)
- expand the grpc paralleism · [`651ede6`](https://github.com/zuston/riffle/commit/651ede6)
- Introduce the memory buffer to speed up · [`6412127`](https://github.com/zuston/riffle/commit/6412127)
- assp release buffer lock · [`2d61006`](https://github.com/zuston/riffle/commit/2d61006)
- make the spill event triggered by the dedicated runtime · [`465506a`](https://github.com/zuston/riffle/commit/465506a)
- Add disk capacity metric · [`c85b9fc`](https://github.com/zuston/riffle/commit/c85b9fc)
- Align with the uniffle community protoc · [`ec995ea`](https://github.com/zuston/riffle/commit/ec995ea)
- Register total_huge_partition_number · [`44bb3a8`](https://github.com/zuston/riffle/commit/44bb3a8)
- Only exec delete hdfs dir when having data · [`494b7e6`](https://github.com/zuston/riffle/commit/494b7e6)
- Always getting staging size to check whether exceeding single buffer spill threshold · [`8aa4ff9`](https://github.com/zuston/riffle/commit/8aa4ff9)
- Correct metrics registry · [`4287afd`](https://github.com/zuston/riffle/commit/4287afd)
- test codebase failure · [`4c59e86`](https://github.com/zuston/riffle/commit/4c59e86)
- Support delete dirs recursively · [`17ef839`](https://github.com/zuston/riffle/commit/17ef839)
- Correct append operation · [`703df58`](https://github.com/zuston/riffle/commit/703df58)
- Avoid holding too much time of dashmap get_mut · [`0907b50`](https://github.com/zuston/riffle/commit/0907b50)
- Touch the file when creating another retry attempt append file · [`a042f7e`](https://github.com/zuston/riffle/commit/a042f7e)
- Append another retry file when appending complete failed · [`3643296`](https://github.com/zuston/riffle/commit/3643296)
- Incorrect semaphore index retrieving · [`4c64a88`](https://github.com/zuston/riffle/commit/4c64a88)
- Correct parent dir creating when inserting partition data · [`2032754`](https://github.com/zuston/riffle/commit/2032754)
- CI failure · [`e444f0e`](https://github.com/zuston/riffle/commit/e444f0e)
- spill failure when memory_localfile storage type is enabled · [`802bd77`](https://github.com/zuston/riffle/commit/802bd77)
- Correct the transport time metrics of grpc · [`c9bcfd5`](https://github.com/zuston/riffle/commit/c9bcfd5)
- Make in_flight bytes size bound into the spill event lifecycle · [`5e7d890`](https://github.com/zuston/riffle/commit/5e7d890)
- Avoid panic when file cache is missing · [`69d607e`](https://github.com/zuston/riffle/commit/69d607e)
- Zero data size when initializing writing ctx · [`7cd9c59`](https://github.com/zuston/riffle/commit/7cd9c59)
- Avoid multi initializing storage · [`b277fdf`](https://github.com/zuston/riffle/commit/b277fdf)
- Fix embedded worker startup · [`382d404`](https://github.com/zuston/riffle/commit/382d404)
- Critical bug of appending with one batch write all to speed up IO performance · [`7248d56`](https://github.com/zuston/riffle/commit/7248d56)
- Disable default features · [`417c06d`](https://github.com/zuston/riffle/commit/417c06d)
- Correct app_number metric · [`952a220`](https://github.com/zuston/riffle/commit/952a220)
- Correct the spill failure metrics and drop data directly when disk is unhealthy · [`9457dce`](https://github.com/zuston/riffle/commit/9457dce)
- Return the concrete status code when rejection by huge partition limit · [`0a05d20`](https://github.com/zuston/riffle/commit/0a05d20)
- Using the push_add when pushing prometheus · [`e95ea38`](https://github.com/zuston/riffle/commit/e95ea38)
- Dec memory_spill_to_localfile/hdfs although spill failure · [`1ff42db`](https://github.com/zuston/riffle/commit/1ff42db)
- Only dec app_number metrics when purging the whole app data · [`7dcedd2`](https://github.com/zuston/riffle/commit/7dcedd2)
- Avoid eating the unexpected error when spill · [`0b0267d`](https://github.com/zuston/riffle/commit/0b0267d)
- Try to fix overflow of total_localfile_used · [`5378b85`](https://github.com/zuston/riffle/commit/5378b85)
- Release the memory data and drop events when disk is unhealthy · [`a335389`](https://github.com/zuston/riffle/commit/a335389)
- Push metrics with worker id rather than ip · [`1196742`](https://github.com/zuston/riffle/commit/1196742)
- Throw detailed error when registering failure · [`398e488`](https://github.com/zuston/riffle/commit/398e488)
- Correct the log config and output all the config after log is initialized · [`8378d30`](https://github.com/zuston/riffle/commit/8378d30)
- Re-enable the CI · [`b6abaeb`](https://github.com/zuston/riffle/commit/b6abaeb)
- Correct blockIds when the multiple partition blockids request · [`9956fb2`](https://github.com/zuston/riffle/commit/9956fb2)
- fill the help placeholder · [`9e5fede`](https://github.com/zuston/riffle/commit/9e5fede)
- some features 1. using the runtime manager to spawn background task 2. introduce the evict timeout ticket number · [`952b2a6`](https://github.com/zuston/riffle/commit/952b2a6)
- fix all failure tests · [`577107d`](https://github.com/zuston/riffle/commit/577107d)
- amend implement get localfile data rpc · [`4ee556f`](https://github.com/zuston/riffle/commit/4ee556f)
- avoid explicitly type conversion when getting urpc · [`d6ebb38`](https://github.com/zuston/riffle/commit/d6ebb38)
- skip body len · [`a48d6f4`](https://github.com/zuston/riffle/commit/a48d6f4)
- ignore empty 0 · [`33cd958`](https://github.com/zuston/riffle/commit/33cd958)
- skip checked bytes in check frame · [`38f087a`](https://github.com/zuston/riffle/commit/38f087a)
- correct the spill size calculation · [`a5f7071`](https://github.com/zuston/riffle/commit/a5f7071)
- increase the max concurrency limit from 40 -&gt; 2000 by default · [`82438cb`](https://github.com/zuston/riffle/commit/82438cb)
- correct the transport time for grpc · [`14d0a11`](https://github.com/zuston/riffle/commit/14d0a11)
- Refactor http monitor service · [`f6bd994`](https://github.com/zuston/riffle/commit/f6bd994)
- Make the metrics service to cover the prometheus report · [`8d5544d`](https://github.com/zuston/riffle/commit/8d5544d)
- Make the heartbeat task in the independent file · [`b740780`](https://github.com/zuston/riffle/commit/b740780)
- reorganize log service · [`238df43`](https://github.com/zuston/riffle/commit/238df43)
- Output picked up events size distribution: max + min · [`1ae7c76`](https://github.com/zuston/riffle/commit/1ae7c76)
- Optimize logs and format style · [`f20731f`](https://github.com/zuston/riffle/commit/f20731f)
- Adjust log level and with more detailed info · [`ed97597`](https://github.com/zuston/riffle/commit/ed97597)
- Adjust await tree and log · [`c89c087`](https://github.com/zuston/riffle/commit/c89c087)
- Ignore sensitive info · [`f3d987a`](https://github.com/zuston/riffle/commit/f3d987a)
- Remove opendal crate due to the data loss · [`28f7cf3`](https://github.com/zuston/riffle/commit/28f7cf3)
- Remove sensitive info · [`810eb8a`](https://github.com/zuston/riffle/commit/810eb8a)
- Remove associated grpc/urpc runtime config · [`2d2c98d`](https://github.com/zuston/riffle/commit/2d2c98d)
- Rename the disk read/write/append metrics names · [`ce9a5ea`](https://github.com/zuston/riffle/commit/ce9a5ea)
- Disable too much logs about ticket requirement · [`c9c53d3`](https://github.com/zuston/riffle/commit/c9c53d3)
- Remove hdfs feature for default features · [`95beaab`](https://github.com/zuston/riffle/commit/95beaab)
- No need to use debug format · [`e97c01b`](https://github.com/zuston/riffle/commit/e97c01b)
- Activate default system allocator · [`4b321e5`](https://github.com/zuston/riffle/commit/4b321e5)
- remove too much logs about creating localfile dir · [`c4b12db`](https://github.com/zuston/riffle/commit/c4b12db)
- Update README · [`ba5fe36`](https://github.com/zuston/riffle/commit/ba5fe36)
- Update partial uniffle+netty 300g benchmark result · [`99c3825`](https://github.com/zuston/riffle/commit/99c3825)
- Remove unused code · [`4584b99`](https://github.com/zuston/riffle/commit/4584b99)
- log the dir creation · [`2507e3b`](https://github.com/zuston/riffle/commit/2507e3b)
- Update the README · [`aa36664`](https://github.com/zuston/riffle/commit/aa36664)
- Ignore protobuf generate file · [`21dd2f9`](https://github.com/zuston/riffle/commit/21dd2f9)
- update the benchmark for urpc 300g · [`6a4237d`](https://github.com/zuston/riffle/commit/6a4237d)
- update the benchmark result for 10g urpc · [`1c3e1b7`](https://github.com/zuston/riffle/commit/1c3e1b7)
- ignore the action of build.yaml · [`228679f`](https://github.com/zuston/riffle/commit/228679f)
- log level from info -&gt; debug · [`008e1a7`](https://github.com/zuston/riffle/commit/008e1a7)
- update the benchmark result · [`3fd4505`](https://github.com/zuston/riffle/commit/3fd4505)
- setup the constant for initial buffer capacity · [`bba29d7`](https://github.com/zuston/riffle/commit/bba29d7)
- more migration first time · [`7a3efc1`](https://github.com/zuston/riffle/commit/7a3efc1)
- Output the grpc parallelism · [`af502c1`](https://github.com/zuston/riffle/commit/af502c1)
- feat(localfile)(1/N): Align with multi disk for one partition mechanism · [`1ac12dd`](https://github.com/zuston/riffle/commit/1ac12dd)
- Revert &quot;feat: Apply the unified rejection policy gateway&quot; · [`1c3caf7`](https://github.com/zuston/riffle/commit/1c3caf7)
- Correct disk healthy check min number config key · [`ac655f9`](https://github.com/zuston/riffle/commit/ac655f9)
- feat(disk)(5/N): Activate healthy check · [`fcec16a`](https://github.com/zuston/riffle/commit/fcec16a)
- feat(disk)(4/N): Delete the legacy disk impl · [`37c895d`](https://github.com/zuston/riffle/commit/37c895d)
- feat(disk)(3/N): Replace the legacy disk impl · [`bd7872e`](https://github.com/zuston/riffle/commit/bd7872e)
- feat(disk)(2/N): Add the unified disk metrics in delegator abstract layer · [`2a7585c`](https://github.com/zuston/riffle/commit/2a7585c)
- feat(disk)(1/N): Introduce the pluggable io alternative strategies · [`c811241`](https://github.com/zuston/riffle/commit/c811241)
- Add the writing pre-check with crc/lenght (should be removed in the future) · [`9c36c74`](https://github.com/zuston/riffle/commit/9c36c74)
- Filter out zero buffer when lookup spill buffers · [`d1250dd`](https://github.com/zuston/riffle/commit/d1250dd)
- Isolate localfile + hdfs writing runtime · [`015d2d3`](https://github.com/zuston/riffle/commit/015d2d3)
- draft(event_bus)(part-5): Add concurrency limit for event handling at the same time · [`1bf9900`](https://github.com/zuston/riffle/commit/1bf9900)
- draft(event_bus)(part-4): Share the event publish method in hybrid store · [`fca9d3a`](https://github.com/zuston/riffle/commit/fca9d3a)
- draft(event_bus)(part-3): Implement and optimize eventbus metrics and logic · [`941a7bb`](https://github.com/zuston/riffle/commit/941a7bb)
- draft(event_bus)(part-2): Remove the legacy spill queue code · [`71400e8`](https://github.com/zuston/riffle/commit/71400e8)
- draft(event_bus)(part-1): Introduce the spillEventHandler · [`25761f7`](https://github.com/zuston/riffle/commit/25761f7)
- Complete the stat method for disk to replace get_file_len · [`b71e13a`](https://github.com/zuston/riffle/commit/b71e13a)
- For urpc, bound thread into socket for multiple cores scale performance · [`8f29516`](https://github.com/zuston/riffle/commit/8f29516)
- Bound thread into socket for multiple cores scale performance · [`52d12d9`](https://github.com/zuston/riffle/commit/52d12d9)
- Add more buckets for transport/process time histogram · [`a1ddd0e`](https://github.com/zuston/riffle/commit/a1ddd0e)
- register the grpc bytes freeze metric when getting memory data · [`58cb8de`](https://github.com/zuston/riffle/commit/58cb8de)
- Isolate IO tasks to independent runtime · [`5e2ee8c`](https://github.com/zuston/riffle/commit/5e2ee8c)
- Log the ticket for debug · [`f595d88`](https://github.com/zuston/riffle/commit/f595d88)
- optimize memory profile · [`16b933a`](https://github.com/zuston/riffle/commit/16b933a)
- update README · [`9e90751`](https://github.com/zuston/riffle/commit/9e90751)
- Update benchmark · [`7419254`](https://github.com/zuston/riffle/commit/7419254)
- Update README · [`7dd7dba`](https://github.com/zuston/riffle/commit/7dd7dba)
- Update benchmark result · [`824e9e5`](https://github.com/zuston/riffle/commit/824e9e5)
- zero copy roadmap · [`f784031`](https://github.com/zuston/riffle/commit/f784031)
- add stream incorrect error type · [`946c012`](https://github.com/zuston/riffle/commit/946c012)
- throw error log when parsing frames · [`7e2c0be`](https://github.com/zuston/riffle/commit/7e2c0be)
- fix host public · [`a0dcdcb`](https://github.com/zuston/riffle/commit/a0dcdcb)
- log accepted connection infos · [`9b2aa84`](https://github.com/zuston/riffle/commit/9b2aa84)
- create the simple config construction · [`e906121`](https://github.com/zuston/riffle/commit/e906121)
- correct log · [`ec1c3fc`](https://github.com/zuston/riffle/commit/ec1c3fc)
- correct to urpc · [`b97fc80`](https://github.com/zuston/riffle/commit/b97fc80)
- create the unified rpc service for urpc + grpc · [`5a3cb38`](https://github.com/zuston/riffle/commit/5a3cb38)
- reconstruct project structure · [`c68f73d`](https://github.com/zuston/riffle/commit/c68f73d)
- implement customize protocol · [`9d232ff`](https://github.com/zuston/riffle/commit/9d232ff)
- try to change the run-on system · [`1f9476c`](https://github.com/zuston/riffle/commit/1f9476c)
- try to build artifact · [`c4cb733`](https://github.com/zuston/riffle/commit/c4cb733)
- Add ROADMAP · [`8e62104`](https://github.com/zuston/riffle/commit/8e62104)
- Update readme · [`361f148`](https://github.com/zuston/riffle/commit/361f148)
- update the readme · [`8096a41`](https://github.com/zuston/riffle/commit/8096a41)
- Use rwlock to replace mutex in localfile · [`58936e7`](https://github.com/zuston/riffle/commit/58936e7)
- ensure the only one partition writer spill to file · [`7b5bf0c`](https://github.com/zuston/riffle/commit/7b5bf0c)
- fix some tests compile failure · [`a900902`](https://github.com/zuston/riffle/commit/a900902)
- Update the benchmark report · [`1af6b4d`](https://github.com/zuston/riffle/commit/1af6b4d)
- Merge multi allocated-&gt;used operations into one · [`8c3c300`](https://github.com/zuston/riffle/commit/8c3c300)
- disable fastrace · [`0f26c66`](https://github.com/zuston/riffle/commit/0f26c66)
- Use mutex to replace rwlock for budget · [`15ba095`](https://github.com/zuston/riffle/commit/15ba095)
- correct spill usage ratio logic · [`46cb583`](https://github.com/zuston/riffle/commit/46cb583)
- avoid outputting too much unnecessary logs · [`89db0db`](https://github.com/zuston/riffle/commit/89db0db)
- take with blocks len to avoid used metric incorrectness · [`3d01dc4`](https://github.com/zuston/riffle/commit/3d01dc4)
- avoid spin lock · [`4754dab`](https://github.com/zuston/riffle/commit/4754dab)
- avoid fastrace in critial path · [`01fcdbb`](https://github.com/zuston/riffle/commit/01fcdbb)
- use parking lot to avoid spin lock · [`5e319d2`](https://github.com/zuston/riffle/commit/5e319d2)
- Build the binary by action · [`f8e2378`](https://github.com/zuston/riffle/commit/f8e2378)
- Push events into jaeger · [`a34c6de`](https://github.com/zuston/riffle/commit/a34c6de)
- Init Fastrace · [`51a35ae`](https://github.com/zuston/riffle/commit/51a35ae)
- introduce tracing · [`491ad31`](https://github.com/zuston/riffle/commit/491ad31)
- adjust format · [`bcbfe01`](https://github.com/zuston/riffle/commit/bcbfe01)
- Remove async watermark flush · [`78a3458`](https://github.com/zuston/riffle/commit/78a3458)
- Add unit tests for memory budget · [`499bb4e`](https://github.com/zuston/riffle/commit/499bb4e)
- rename some methods · [`be68927`](https://github.com/zuston/riffle/commit/be68927)
- Restructure the memory buffer · [`b649d37`](https://github.com/zuston/riffle/commit/b649d37)
- avoid string recursion format inner · [`dfa29de`](https://github.com/zuston/riffle/commit/dfa29de)
- avoid clone uid · [`6bd4c2d`](https://github.com/zuston/riffle/commit/6bd4c2d)
- try to lock-free for budget · [`045dc28`](https://github.com/zuston/riffle/commit/045dc28)
- try to use vec to replace linkedlist · [`407fa1f`](https://github.com/zuston/riffle/commit/407fa1f)
- use env to specify shard number · [`7e58cca`](https://github.com/zuston/riffle/commit/7e58cca)
- shuffle sending blocks to avoid conflict · [`af8e4a4`](https://github.com/zuston/riffle/commit/af8e4a4)
- try to use the std rwlock · [`ba6d910`](https://github.com/zuston/riffle/commit/ba6d910)
- recover · [`445514f`](https://github.com/zuston/riffle/commit/445514f)
- try to use contiguous bytes · [`0fe2eea`](https://github.com/zuston/riffle/commit/0fe2eea)
- try zero_copy features · [`b5a1772`](https://github.com/zuston/riffle/commit/b5a1772)
- remove all logic code to test the real tonic throughput · [`e231757`](https://github.com/zuston/riffle/commit/e231757)
- try to use vec.extend to replace one-by-one insert · [`34314c8`](https://github.com/zuston/riffle/commit/34314c8)
- fix · [`cded155`](https://github.com/zuston/riffle/commit/cded155)
- try to log pick time · [`0c9e6e0`](https://github.com/zuston/riffle/commit/0c9e6e0)
- draft-2 · [`0a229ea`](https://github.com/zuston/riffle/commit/0a229ea)
- draft · [`95dfa55`](https://github.com/zuston/riffle/commit/95dfa55)
- try again · [`c49f916`](https://github.com/zuston/riffle/commit/c49f916)
- try optimize vec.clear · [`8cdd9bb`](https://github.com/zuston/riffle/commit/8cdd9bb)
- record clear time · [`639f44f`](https://github.com/zuston/riffle/commit/639f44f)
- record insert time · [`6e7c7fa`](https://github.com/zuston/riffle/commit/6e7c7fa)
- add migration time · [`11c112e`](https://github.com/zuston/riffle/commit/11c112e)
- Use the sync io to replace async io · [`bc59f45`](https://github.com/zuston/riffle/commit/bc59f45)
- Remove console-subscribe to avoid potential memory leak · [`db5adc7`](https://github.com/zuston/riffle/commit/db5adc7)
- Add CI tests pipeline · [`1261905`](https://github.com/zuston/riffle/commit/1261905)
- Initial commit that is copied from the Apache Uniffle's rust code base · [`50caf17`](https://github.com/zuston/riffle/commit/50caf17)
