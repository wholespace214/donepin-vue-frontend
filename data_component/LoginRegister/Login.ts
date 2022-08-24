import { reactive, ref } from "@nuxtjs/composition-api";

const alertActivated = ref(false);

const formLogin = reactive([
  {
    label: "Email",
    formType: "email",
    value: "user12345@gmail.com",
    labelActive: false,
    rules: "required|email",
    translateXSize: "translate-x-labelemaillogin"
  },

  {
    label: "Password",
    formType: "password",
    value: "user12345",
    labelActive: false,
    rules: "required",
    translateXSize: "translate-x-labelpasswordlogin",
    showPassword: false
  }
]);

export default function loginForm() {
  return { formLogin, alertActivated };
}
