<template>
  <Div class="flex flex-col">
    <div
      :class="openAddWorkspaces ? ' -translate-x-0' : 'translate-x-full'"
      class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
      id="add-new-roles"
    >
      <div id="top" class="flex flex-col">
        <div
          class="flex items-center capitalize justify-between mb-3"
          id="title"
        >
          <p class="font-bold pb-0 mb-0">Add / Edit Workspaces</p>
          <button
            @click="$emit('closeAddWorkspaces')"
            class="focus:outline-none"
          >
            <img src="@/assets/images/icon-close.svg" />
          </button>
        </div>

        <div class="w-full mt-5 pt-5 flex  flex-col space-y-4">
          <v-text-field
            class="pt-0 mt-0"
            label="Workspace name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
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
            label="Status"
            dense
          ></v-select>
        </div>

        <div class="w-full flex mt-5 flex-col space-y-4">
          <v-text-field
            class="pt-0 mt-0"
            label="Payment"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
          <v-text-field
            class="pt-0 mt-0 "
            label="Name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
          <v-text-field
            class="pt-0 mt-0"
            label="Last Name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="w-full flex mt-5 flex-col space-y-4">
          <v-text-field
            class="pt-0 mt-0"
            label="Company / Organisation"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="grid mt-5 pt-5 grid-cols-3 gap-4">
          <v-text-field
            class="pt-0 mt-0 col-span-2"
            label="Street"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
          <v-text-field
            class="pt-0 mt-0 col-span-1"
            label="Number"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
          <v-text-field
            class="pt-0 mt-0"
            label="City"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            label="Land"
            dense
          ></v-select>
        </div>

        <div class="grid mt-5 pt-5 gap-4">
          <v-text-field
            class="pt-0 mt-0"
            label="VAT Number"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
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
        </div>

        <p class="text-sm mt-4 py-3 capitalize">
          current workspaces as admin
        </p>

        <div class="w-full mb-10 flex space-y-3 flex-col">
          <div id="head" class="flex justify-between">
            <div class="w-1/2 flex justify-between">
              <span class="text-sm font-semibold capitalize">
                Admin name
              </span>
              <span class="text-sm font-semibold capitalize">plan</span>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="w-1/2 flex justify-between">
              <span class="text-xs font-medium capitalize">
                Kirby Thailman
              </span>
              <span
                class="text-xs font-medium capitalize"
                v-text="'free'"
              ></span>
            </div>

            <Button class="focus:outline-none relative">
              <img src="~/assets/images/icon-delete-gray.svg" />
            </Button>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-5" id="bottom">
        <button
          class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAddWorkspaces')"
        >
          Cancel
        </button>
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAddWorkspaces')"
        >
          Done
        </button>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import TablePlan from "~/data_component/Settings/TablePlan";

export default defineComponent({
  props: ["openAddWorkspaces"],
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
