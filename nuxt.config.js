export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/favicon/favicon.webp"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vee-validate.js", mode: "client" },
    { src: "@/plugins/vue-slick-carousel.js" },
    { src: "~/plugins/wordCountFilter.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  vuetify: {
    customVariables: ["@/assets/scss/customVuetifyVariables.scss"],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      default: "light",
      themes: {
        dark: {
          // background: "#3b4452",
          // bgPrimary: "#353c48",
          // iconPrimary: "#888",
          // textPrimary: "#b4bdca",
          // textSecondary: "#6d7d99",
          // primary: "#1976D2",
          // secondary: "#424242",
          // accent: "#82B1FF",
          // error: "#FF5252",
          // info: "#2196F3",
          // success: "#4CAF50",
          // warning: "#FFC107"
        },
        light: {
          // background: "#f6f6f6",
          // bgPrimary: "#fff",
          // iconPrimary: "#888",
          // textPrimary: "#212529",
          // textSecondary: "#60686f",
          // primary: "#1976D2",
          // secondary: "#424242",
          // accent: "#82B1FF",
          // error: "#FF5252",
          // info: "#2196F3",
          // success: "#4CAF50",
          // warning: "#FFC107"
        }
      }
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
