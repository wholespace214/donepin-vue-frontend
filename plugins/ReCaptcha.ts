import { ReCaptchaInstance } from "@nuxtjs/recaptcha";
import { Plugin } from "@nuxt/types";

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $recaptcha: ReCaptchaInstance;
  }

  interface Context {
    $recaptcha: ReCaptchaInstance;
  }
}

declare module "vuex/types/index" {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $recaptcha: ReCaptchaInstance;
  }
}

const myPlugin: Plugin = (context, inject) => {
  context.$recaptcha;
};

export default myPlugin;
