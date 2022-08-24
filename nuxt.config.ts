import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  publicRuntimeConfig: {},

  recaptcha: {
    siteKey: "6LeGdIAdAAAAAGO6Gmu6HhCffjH1ZzsbsWiVK31s",
    hideBadge: true,
    version: 3,
    size: "normal" // Size: 'compact', 'normal', 'invisible' (v2)
  },

  loading: {
    color: "rgba(165, 210, 118, 1)",
    height: "4px"
  },

  server: {
    port: 8002
  },
  head: {
    titleTemplate: "%s - Donepin",
    title: "donepin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [
    "@/assets/css/style.css",
    "quill/dist/quill.core.css",
    // for snow theme
    "quill/dist/quill.snow.css",
    // for bubble theme
    "quill/dist/quill.bubble.css"
  ],
  plugins: [
    "~/plugins/ReCaptcha.ts",
    "~/plugins/Validator.js",
    { src: "@/plugins/Draggable", ssr: false },
    { src: "@/plugins/Quill", ssr: false }
  ],
  components: true,

  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api/module",
    '@nuxtjs/date-fns'
  ],

  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  modules: [
    "@nuxtjs/recaptcha",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/proxy",
    "@nuxtjs/universal-storage",
    "@nuxtjs/auth-next"
  ],

  storage: {
    localStorage: {
      prefix: ""
    }
  },

  axios: {
    browserBaseURL: process.env.BASE_URL,
    proxy: true
  },

  // proxy: {
  //   "/login": {
  //     target: `/user/login`,
  //     pathRewrite: { "^/login/": "" }
  //   }
  // },

  pwa: {
    manifest: {
      lang: "en"
    }
  },
  typeCheck: true,
  tailwindcss: {
    viewer: false
  },

  vuetify: {
    customVariables: ["~/assets/css/vuetifyjs.scss"],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          "DPGREY-500": "#5e5e5e",
          "DPGREY-600": "#515151",
          "DPGREEN-500": "#91c959",
          BACKGROUNDCOLOR: "#fafafa",
          ARROWCOLOR: "#535353",
          DPPINK: "#E826B1",
          DPBLUE: "#19CCF3",
          DPPURPLE: "#CE2EE9",
          DPYELLOW: "#D4BE45",
          SWITCHCOLOR: "#91C959",
          REDCOLOR: "#ef4444"
        }
      }
    }
  }
};

export default config;
