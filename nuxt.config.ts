// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxt/icon"],
  srcDir: "./src",
  dir: {
    layouts: "app/layouts",
    public: "../public",
  },
  imports: {
    dirs: ["shared/icons", "entities", "shared/types", "shared/utils"],
  },
  pinia: {
    storesDirs: ["entities"],
  },
  ssr: false,
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  tailwindcss: {
    cssPath: ["~/app/style/tailwind.css", { injectPosition: "first" }],
    viewer: false,
    quiet: true,
  },
  icon: {
    provider: "iconify",

    customCollections: [
      {
        prefix: "v-icon",
        dir: "./src/shared/icons",
      },
    ],
  },
});
