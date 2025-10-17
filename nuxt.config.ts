import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: "NiceUI - A simple Tailwind Component",
      script: [
        {
          src: "https://unpkg.com/akar-icons-fonts",
        },
      ],
    }
  },
  modules: ['@nuxt/content', '@nuxt/image',"@nuxtjs/color-mode",],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
})