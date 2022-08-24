import { reactive } from "@nuxtjs/composition-api";

const formRegister = reactive([
  {
    label: "First name",
    formType: "text",
    value: "",
    labelActive: false,
    rules: "required",
    translateXSize: "translate-x-labelregister",
    fullWidth: false
  },
  {
    label: "Last name",
    formType: "text",
    value: "",
    labelActive: false,
    rules: "required",
    translateXSize: "translate-x-labelregister",
    fullWidth: false
  },
  {
    label: "Email",
    formType: "email",
    value: "",
    labelActive: false,
    rules: "required|email",
    translateXSize: "translate-x-[-8px]",
    fullWidth: true
  },
  {
    label: "Password",
    formType: "password",
    value: "",
    vid: "password",
    labelActive: false,
    rules: {
      required: true,

      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    },
    translateXSize: "translate-x-labelregister",
    fullWidth: false,
    showPassword: false
  },
  {
    label: "Verify Password",
    formType: "password",
    value: "",
    labelActive: false,
    rules: "required|confirmed:password",
    translateXSize: "translate-x-labelverifypassword",
    fullWidth: false,
    showPassword: false
  }
]);

export default function registerForm() {
  return { formRegister };
}
