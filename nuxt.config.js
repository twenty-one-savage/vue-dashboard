module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     })
    //   }
    vendor: ["./state"]
    /*postcss: [
      require('tailwindcss')(),
      require('autoprefixer')(),
      require('postcss-rtl')()
    ]*/
    // extend(config, ctx) {
    //   if (ctx.isServer) {
    //     config.resolve.alias['hammerjs$'] ='vue-touch/dist/hammer-ssr.js'
    //   }
    // }
  },
  // css: [
  //   "material-icons/iconfont/material-icons.css", //Material Icons
  //   "vuesax/dist/vuesax.css", // Vuesax
  //   // Styles: SCSS
  //   "@/assets/scss/main.scss",
  //   // Tailwind
  //   "@/assets/css/main.css",
  //   // PrismJS
  //   "prismjs/themes/prism-tomorrow.css",
  //   // Feather font icon
  //   "@/assets/css/iconfont.css"
  // ],
  plugins: [
    { src: "@/plugins/main" }
    // { src: "@components/App.vue" }
    // Theme Configurations
    // { src: '@/themeConfig.js' },
    // Globally Registered Components
    // { src: '@/globalComponents.js' },
  ],
  buildModules: ["@nuxtjs/tailwindcss"]
}
