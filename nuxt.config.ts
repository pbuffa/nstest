// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-component-meta',
    'nuxt-studio'
  ],
  // Avoid localhost:3000 — Chrome still has caviar's Vite module requests cached there
  devServer: { port: 3010 },
  studio: {
    route: '/_studio'
  },
  nitro: {
    alias: {
      '#nuxt-component-meta/nitro': '~~/.nuxt/component-meta.mjs',
      '#mdc-imports': '~~/.nuxt/mdc-imports.mjs'
    }
  }
})
