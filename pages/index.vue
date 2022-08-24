<template>
  <div>
    <Div
      v-show="alertActivated"
      class="fixed flex justify-center items-center  inset-0 h-full w-full z-10"
    >
      <div
        class="m-7 p-2 sm:p-5 md:p-5 lg:p-5 bg-white rounded-xl shadow-xl transform transition w-[31rem]"
        id="registration-box"
      >
        <div class="flex flex-col space-y-5">
          <p class="pb-0 font-semibold text-lg mb-0">
            Your account has not activated
          </p>

          <div class="w-full mt-4">
            <div class="w-full space-x-2 flex">
              <v-icon
                color="rgba(240, 61, 36, 1)"
                x-large
                v-text="'mdi-alert-circle'"
              >
              </v-icon>
              <p class="mb-0 text-sm font-semibold  pb-0">
                {{ message }}
              </p>
            </div>

            <div class="w-full flex mt-3 py-2 space-x-3 justify-end">
              <button
                @click="alertActivated = !alertActivated"
                class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
              >
                No, I don't it
              </button>
              <button
                @click="resendTokenRegister"
                class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
              >
                Yes, Please
              </button>
            </div>
          </div>
        </div>
      </div>
    </Div>
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useLogin from "~/controller/LoginRegister/Login";
import loginForm from "~/data_component/LoginRegister/Login";

export default defineComponent({
  setup() {
    const { alertActivated } = loginForm();

    const { message } = useGeneralFeatures();

    const { resendTokenRegister } = useLogin();

    return { alertActivated, message, resendTokenRegister };
  }
});
</script>

<style></style>
