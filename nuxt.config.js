export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "REAStore",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  target: "static",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    [
      "@nuxtjs/i18n",
      {
        locales: ["en", "cl"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              greeting: "Hello world!",
              countries: "Countries Products",
              cart: "CART",
              shop: "SHOP",
              singapore: "Singapore",
              hongkong: "Hong Kong",
              addToCart: "Add to Cart",
              totalCost: "Total Cost",
              checkOut: "Check Out",
              singaporeOne: "Singapore Airlines Lego Set",
              singaporeTwo: "Singapore Perfume",
              hongkongOne: "Hong Kong Egg Rolls",
              hongkongTwo: "Hong Kong Jade Pendant",
              location: "Location",
              product: "Product",
              quantity: "Quantity",
              price: "Price",
            },
            cl: {
              greeting: "你好",
              countries: "国家产品",
              cart: "购物车",
              shop: "购物",
              singapore: "新加坡",
              hongkong: "香港",
              addToCart: "添加",
              totalCost: "总花费",
              checkOut: "结账",
              singaporeOne: "新加坡航空乐高",
              singaporeTwo: "新加坡香水",
              hongkongOne: "香港蛋卷",
              hongkongTwo: "香港玉坠",
              location: "地点",
              product: "产品",
              quantity: "数量",
              price: "价格",
            },
          },
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
