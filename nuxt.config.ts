export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        }
      ]
    }
  },
  ssr: false,
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],

  quasar: {
    plugins: ['Notify'],
    extras: {
      fontIcons: ['material-icons']
    }
  },

  css: ['/app/assets/scss/main.scss'],

  compatibilityDate: '2025-03-13'
})
