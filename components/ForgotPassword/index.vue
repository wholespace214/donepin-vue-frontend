<template>
  <div class="flex  flex-col">
    <div
      v-if="resetRequest"
      class="m-7 relative rounded-xl w-96 p-5  shadow-xl"
      id="registration-box"
    >
      <DashboardProgressLinear class="rounded-t-xl" style="top: 25px;" />
      <div class="flex mt-5 justify-center mb-1">
        <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
      </div>
      <div class="flex justify-center mb-4">
        <p class="font-extralight text-DPGREY-500 text-center text-sm">
          Forgot your Password
        </p>
      </div>

      <DashboardSnackbar :right="false" />

      <div>
        <p class="font-light text-DPGREY-500 text-center text-sm">
          Please enter your Email. You will receive a link to your Email where
          you can reset your password.
        </p>
      </div>
      <div class="p-6 mt-3">
        <ValidationObserver ref="form">
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <v-text-field
              @keyup.enter="submit"
              color="rgba(165, 210, 118, 1)"
              label="Email"
              v-model="email"
              :error-messages="errors"
            ></v-text-field>
          </ValidationProvider>
        </ValidationObserver>
      </div>

      <div class="block m-2 mt-4">
        <span
          @click="submit"
          class="bg-white border cursor-pointer border-DPGREEN-500 float-right hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-center text-sm transform transition"
        >
          Reset Password
        </span>
      </div>
    </div>

    <!-- Enter OTP token -->

    <div
      v-else
      class="m-7 rounded-xl relative w-auto p-12  shadow-xl"
      id="registration-box"
    >
      <DashboardProgressLinear class="rounded-t-xl" style="top: 25px;" />
      <DashboardSnackbar :right="false" />

      <v-alert v-model="visibleAlert" color="red" dismissible type="error">
        {{ message }}
      </v-alert>
      <div class="flex justify-center py-2 mb-1">
        <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
      </div>
      <div class="flex justify-center mb-4">
        <p class="font-weight-light text-DPGREY-500 text-center text-sm">
          Verification OTP
        </p>
      </div>

      <v-alert v-model="visibleAlert" color="red" dismissible type="error">
        {{ message }}
      </v-alert>

      <div class="w-72 my-5">
        <v-otp-input
          color="rgba(165, 210, 118, 1)"
          v-model="otpVerification"
          length="6"
          @finish="inputOTP"
        ></v-otp-input>
      </div>

      <div class="flex justify-between items-center m-2 mt-4">
        <span
          @click="reSendOTP"
          class="hover:duration-200  cursor-pointer mb-0 hover:text-DPGREEN-500 forgot-password text-xs"
        >
          Re-send OTP
        </span>
        <span
          @click="inputOTP"
          class="bg-white border cursor-pointer float-right border-DPGREEN-500 hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-sm transform transition"
        >
          Done
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useForgotPasword from "~/controller/LoginRegister/ForgotPassword";
import resetPassword from "~/data_component/LoginRegister/ResetPassword";

export default defineComponent({
  setup() {
    const { resetRequest, email, otpVerification } = resetPassword();

    const { requestResetPassword, inputOTP, reSendOTP } = useForgotPasword();

    const { validation, visibleAlert, message } = useGeneralFeatures();

    const form = ref("");

    const submit = () => {
      validation(form).then((res: any) => {
        if (res) requestResetPassword();
      });
    };

    return {
      form,
      email,
      reSendOTP,
      resetRequest,
      submit,
      inputOTP,
      visibleAlert,
      otpVerification,
      message
    };
  },

  head: {
    title: "Forgot Password",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
});
</script>

<style scoped>
.label {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>
