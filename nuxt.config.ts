export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap'
        }
      ],
      script: [
        {
          src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU',
          type: 'text/javascript',
          async: true,
          defer: true
        }
      ]
    }
  },

  ssr: false,

  modules: ['nuxt-quasar-ui', '@pinia/nuxt', 'nuxt-viewport'],

  quasar: {
    plugins: ['Notify'],
    extras: {
      fontIcons: ['material-icons']
    }
  },

  css: ['/app/assets/scss/main.scss']
})
