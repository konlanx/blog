export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  compatibilityDate: '2024-10-26',

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
      ],
      title: 'Tim\'s Blog'
    },
  },
})