import { ReCaptchaInstance } from "@nuxtjs/recaptcha";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// declare module "@nuxt/types" {
//   interface Context {
//     $recaptcha: ReCaptchaInstance;
//   }
// }
