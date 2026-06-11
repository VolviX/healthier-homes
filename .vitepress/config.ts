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
    // Shared across locales — https://vitepress.dev/reference/default-theme-config
    siteTitle: '🏠 Healthier Homes',

    search: {
      provider: 'local',
      options: {
        locales: {
          tr: {
            translations: {
              button: { buttonText: 'Ara', buttonAriaLabel: 'Ara' },
              modal: {
                noResultsText: 'Sonuç bulunamadı',
                resetButtonTitle: 'Aramayı temizle',
                footer: { selectText: 'seç', navigateText: 'gezin', closeText: 'kapat' }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VolviX/healthier-homes' }
    ]
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/overview' },
          { text: 'What People Say', link: '/what-people-say' },
          { text: 'Kitchen', link: '/kitchen' },
          { text: 'Cleaning Supplies', link: '/cleaning-supplies' },
          {
            text: 'Coming Soon',
            items: [
              { text: 'Air & Ventilation', link: '/air-ventilation' },
              { text: 'Water System', link: '/water-system' },
              { text: 'Sleep System', link: '/sleep-system' },
              { text: 'Hygiene', link: '/hygiene' }
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
            collapsed: true,
            items: [
              { text: 'Overview', link: '/kitchen' },
              { text: 'Food Storage Containers', link: '/kitchen/food-storage-containers' },
              { text: 'Cookware', link: '/kitchen/cookware' },
              { text: 'Utensils & Tools', link: '/kitchen/utensils-tools' },
              { text: 'Cutting Boards', link: '/kitchen/cutting-boards' },
              { text: 'Drinkware & Water Bottles', link: '/kitchen/drinkware-water-bottles' },
              { text: 'Food Wraps & Bags', link: '/kitchen/food-wraps-bags' },
              { text: 'Dinnerware & Serving', link: '/kitchen/dinnerware-serving' },
              { text: 'Dish (Hand & Dishwasher)', link: '/kitchen/dish' },
              { text: 'Cloths, Sponges & Wipes', link: '/kitchen/cloths-sponges-wipes' }
            ]
          },
          {
            text: 'Cleaning Supplies',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/cleaning-supplies' },
              { text: 'All-Purpose & Surface Cleaners', link: '/cleaning-supplies/all-purpose-surface-cleaners' },
              { text: 'Laundry & Fabric Care', link: '/cleaning-supplies/laundry-fabric-care' },
              { text: 'Floor Cleaners', link: '/cleaning-supplies/floor-cleaners' },
              { text: 'Bathroom (Toilet, Tub, Mold)', link: '/cleaning-supplies/bathroom-cleaners' },
              { text: 'Glass & Window Cleaners', link: '/cleaning-supplies/glass-window-cleaners' },
              { text: 'Disinfectants & Sanitizers', link: '/cleaning-supplies/disinfectants-sanitizers' }
            ]
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
          },
          {
            text: 'Sleep System',
            collapsed: true,
            items: [{ text: 'Overview', link: '/sleep-system' }]
          },
          {
            text: 'Hygiene',
            collapsed: true,
            items: [{ text: 'Overview', link: '/hygiene' }]
          }
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
    },

    tr: {
      label: 'Türkçe',
      lang: 'tr-TR',
      link: '/tr/',
      themeConfig: {
        nav: [
          { text: 'Ana Sayfa', link: '/tr/' },
          { text: 'Rehber', link: '/tr/overview' },
          { text: 'Yorumlar', link: '/tr/what-people-say' },
          { text: 'Mutfak', link: '/tr/kitchen' },
          { text: 'Temizlik Malzemeleri', link: '/tr/cleaning-supplies' },
          {
            text: 'Yakında',
            items: [
              { text: 'Hava & Havalandırma', link: '/tr/air-ventilation' },
              { text: 'Su Sistemi', link: '/tr/water-system' },
              { text: 'Uyku Sistemi', link: '/tr/sleep-system' },
              { text: 'Hijyen', link: '/tr/hygiene' }
            ]
          }
        ],

        sidebar: [
          {
            text: 'Genel',
            items: [
              { text: 'Genel Bakış', link: '/tr/overview' },
              { text: 'Yorumlar', link: '/tr/what-people-say' }
            ]
          },
          {
            text: 'Mutfak',
            collapsed: true,
            items: [
              { text: 'Genel Bakış', link: '/tr/kitchen' },
              { text: 'Yiyecek Saklama Kapları', link: '/tr/kitchen/food-storage-containers' },
              { text: 'Pişirme Gereçleri', link: '/tr/kitchen/cookware' },
              { text: 'Mutfak Aletleri & Gereçleri', link: '/tr/kitchen/utensils-tools' },
              { text: 'Kesme Tahtaları', link: '/tr/kitchen/cutting-boards' },
              { text: 'İçecek Kapları & Suluklar', link: '/tr/kitchen/drinkware-water-bottles' },
              { text: 'Gıda Ambalajları & Poşetler', link: '/tr/kitchen/food-wraps-bags' },
              { text: 'Sofra & Servis Takımları', link: '/tr/kitchen/dinnerware-serving' },
              { text: 'Bulaşık (Elde & Makinede)', link: '/tr/kitchen/dish' },
              { text: 'Bezler, Süngerler & Mendiller', link: '/tr/kitchen/cloths-sponges-wipes' }
            ]
          },
          {
            text: 'Temizlik Malzemeleri',
            collapsed: true,
            items: [
              { text: 'Genel Bakış', link: '/tr/cleaning-supplies' },
              { text: 'Çok Amaçlı & Yüzey Temizleyiciler', link: '/tr/cleaning-supplies/all-purpose-surface-cleaners' },
              { text: 'Çamaşır & Kumaş Bakımı', link: '/tr/cleaning-supplies/laundry-fabric-care' },
              { text: 'Yer Temizleyiciler', link: '/tr/cleaning-supplies/floor-cleaners' },
              { text: 'Banyo (Tuvalet, Küvet, Küf)', link: '/tr/cleaning-supplies/bathroom-cleaners' },
              { text: 'Cam & Pencere Temizleyiciler', link: '/tr/cleaning-supplies/glass-window-cleaners' },
              { text: 'Dezenfektanlar & Sterilizatörler', link: '/tr/cleaning-supplies/disinfectants-sanitizers' }
            ]
          },
          {
            text: 'Hava & Havalandırma',
            collapsed: true,
            items: [{ text: 'Genel Bakış', link: '/tr/air-ventilation' }]
          },
          {
            text: 'Su Sistemi',
            collapsed: true,
            items: [{ text: 'Genel Bakış', link: '/tr/water-system' }]
          },
          {
            text: 'Uyku Sistemi',
            collapsed: true,
            items: [{ text: 'Genel Bakış', link: '/tr/sleep-system' }]
          },
          {
            text: 'Hijyen',
            collapsed: true,
            items: [{ text: 'Genel Bakış', link: '/tr/hygiene' }]
          }
        ],

        editLink: {
          pattern: 'https://github.com/VolviX/healthier-homes/edit/main/docs/:path',
          text: "Bu sayfayı GitHub'da düzenle"
        },

        lastUpdated: {
          text: 'Son güncelleme',
          formatOptions: { dateStyle: 'medium' }
        },

        outline: {
          level: [2, 3],
          label: 'Bu sayfada'
        },

        docFooter: {
          prev: 'Önceki',
          next: 'Sonraki'
        },

        langMenuLabel: 'Dili değiştir',
        sidebarMenuLabel: 'Menü',
        returnToTopLabel: 'Başa dön',
        darkModeSwitchLabel: 'Görünüm',

        footer: {
          message:
            'MIT Lisansı altında yayımlanmıştır. Yalnızca eğitim amaçlı bilgidir — tıbbi tavsiye değildir.',
          copyright: 'Toplulukça sürdürülmektedir · <a href="https://x.com/cembingool">@cembingool</a>'
        }
      }
    }
  }
})
