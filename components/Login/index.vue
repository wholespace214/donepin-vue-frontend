<template>
  <div
    class="m-7 p-5 sm:p-8 md:p-10 lg:p-10  rounded-xl shadow-xl transform transition w-96"
    id="registration-box"
  >
    <DashboardSnackbar />
    <!-- <v-snackbar top v-model="openSnackbar">
      <div class="flex space-x-2 items-center justify-between w-full">
        <p class="mb-0 font-semibold text-sm ">
          {{ message }}
        </p>

        <v-btn
          color="rgba(165, 210, 118, 1)"
          @click="openSnackbar = !openSnackbar"
          icon
        >
          <v-icon> mdi-close-circle</v-icon>
        </v-btn>
      </div>
    </v-snackbar> -->

    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  setup() {
    const { openSnackbar, message } = useGeneralFeatures();

    return {
      openSnackbar,
      message
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
