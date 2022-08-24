<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-32">
          <Span class="text-small capitalize">Plan</Span>
        </Div>
        <Div
          v-for="(data, index) in tableHeadSubscription"
          :key="index"
          class="p-2 md:flex md:items-end  hidden"
          :class="data.class"
        >
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-small w-24 text-end">Actions</Span>
      </Div>
    </Div>

    <Div class="" id="table-body">
      <!-- First data -->
      <Div
        class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex" id="table-left">
          <Div id="name" class="flex items-center p-2 w-32">
            <Div class="flex capitalize items-center justify-between">
              <span>Plan max</span>
            </Div>
          </Div>
          <Div
            id="monthly-price"
            class="p-2 w-32 md:flex md:items-center hidden"
          >
            <Div class="flex capitalize flex-wrap">
              <span>20,00 EUR</span>
            </Div>
          </Div>
          <Div
            id="users"
            class="p-2 w-24 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              6/10
            </Span>
          </Div>

          <Div
            id="storage"
            class="p-2 w-32 justify-center md:flex md:items-center hidden"
          >
            <Span class="font-normal capitalize px-2">
              1GB/User
            </Span>
          </Div>

          <Div
            id="projects"
            class="p-2 w-24 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              9/10
            </Span>
          </Div>

          <Div
            id="invoices"
            class="p-2 w-24 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              Unlimited
            </Span>
          </Div>

          <Div
            id="module"
            class="p-2 w-40 md:flex flex-wrap md:items-center hidden"
          >
            <span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              Manager
            </span>
            <span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              Manager
            </span>
            <span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              Manager
            </span>
            <span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              Manager
            </span>
          </Div>

          <Div
            id="status"
            class="p-2  w-24 md:flex justify-center md:items-center hidden"
          >
            <Span
              class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"
            >
              Active
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center capitalize space-x-3 justify-between p-2">
          <Div class="text-end">
            <Button @click="edit = !edit" class="focus:outline-none relative">
              <img src="~/assets/images/icon-modify.svg" />
            </Button>

            <Div
              v-show="edit"
              @click="edit = false"
              class="fixed inset-0 h-full w-full z-10"
            ></Div>
            <Div
              v-show="edit"
              class="absolute bg-white dp-shadow right-10 rounded-md z-20"
            >
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Change
                Plan
              </Span>
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Cancel
                Subscription
              </Span>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import draggable from "vuedraggable";
import TableSubscriptionBilling from '~/data_component/Settings/TableSubscriptionBilling';


export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHeadSubscription } = TableSubscriptionBilling();
    const edit = ref(false);

    return {
      tableHeadSubscription,
      edit
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
