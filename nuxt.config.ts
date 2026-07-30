import tailwindcss from "@tailwindcss/vite";
import { localeI18nOptions } from './i18n/options'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Disable autoimports
  imports: {
    autoImport: false,
    scan: false
  },

  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n'],
  i18n: localeI18nOptions as any,

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },

  runtimeConfig: {
    // Public environment variables
    public: {
      name: import.meta.env.APP_NAME,
    }
  },

  
})
