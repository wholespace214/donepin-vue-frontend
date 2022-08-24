<template>
  <div>
    <div class="flex justify-center mb-1">
      <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
    </div>
    <div class="flex justify-center mb-4">
      <p class="font-extralight text-DPGREY-500 text-center text-sm">
        Create a free account and start your first project!
      </p>
    </div>

    <DashboardSnackbar :right="false" />

    <ValidationObserver ref="form">
      <ValidationProvider
        v-for="(data, index) in formRegister"
        :key="index"
        :vid="data.vid"
        :rules="data.rules"
        :name="data.label"
        v-slot="{ errors }"
      >
        <div
          class="py-3"
          :class="
            data.fullWidth == false ? 'inline-block mx-2 w-64' : 'w-full mx-2'
          "
        >
          <template v-if="data.hasOwnProperty('showPassword')">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              :label="data.label"
              @keypress.enter="signUp"
              v-model="data.value"
              :append-icon="data.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="data.showPassword ? 'text' : data.formType"
              @click:append="data.showPassword = !data.showPassword"
              :error-messages="errors"
            ></v-text-field>
          </template>

          <template v-else-if="data.hasOwnProperty('vid')">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              :label="data.label"
              @keypress.enter="signUp"
              v-model="data.value"
              ref="password"
              :append-icon="data.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="data.showPassword ? 'text' : data.formType"
              @click:append="data.showPassword = !data.showPassword"
              :error-messages="errors"
            ></v-text-field>
          </template>

          <template v-else>
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              :label="data.label"
              @keypress.enter="signUp"
              :type="data.formType"
              v-model="data.value"
              :error-messages="errors"
            ></v-text-field>
          </template>
        </div>
      </ValidationProvider>
    </ValidationObserver>

    <div class="block m-2">
      <span
        @click="signUp"
        class="bg-white border cursor-pointer border-DPGREEN-500 float-right hover:bg-DPGREEN-500 hover:duration-300 hover:text-white px-4 py-2 rounded-md text-DPGREY-500 text-center text-sm transform transition"
      >
        Sign Up for Free
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useRegister from "~/controller/LoginRegister/Register";
import registerForm from "~/data_component/LoginRegister/Register";

export default defineComponent({
  setup() {
    const { register } = useRegister();

    const form = ref();

    const password = ref();

    const { visibleAlert, message, validation } = useGeneralFeatures();

    const { formRegister } = registerForm();

    const { $recaptcha } = useContext();

    const signUp = () => {
      const token = $recaptcha.execute("login"); // Running token captcha first

      validation(form).then((res: any) => {
        if (res) {
          token.then(result => {
            if (result) register();
          });
        }
      });
    };

    return {
      form,
      formRegister,
      message,
      visibleAlert,
      password,
      signUp
    };
  },
  head: {
    title: "Sign Up",
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
</style>
