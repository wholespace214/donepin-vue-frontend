import { reactive, ref } from "@nuxtjs/composition-api";

interface form {
  label: string;
  formType: string;
  value: string | null;
  rules: string | any;
  vid?: string;
  showPassword?: boolean;
  labelActive: boolean;
  translateXSize: string;
  disabled?: boolean;
}

const resetRequest = ref(true);

const email = ref("");

const otpVerification = ref("");

const formResetPassword = reactive<form[]>([
  {
    label: "OTP Token",
    formType: "text",
    value: "",
    rules: "required",
    labelActive: false,
    translateXSize: "translate-x-labelresetpasword",
    disabled: true
  },
  {
    label: "New Password",
    formType: "password",
    value: "",
    vid: "password",
    rules: {
      required: true,
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    },
    labelActive: false,
    showPassword: false,
    translateXSize: "translate-x-labelresetpasword"
  },
  {
    label: "Repeat Password",
    formType: "password",
    value: "",
    rules: "required|confirmed:password",
    labelActive: false,
    showPassword: false,
    translateXSize: "translate-x-labelrepeatnewpasword"
  }
]);

export default function resetPassword() {
  return { formResetPassword, resetRequest, email, otpVerification };
}
