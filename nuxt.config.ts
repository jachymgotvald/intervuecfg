// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-21",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/fonts", "@nuxt/icon"],
  ssr: true,
  css: ["./assets/global.css"],
  tailwindcss: {
    cssPath: ["./assets/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  colorMode: {
    preference: "light",
  },
  fonts: {
    families: [{ name: "Open Sans", provider: "google", global: true }],
  },
  icon: {
    serverBundle: {
      collections: ["ph"],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://jsonplaceholder.typicode.com/",
    },
  },
});
