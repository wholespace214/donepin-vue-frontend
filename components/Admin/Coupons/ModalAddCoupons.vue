<template>
  <Div class="flex flex-col">
    <div
      :class="openCoupuns ? ' -translate-x-0' : 'translate-x-full'"
      class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
      id="add-new-roles"
    >
      <div id="top" class="flex flex-col">
        <div
          class="flex items-center capitalize justify-between mb-3"
          id="title"
        >
          <p class="font-bold pb-0 mb-0">Add / Edit Coupons</p>
          <button @click="$emit('closeAddCoupuns')" class="focus:outline-none">
            <img src="@/assets/images/icon-close.svg" />
          </button>
        </div>

        <div class="w-full mt-5 flex space-y-4 flex-col">
          <v-text-field
            class="pt-0 mt-0"
            label="Coupon Name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
          <v-text-field
            class="pt-0 mt-0"
            label="Coupon Code"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>

          <div class="grid grid-cols-2 gap-4">
            <v-select
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Plan Assign"
              dense
            ></v-select>
            <v-select
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Min Order"
              dense
            ></v-select>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <v-text-field
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Type"
              dense
            ></v-text-field>
            <v-text-field
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Discount"
              dense
            ></v-text-field>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <v-select
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Usage"
              dense
            ></v-select>
            <v-select
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Users"
              dense
            ></v-select>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-5" id="bottom">
        <button
          class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAddCoupuns')"
        >
          Cancel
        </button>
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAddCoupuns')"
        >
          Done
        </button>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["openCoupuns"],
  setup() {
    // const { tableHead, content, planButton } = TablePlan();

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
#table-body {
  border-radius: 0.7rem;
}
</style>
