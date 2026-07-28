<script setup lang="ts">
import { computed, ref } from 'vue'
import { releases, type ChangeCategory, type RiffleRelease } from '../../data/changelog'

type Channel = 'all' | 'stable' | 'pre-release'

const categoryLabels: Record<ChangeCategory, string> = {
  features: 'Features',
  fixes: 'Fixes',
  performance: 'Performance',
  improvements: 'Improvements',
  documentation: 'Documentation',
  maintenance: 'Maintenance',
  other: 'Other'
}

const categoryOrder = Object.keys(categoryLabels) as ChangeCategory[]
const query = ref('')
const channel = ref<Channel>('all')
const expandAll = ref(false)

const stableCount = releases.filter((release) => release.channel === 'stable').length
const prereleaseCount = releases.length - stableCount
const changeCount = releases.reduce((total, release) => total + release.changes.length, 0)

const visibleReleases = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return releases.filter((release) => {
    const matchesChannel = channel.value === 'all' || release.channel === channel.value
    const matchesQuery = !needle
      || release.tag.toLowerCase().includes(needle)
      || release.changes.some((change) =>
        change.subject.toLowerCase().includes(needle)
        || change.scope?.toLowerCase().includes(needle)
        || String(change.pr ?? '').includes(needle)
      )
    return matchesChannel && matchesQuery
  })
})

function groupedChanges(release: RiffleRelease) {
  const needle = query.value.trim().toLowerCase()
  const tagMatches = release.tag.toLowerCase().includes(needle)
  const changes = !needle || tagMatches
    ? release.changes
    : release.changes.filter((change) =>
      change.subject.toLowerCase().includes(needle)
      || change.scope?.toLowerCase().includes(needle)
      || String(change.pr ?? '').includes(needle)
    )

  return categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      changes: changes.filter((change) => change.category === category)
    }))
    .filter((group) => group.changes.length > 0)
}

function releaseHeadline(release: RiffleRelease) {
  if (release.identicalTo) return `Stable promotion from ${release.identicalTo}`

  const change = release.changes.find((item) =>
    ['features', 'performance', 'improvements'].includes(item.category)
  ) ?? release.changes.find((item) => item.category === 'fixes')
    ?? release.changes[0]

  if (!change) return `Riffle ${release.tag}`
  return change.subject.charAt(0).toUpperCase() + change.subject.slice(1)
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T00:00:00Z`))
}
</script>

<template>
  <section class="changelog">
    <header class="changelog-hero">
      <span class="latest-release"><i aria-hidden="true"></i>Latest release: {{ releases[0].tag }}</span>
      <h1>Changelog</h1>
      <p>
        Every tagged Riffle release, from the first cut to the current RC.
        {{ releases.length }} versions and {{ changeCount }} source changes, linked back to GitHub.
      </p>
    </header>

    <div class="changelog-toolbar">
      <div class="release-filters" aria-label="Filter releases">
        <button :class="{ active: channel === 'all' }" @click="channel = 'all'">All <span>{{ releases.length }}</span></button>
        <button :class="{ active: channel === 'stable' }" @click="channel = 'stable'">Stable <span>{{ stableCount }}</span></button>
        <button :class="{ active: channel === 'pre-release' }" @click="channel = 'pre-release'">RC <span>{{ prereleaseCount }}</span></button>
      </div>
      <label class="release-search">
        <span class="sr-only">Search versions and changes</span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m21 21-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/></svg>
        <input v-model="query" type="search" placeholder="Version, feature, PR…" />
      </label>
      <button class="expand-control" @click="expandAll = !expandAll">
        {{ expandAll ? 'Collapse all' : 'Expand all' }}
      </button>
    </div>

    <p v-if="visibleReleases.length === 0" class="changelog-empty">
      No release or change matches “{{ query }}”.
    </p>

    <div v-else class="release-list">
      <article v-for="(release, index) in visibleReleases" :id="release.tag" :key="release.tag" class="release-entry">
        <aside class="release-identity">
          <div class="release-identity-line">
            <a class="release-tag" :href="`#${release.tag}`">{{ release.tag }}</a>
            <span :class="['channel-mark', release.channel]">{{ release.channel === 'stable' ? 'Stable' : 'RC' }}</span>
          </div>
          <time :datetime="release.date">{{ formatDate(release.date) }}</time>
        </aside>

        <div class="release-content">
          <details :open="expandAll || index < 2 || Boolean(query)">
          <summary>
            <span class="release-summary-copy">
              <strong>{{ releaseHeadline(release) }}</strong>
              <small>
                {{ release.identicalTo ? 'No additional source changes' : `${release.changes.length} ${release.changes.length === 1 ? 'change' : 'changes'}` }}
              </small>
            </span>
            <span class="release-chevron" aria-hidden="true"></span>
          </summary>

            <p v-if="release.identicalTo" class="release-promotion">
              Promoted from <a :href="`#${release.identicalTo}`">{{ release.identicalTo }}</a> with no source changes.
            </p>

            <div v-else class="change-groups">
              <section v-for="group in groupedChanges(release)" :key="group.category" class="change-group">
                <h2>{{ group.label }} <span>{{ group.changes.length }}</span></h2>
                <ul>
                  <li v-for="change in group.changes" :key="change.hash">
                    <i aria-hidden="true"></i>
                    <span class="change-copy">
                      <span v-if="change.breaking" class="breaking-mark">Breaking</span>
                      <span v-if="change.scope" class="change-scope">{{ change.scope }}</span>
                      <span class="change-subject">{{ change.subject }}</span>
                      <a
                        v-if="change.pr"
                        class="change-ref"
                        :href="`https://github.com/zuston/riffle/pull/${change.pr}`"
                      >#{{ change.pr }}</a>
                      <a
                        v-else
                        class="change-ref"
                        :href="`https://github.com/zuston/riffle/commit/${change.hash}`"
                      >{{ change.hash }}</a>
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            <footer class="release-links">
              <a :href="`https://github.com/zuston/riffle/tree/${release.tag}`">Source @ {{ release.commit }}</a>
              <a
                v-if="release.previousTag"
                :href="`https://github.com/zuston/riffle/compare/${release.previousTag}...${release.tag}`"
              >Compare with {{ release.previousTag }}</a>
            </footer>
          </details>
        </div>
      </article>
    </div>
  </section>
</template>
