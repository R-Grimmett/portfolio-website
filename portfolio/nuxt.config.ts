// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: ['@nuxt/icon'],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})