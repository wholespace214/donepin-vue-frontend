<template>
  <div
    class="m-7 p-5 sm:p-8 md:p-10 lg:p-10  rounded-xl shadow-xl transform transition w-96"
    id="registration-box"
  >
    <DashboardSnackbar :right="false" />
    <DashboardProgressLinear class="rounded-t-xl" style="top: 25px;" />

    <div class="flex justify-center py-2 mb-1">
      <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
    </div>
    <div class="flex justify-center mb-4">
      <p class="font-weight-light text-DPGREY-500 text-center text-sm">
        Change Your Password
      </p>
    </div>

    <ValidationObserver ref="form">
      <ValidationProvider
        v-for="(data, index) in formResetPassword"
        :key="index"
        :vid="data.vid"
        :name="data.label"
        :rules="data.rules"
        v-slot="{ errors }"
      >
        <div class="py-3">
          <template v-if="data.hasOwnProperty('showPassword')">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              :label="data.label"
              v-model="data.value"
              @keyup.enter="updated"
              :append-icon="data.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="data.showPassword ? 'text' : data.formType"
              @click:append="data.showPassword = !data.showPassword"
              :error-messages="errors"
            ></v-text-field>
          </template>

          <template v-else>
            <div class="w-72 my-5">
              <v-otp-input
                readonly
                color="rgba(165, 210, 118, 1)"
                length="6"
                v-model="data.value"
              ></v-otp-input>
            </div>
          </template>
        </div>
      </ValidationProvider>
    </ValidationObserver>

    <div class="flex justify-end items-center m-2 mt-4">
      <span
        @click="updated"
        class="bg-white border cursor-pointer border-DPGREEN-500 float-right hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-center text-sm transform transition"
      >
        Update
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useResetPassword from "~/controller/LoginRegister/ResetPassword";
import resetPassword from "~/data_component/LoginRegister/ResetPassword";

export default defineComponent({
  setup() {
    const form = ref();
    const { formResetPassword } = resetPassword();

    const { validation } = useGeneralFeatures();

    const { requestUpdatePassword } = useResetPassword();

    const updated = () => {
      validation(form).then((res: any) => {
        if (res == true) requestUpdatePassword(); // Still error in this one
      });
    };

    return {
      formResetPassword,

      updated,
      form
    };
  },

  head: {
    title: "Reset Password",
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

<style></style>
