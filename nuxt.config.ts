import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "NiceUI - A simple Tailwind Component",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://unpkg.com/akar-icons-fonts",
        },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/mdc",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  googleFonts: {
    families: {
      Alatsi: true,
      Poppins: {
        wght: ["400", "500", "600"],
      },
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
        toc: {
          searchDepth: 1,
        },
      },
    },
  },
});
