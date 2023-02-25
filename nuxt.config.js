import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '김현진♡정혜화',
    title: '김현진♡정혜화',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '우리 결혼합니다.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:url', property: 'og:url', content: 'https://japygo.github.io/wedding' },
      { hid: 'og:title', property: 'og:title', content: '김현진♡정혜화' },
      { hid: 'og:description', property: 'og:description', content: '우리 결혼합니다.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://japygo.github.io/wedding/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Gamja+Flower:400|East+Sea+Dokdo:400|Nanum+Myeongjo|Nanum+Pen+Script:400|Great+Vibes:400|Do+Hyeon:400|Stylish:400&display=swap'
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Gamja+Flower:400|East+Sea+Dokdo:400|Nanum+Myeongjo|Nanum+Pen+Script:400|Great+Vibes:400|Do+Hyeon:400|Stylish:400&display=swap'
      }
    ],
    script: [
      {
        src: 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/aos.js'
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
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
