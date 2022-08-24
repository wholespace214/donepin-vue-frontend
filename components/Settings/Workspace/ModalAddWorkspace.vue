<template>
  <div
    :class="openAddWorkspace ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="add-new-roles"
  >
    <div id="top" class="flex flex-col">
      <div class="flex items-center capitalize justify-between mb-3" id="title">
        <p class="font-bold pb-0 mb-0">Add Workspace</p>
        <button @click="$emit('closeAddWorkspace')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-text-field
          class="pt-0 mt-0"
          label="Workspace name"
          color="rgba(145, 201, 89,1)"
        ></v-text-field>
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Default Language"
          dense
        ></v-select>
      </div>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Display"
          dense
        ></v-select>
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Default Timezone"
          dense
        ></v-select>
      </div>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Starting Day"
          dense
        ></v-select>
      </div>

      <div class="w-full flex mt-5 flex-col space-y-4">
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Your New Plan"
          dense
        ></v-select>
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Payment"
          dense
        ></v-select>
      </div>

      <div class="w-full mt-5">
        <p class="font-bold">Payment Option</p>
        <v-radio-group>
          <v-radio
            color="rgba(145, 201, 89,1)"
            class="capitalize"
            v-for="(data, index) in paymentOption"
            :key="index"
            :label="data"
          ></v-radio>
        </v-radio-group>
      </div>

      <!-- discount code -->

      <div class="w-full mt-5 space-x-3 flex">
        <v-text-field
          class="pt-0 mt-0"
          label="Coupon Code"
          color="rgba(145, 201, 89,1)"
        ></v-text-field>
        <div>
          <button
            class="border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
            @click="$emit('closeAddWorkspace')"
          >
            Redem
          </button>
        </div>
      </div>

      <div class="w-full mt-5 space-y-3 flex-col flex">
        <div class="flex capitalize justify-between">
          <h1 class="text-sm font-semibold">
            sub-total
          </h1>
          <span>
            $ 588,00
          </span>
        </div>

        <div class="flex capitalize justify-between">
          <h1 class="text-sm font-semibold">
            discount
          </h1>
          <span class="text-DPGREEN-500">
            -$ 12,00
          </span>
        </div>

        <div class="flex capitalize justify-between">
          <h1 class="text-sm font-semibold">
            VAT
          </h1>
          <span class="">
            19%
          </span>
        </div>

        <div class="flex capitalize justify-between">
          <h1 class="text-sm font-semibold">
            Total per year
          </h1>
          <span class="text-lg font-semibold">
            $ 685,44
          </span>
        </div>

        <div class="mt-5">
          <p class="pb-0 text-small mb-0">
            Lorem ipsum, consectetur adipiscing elit.
            <span class="text-DPGREEN-500">Privacy Policy</span> commodo
            <span class="text-DPGREEN-500">Terms and Conditions</span> eget
            justo vestibulum ullamcorper. Duis dictum finibus elementum. Mauris
            sollicitudin ullamcorper massa, sed vulputate turpis dignissim nec.
            Donec sagittis dignissim nisi sit amet molestie.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px;"
        @click="$emit('closeAddWorkspace')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px;"
        @click="$emit('closeAddWorkspace')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    openAddWorkspace: Boolean
  },
  setup() {
    const paymentOption = ref([
      "paypal",
      "credit card / debit card",
      "google pay",
      "skrill"
    ]);

    return { paymentOption };
  }
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
