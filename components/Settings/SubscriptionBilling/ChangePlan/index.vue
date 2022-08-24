<template>
  <Div class="flex flex-col">
    <!-- This is table head -->
    <H1 class="text-lg font-bold pb-4">Change plan</H1>
    <Div class="flex" id="table-head">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-32"> </Div>
        <Div
          v-for="(data, index) in tableHead"
          :key="index"
          class="p-2 md:flex md:items-end  hidden"
          :class="data.class"
        >
          <Span class="text-sm font-semibold capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
    </Div>

    <Div class="" id="table-body">
      <Div
        v-for="(data, index) in content"
        :key="index"
        class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex" id="table-left">
          <Div id="name" class="flex items-center p-2 w-32">
            <Div class="flex capitalize items-center flex-col justify-between">
              <span>{{ data.textTitle.mainText }}</span>
              <span class="text-small">{{ data.textTitle.secondary }}</span>
            </Div>
          </Div>
          <Div
            id="plan-status"
            class="p-2 w-32 justify-center md:flex md:items-center hidden"
          >
            <Div class="flex capitalize flex-wrap">
              <span>{{ data.freePlan }}</span>
            </Div>
          </Div>
          <Div
            id="freelancer"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <img
              v-if="data.freelancer == 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="font-normal capitalize px-2">
              {{ data.freelancer }}
            </Span>
          </Div>

          <Div
            id="starter"
            class="p-2 w-32 justify-center md:flex md:items-center hidden"
          >
            <img
              v-if="data.starter == 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="font-normal capitalize px-2">
              {{ data.starter }}
            </Span>
          </Div>

          <Div
            id="medium"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <img
              v-if="data.medium == 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="text-small capitalize">
              {{ data.medium }}
            </Span>
          </Div>

          <Div
            id="max"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <img
              v-if="data.max == 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="text-small capitalize">
              {{ data.medium }}
            </Span>
          </Div>

          <Div
            id="ultimate"
            class="p-2 w-32 md:flex justify-center flex-wrap md:items-center hidden"
          >
            <img
              v-if="data.ultimate === 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="text-small capitalize">
              {{ data.ultimate }}
            </Span>
          </Div>

          <Div
            id="Custom"
            class="p-2  w-32 md:flex justify-center md:items-center hidden"
          >
            <img
              v-if="data.custom == 'icon'"
              class="w-5 h-5"
              src="@/assets/images/icon-check.svg"
            />
            <Span v-else class="text-small capitalize">
              {{ data.custom }}
            </Span>
          </Div>
        </Div>
      </Div>
    </Div>

    <Div class="flex" id="table-footer">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-36"> </Div>
        <Div
          v-for="(data, index) in planButton"
          :key="index"
          class="p-2 w-32 md:flex md:items-end  hidden"
        >
          <button
            @click="openChangePlan = !openChangePlan"
            class="capitalize border border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-1 py-[6px] rounded-lg  font-semibold text-sm"
            :class="
              data == true
                ? 'cursor-text border-gray-200 text-gray-200'
                : 'cursor-pointer border-DPGREEN-500 bg-DPGREEN-500 text-white'
            "
            style="min-width: 110px;"
          >
            {{ data == true ? "current plan" : "choose plan" }}
          </button>
        </Div>
      </Div>
    </Div>

    <!-- This is modal -->
    <div
      :class="openChangePlan ? ' -translate-x-0' : 'translate-x-full'"
      class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
      id="add-new-roles"
    >
      <div id="top" class="flex flex-col">
        <div
          class="flex items-center capitalize justify-between mb-3"
          id="title"
        >
          <p class="font-bold pb-0 mb-0">Change Plan</p>
          <button @click="$emit('closeChangePlan')" class="focus:outline-none">
            <img src="@/assets/images/icon-close.svg" />
          </button>
        </div>

        <div class="w-full mt-5 pt-5 flex  flex-col space-y-4">
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            label="Your New Plan"
            dense
          ></v-select>
          <v-text-field
            class="pt-0 mt-0"
            label="Payment"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="grid  grid-cols-2 gap-4">
          <v-text-field
            class="pt-0 mt-0"
            label="Name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
          <v-text-field
            class="pt-0 mt-0"
            label="Last name"
            color="rgba(145, 201, 89,1)"
          ></v-text-field>
        </div>

        <div class="w-full flex mt-5 flex-col space-y-4">
          <v-text-field
            class="pt-0 mt-0"
            label="Your Company / Organisation"
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

          <div class="mt-5">
            <p class="pb-0 text-small mb-0">
              Lorem ipsum, consectetur adipiscing elit.
              <span class="text-DPGREEN-500">Privacy Policy</span> commodo
              <span class="text-DPGREEN-500">Terms and Conditions</span> eget
              justo vestibulum ullamcorper. Duis dictum finibus elementum.
              Mauris sollicitudin ullamcorper massa, sed vulputate turpis
              dignissim nec. Donec sagittis dignissim nisi sit amet molestie.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-5" id="bottom">
        <button
          class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
          style="min-width: 110px;"
          @click="$emit('closeChangePlan')"
        >
          Cancel
        </button>
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px;"
          @click="$emit('closeChangePlan')"
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
  setup() {
    const { tableHead, content, planButton } = TablePlan();

    const openChangePlan = ref(false);

    const paymentOption = ref([
      "paypal",
      "credit card / debit card",
      "google pay",
      "skrill"
    ]);

    return {
      content,
      tableHead,
      planButton,
      paymentOption,
      openChangePlan
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
