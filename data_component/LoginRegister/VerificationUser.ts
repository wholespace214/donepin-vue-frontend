import { reactive } from "@nuxtjs/composition-api";
interface form {
  verificationCode: string | null;
  email: string | null;
}

const formVerify = reactive<form[]>([
  {
    verificationCode: null,
    email: null
  }
]);

export default function verificationUser() {
  return { formVerify };
}
