<template>
  <div class="m-7 p-16 rounded-xl w-auto" id="registration-box">
    <div class="flex justify-center mb-1">
      <img src="~/assets/images/donepin-logo-dark.svg" class="w-52" />
    </div>
    <div class="flex justify-center mb-4"></div>
    <div>
      <p class="font-semibold text-DPGREY-500 text-center text-sm">
        Congratulation!
      </p>
      <p
        class="font-weight-normal mt-2 text-DPGREY-500 text-center text-body-2"
      >
        Now you just need to verify your Email and start right away.
      </p>
      <p
        class="font-weight-normal mt-2 text-DPGREY-500 text-center text-body-2"
      >
        Already verified?
        <NuxtLink
          to="login"
          style="color: rgba(145, 201, 89,1);"
          class="text-DPGREEN-500 text-dplgreen-600"
          >Click here to sign in!
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },

  head: {
    title: "Success Page",
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
