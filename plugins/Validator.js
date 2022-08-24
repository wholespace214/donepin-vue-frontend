import Vue from "vue";
import { messages } from "vee-validate/dist/locale/en.json";
import {
  ValidationProvider,
  ValidationObserver,
  extend
} from "vee-validate/dist/vee-validate.full.esm";
import { regex, integer } from "vee-validate/dist/rules";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("regex", {
  ...regex,
  message:
    "{_field_} Must contain at least one lowercase and one uppercase and at least one digit (0-9). Minimum length is 8 characters"
});

extend("integer", {
  ...integer,
  message: "{_field_} Must contain number"
});
