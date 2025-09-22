// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      // Google Fonts
      { name: 'Montserrat', provider: 'google' },
    ],
    defaults: {
      weights: [400, 600, 700], // Tải các weight mặc định
      subsets: ['latin'], // Subset mặc định
    },
  },
})
