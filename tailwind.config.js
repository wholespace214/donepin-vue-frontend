module.exports = {
  mode: "jit",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "assets/images/**/*.svg",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "data_component/**/*.ts",
      "controller/**/*.ts",
      "nuxt.config.ts"
    ]
  },
  theme: {
    extend: {
      borderWidth: ["hover", "focus"],
      colors: {
        "DPGREEN-50": "rgba(238, 247, 230, 1)",
        "DPGREEN-100": "rgba(221, 238, 202,1)",
        "DPGREEN-200": "rgba(203, 229, 174, 1)",
        "DPGREEN-400": "rgba(165, 210, 118, 1)",
        "DPGREEN-500": "#91C959",

        "DPGREY-50": "#e5e5e5",
        "DPGREY-100": "#D4D4D4",
        "DPGREY-150": "#F8F8F8",
        "DPGREY-200": "rgba(167, 167, 167, 1)",
        "DPGREY-400": "rgba(108, 108, 108, 1)",
        "DPGREY-500": "#91C959",
        "DPGREY-800": "rgba(41, 41, 41, 1)",

        "DPBLUE-400":"rgb(25,204,243)",
        "DPYELLOW-400":"rgb(213,190,69)",
        "DPORANGE-400":"rgb(240,134,36)",
        "DPORANGE-500":"rgb(239,160,87)",
        "DPRED-400":"rgb(240,36,36)",
        "DPRED-500":"rgb(242,83,61)",
        
        BACKGROUNDCOLOR: "#fafafa"
      },
      translate: {
        labelemaillogin: "-6px",
        labelpasswordlogin: "-9px",
        labelregister: "-13px",
        labelemailregister: "-8px",
        labelverifypassword: "-22px",
        labelresetpasword: "-15px",
        labelrepeatnewpasword: "-16px"
      },
      fontSize: {},
      spacing: {}
    }
  },
  variants: {},
  plugins: []
};
