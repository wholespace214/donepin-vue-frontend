<template>
  <div>
    <DashboardProgressLinear class="rounded-t-xl" style="top: 25px;" />
    <div class="flex justify-center py-2 mb-1">
      <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
    </div>
    <div class="flex justify-center mb-4">
      <p class="font-weight-light text-DPGREY-500 text-center text-sm">
        Login to your account!
      </p>
    </div>

    <ValidationObserver ref="form">
      <ValidationProvider
        v-for="(data, index) in formLogin"
        :key="index"
        :rules="data.rules"
        :name="data.label"
        v-slot="{ errors }"
      >
        <template v-if="data.hasOwnProperty('showPassword')">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            @keypress.enter="submit"
            :label="data.label"
            v-model="data.value"
            :append-icon="data.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="data.showPassword ? 'text' : data.formType"
            @click:append="data.showPassword = !data.showPassword"
            :error-messages="errors"
          ></v-text-field>
        </template>

        <template v-else>
          <v-text-field
            @keypress.enter="submit"
            color="rgba(165, 210, 118, 1)"
            :label="data.label"
            :type="data.formType"
            :error-messages="errors"
            v-model="data.value"
          ></v-text-field>
        </template>
      </ValidationProvider>
    </ValidationObserver>

    <div class="flex justify-between items-center m-2 mt-4">
      <NuxtLink
        to="/ForgotPassword"
        class="hover:duration-200 cursor-pointer mb-0 hover:text-DPGREEN-500 forgot-password text-xs"
      >
        Forgot Password?
      </NuxtLink>
      <span
        @click="submit"
        class="bg-white border cursor-pointer float-right border-DPGREEN-500 hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-sm transform transition"
      >
        Login
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useContext
} from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useLogin from "~/controller/LoginRegister/Login";
import loginForm from "~/data_component/LoginRegister/Login";

export default defineComponent({
  setup() {
    const form = ref();

    const notif = ref();

    const { formLogin } = loginForm();

    const { $recaptcha } = useContext();

    const { validation, visibleAlert, message, loading } = useGeneralFeatures();

    const { login } = useLogin();

    const submit = () => {
      const token = $recaptcha.execute("login");

      validation(form).then((res: any) => {
        if (res) {
          token.then(result => {
            if (result) login();
          });
        }
      });
    };

    onMounted(() => {
      $recaptcha.init();
    });

    return {
      notif,
      formLogin,
      form,
      submit
    };
  },

  head: {
    title: "Sign In",
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
