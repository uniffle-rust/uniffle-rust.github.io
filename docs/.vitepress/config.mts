import { defineConfig } from 'vitepress'

const guideSidebar = [
  {
    text: 'Start here',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'Docker quick start', link: '/guide/docker' },
      { text: 'Build from source', link: '/guide/build' }
    ]
  },
  {
    text: 'Configure',
    items: [
      { text: 'Server configuration', link: '/configuration/server' },
      { text: 'Storage backends', link: '/configuration/storage' },
      { text: 'Spark & Uniffle', link: '/configuration/spark' }
    ]
  },
  {
    text: 'Operate',
    items: [
      { text: 'Monitoring', link: '/operations/monitoring' },
      { text: 'Disk performance', link: '/operations/disk-performance' },
      { text: 'Cluster administration', link: '/operations/cluster-admin' },
      { text: 'Profiling', link: '/operations/profiling' }
    ]
  },
  {
    text: 'Reference',
    items: [
      { text: 'Benchmark', link: '/reference/benchmark' },
      { text: 'Changelog', link: '/changelog' }
    ]
  }
]

export default defineConfig({
  title: 'Riffle',
  description: 'High-performance, Apache Uniffle-compatible shuffle server written in Rust.',
  lang: 'en-US',
  appearance: false,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://uniffle-rust.github.io'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#050101' }],
    ['meta', { name: 'color-scheme', content: 'dark' }],
    ['link', { rel: 'icon', href: '/riffle-mark.svg', type: 'image/svg+xml' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: {
      light: '/riffle-mark.svg',
      dark: '/riffle-mark-dark.svg',
      alt: 'Riffle'
    },
    nav: [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '^/(guide|configuration|operations|reference)/' },
      { text: 'Changelog', link: '/changelog', activeMatch: '^/changelog' },
      {
        text: 'Project',
        items: [
          { text: 'Source code', link: 'https://github.com/zuston/riffle' },
          { text: 'Apache Uniffle', link: 'https://github.com/apache/uniffle' },
          { text: 'Issues', link: 'https://github.com/zuston/riffle/issues' }
        ]
      }
    ],
    sidebar: {
      '/guide/': guideSidebar,
      '/configuration/': guideSidebar,
      '/operations/': guideSidebar,
      '/reference/': guideSidebar
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuston/riffle' }
    ],
    editLink: {
      pattern: 'https://github.com/uniffle-rust/uniffle-rust.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Updated',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Riffle documentation'
    }
  }
})
