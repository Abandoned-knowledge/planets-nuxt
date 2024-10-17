// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  srcDir: "./src",
  dir: {
    pages: "pages",
  },
  i18n: {},
  tailwindcss: {
    cssPath: ["~/app/style/tailwind.css", { injectPosition: "first" }],
    viewer: false,
    quiet: true,
  },
});
