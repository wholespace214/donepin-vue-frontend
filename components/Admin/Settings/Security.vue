<template>
  <Div id="content" class="">
    <H1 class="text-lg font-bold">Security</H1>

    <div class="w-full flex space-x-3 mt-5 items-center justify-between">
      <div class="w-[80%]">
        <v-text-field
          color="rgba(165, 210, 118, 1)"
          label="ReCAPCHA V3 Siite Key"
        ></v-text-field>
      </div>

      <div class="">
        <button
          class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-5 py-2 rounded-lg text-xs"
        >
          done
        </button>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {}
});
</script>

<style>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) ease;
}
</style>
