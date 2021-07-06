import colors from 'vuetify/es5/util/colors'
import { dynamicRoutes } from './helpers/dynamic-routes.js'

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'it',
    },
    titleTemplate: '%s - infoet',
    title: 'infoet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Infoet - Azienda di sviluppo software, web-app, portali web, app per smartphone. Scopri come possiamo aiutarti ad accrescere e migliorare il tuo business.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Infoet',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logo.png'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Infoet'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Azienda di sviluppo software, web-app, portali web, app per smartphone. Scopri come possiamo aiutarti ad accrescere e migliorare il tuo business.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://infoet.it'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/scripts/tawk.to.js', body: true },
      { src: '/scripts/min.analytics.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/GDPRCheck.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'it'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  pageTransition: {
    name: 'intro'
  },

  generate: {
    routes: dynamicRoutes
  },

  robots: {
    UserAgent: '*'
  },

  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  },

  sitemap: {
    hostname: 'https://infoet.it',
    gzip: true,
    routes: [
      '/',
      '/servizi',
      '/servizi/api',
      '/servizi/app-mobile',
      '/servizi/assistenza',
      '/servizi/portali-web',
      '/servizi/siti-web',
      '/servizi/web-crawling-e-data-mining',
      '/chi-siamo',
      '/contatti',
      '/progetti',
      '/progetti/paghe-drive',
      '/progetti/sito-gnp',
      '/progetti/portale-gnp',
      '/progetti/portale-cacciatori',
      '/progetti/portale-cani-da-traccia',
      '/progetti/app-cacciatori',
      '/progetti/tensorflow-captcha',
      '/progetti/scarping-web-file-excel',
      '/progetti/portale-cinghiali',
      '/progetti/programma-ricerca',
      '/progetti/programma-ricerca-web-based',
      '/progetti/app-gnpmaps'
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
