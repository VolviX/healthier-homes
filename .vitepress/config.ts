import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  title: 'Healthier Homes',
  description:
    'Better choices for your household',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#00897B' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'HealthierHomes.io' }],
    ['meta', { property: 'og:description', content: 'Better choices for your household' }],
    ['script', { 'data-collect-dnt': 'true', async: 'true', src: 'https://scripts.simpleanalyticscdn.com/latest.js' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '🏠 Healthier Homes',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/overview' },
      { text: 'What People Say', link: '/what-people-say' },
      { text: 'Kitchen', link: '/kitchen' },
      {
        text: 'Coming Soon',
        items: [
          { text: 'Hygiene', link: '/hygiene' },
          { text: 'Sleep System', link: '/sleep-system' },
          { text: 'Cleaning Supplies', link: '/cleaning-supplies' },
          { text: 'Air & Ventilation', link: '/air-ventilation' },
          { text: 'Water System', link: '/water-system' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'What People Say', link: '/what-people-say' }
        ]
      },
      {
        text: 'Kitchen',
        collapsed: false,
        items: [
          { text: 'Kitchen Overview', link: '/kitchen' },
          { text: 'Food Storage Containers', link: '/kitchen/food-storage-containers' },
          { text: 'Cookware', link: '/kitchen/cookware' },
          { text: 'Utensils & Tools', link: '/kitchen/utensils-tools' },
          { text: 'Cutting Boards', link: '/kitchen/cutting-boards' },
          { text: 'Drinkware & Water Bottles', link: '/kitchen/drinkware-water-bottles' },
          { text: 'Food Wraps & Bags', link: '/kitchen/food-wraps-bags' },
          { text: 'Dinnerware & Serving', link: '/kitchen/dinnerware-serving' }
        ]
      },
      {
        text: 'Hygiene',
        collapsed: true,
        items: [{ text: 'Overview', link: '/hygiene' }]
      },
      {
        text: 'Sleep System',
        collapsed: true,
        items: [{ text: 'Overview', link: '/sleep-system' }]
      },
      {
        text: 'Cleaning Supplies',
        collapsed: true,
        items: [{ text: 'Overview', link: '/cleaning-supplies' }]
      },
      {
        text: 'Air & Ventilation',
        collapsed: true,
        items: [{ text: 'Overview', link: '/air-ventilation' }]
      },
      {
        text: 'Water System',
        collapsed: true,
        items: [{ text: 'Overview', link: '/water-system' }]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VolviX/healthier-homes' }
    ],

    editLink: {
      pattern: 'https://github.com/VolviX/healthier-homes/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium' }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    footer: {
      message:
        'Released under the MIT License. Educational information only — not medical advice.',
      copyright: 'Community-maintained · <a href="https://x.com/cembingool">@cembingool</a>'
    }
  }
})
