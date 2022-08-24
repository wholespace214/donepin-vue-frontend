<template>
  <Div id="content" class="">
    <H1 class="text-lg font-bold">Email</H1>

    <div class="w-full flex-col flex  mt-5 items-center">
      <div class="flex space-x-5 w-full">
        <div class="w-52">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Mail Host"
          ></v-text-field>
        </div>
        <div class="w-52">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Port"
          ></v-text-field>
        </div>
        <div class="w-52">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Username"
          ></v-text-field>
        </div>
        <div class="w-52">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Password"
          ></v-text-field>
        </div>

        <div class="w-52">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Encryption"
          ></v-text-field>
        </div>
      </div>

      <div class="flex w-full justify-between items-center">
        <div class="flex space-x-5">
          <div class="w-52">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              label="From Name"
            ></v-text-field>
          </div>

          <div class="w-52">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              label="From Email"
            ></v-text-field>
          </div>

          <div class="w-52">
            <v-text-field
              color="rgba(165, 210, 118, 1)"
              label="Test Trial"
            ></v-text-field>
          </div>
        </div>

        <div class="flex space-x-3 px-4">
          <button
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-5 py-2 rounded-lg text-xs"
          >
            send test email
          </button>
          <button
            class="bg-DPGREEN-500  justify-center border capitalize border-solid flex focus:outline-none  duration-200 text-white items-center px-5 py-2 rounded-lg text-xs"
          >
            done
          </button>
        </div>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
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
