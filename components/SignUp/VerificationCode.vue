<template>
  <div>
    <DashboardSnackbar />

    <div class="flex justify-center py-2 mb-1">
      <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
    </div>
    <div class="flex justify-center mb-4">
      <p class="font-weight-light text-DPGREY-500 text-center text-sm">
        Verification OTP
      </p>
    </div>

    <div class="w-72 my-5">
      <v-otp-input
        color="rgba(165, 210, 118, 1)"
        v-for="(data, index) in formVerify"
        :key="index"
        v-model="data.verificationCode"
        length="6"
      ></v-otp-input>
    </div>

    <div class="flex justify-between items-center m-2 mt-4">
      <span
        @click="resendToken"
        class="hover:duration-200  cursor-pointer mb-0 hover:text-DPGREEN-500 forgot-password text-xs"
      >
        Re-send OTP
      </span>
      <span
        @click="submit"
        class="bg-white border cursor-pointer float-right border-DPGREEN-500 hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-sm transform transition"
      >
        Done
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useVerify from "~/controller/LoginRegister/Verify";
import verificationUser from "~/data_component/LoginRegister/VerificationUser";

export default defineComponent({
  setup() {
    const { formVerify } = verificationUser();
    const { visibleAlert, message } = useGeneralFeatures();
    const { submitVerification, resendToken } = useVerify();

    const submit = () => submitVerification();

    return {
      visibleAlert,
      message,
      submit,
      resendToken,

      formVerify
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}

p {
  margin-bottom: 0px;
}

.v-text-field > .v-input__control > .v-input__slot::before {
  border-color: red;
}
</style>
