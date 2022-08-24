<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-32">
          <Span class="text-sm font-semibold capitalize">Name</Span>
        </Div>
        <Div
          v-for="(data, index) in tableHead"
          :key="index"
          class="p-2 md:flex md:items-end hidden"
          :class="data.class"
        >
          <Span class="text-sm font-semibold capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-sm font-semibold capitalize">Actions</Span>
      </Div>
    </Div>

    <Div class="" id="table-body">
      <Div
        class="bg-white w-full items-center flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex items-center" id="table-left">
          <div id="name" class="flex space-x-4 items-center p-2 w-32">
            <div class="flex-col hidden justify-center p-2 w-full md:flex">
              <span class="mb-0 capitalize text-sm font-semibold">
                freelance
              </span>
            </div>
          </div>

          <Div id="package" class="p-2 w-32 md:flex  md:items-center hidden">
            <Span class="text-small capitalize">
              FREE
            </Span>
          </Div>
          <Div id="invoices" class="p-2 w-24 md:flex items-center hidden">
            <Span class="text-small capitalize">
              FREE
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-24 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              3
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-24 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              100MB
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-48 flex-wrap md:flex md:items-center hidden"
          >
            <Span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              work
            </Span>
            <Span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              work
            </Span>
            <Span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              work
            </Span>
            <Span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
            >
              work
            </Span>
          </Div>

          <Div
            id="email"
            class="p-2 w-24 md:flex justify-center md:items-center hidden"
          >
            <Span
              class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"
            >
              active
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center justify-between p-2">
          <Div class="w-24 text-end">
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
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
              </Span>
              <Span
                class="capitalize cursor-pointer flex flex-row hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row items-center px-4 py-3 text-xs"
              >
                <img
                  src="~/assets/images/icon-delete.svg"
                  class="mr-2"
                  style="width: 12px; height: 20px;"
                />
                Delete
              </Span>
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img
                  src="~/assets/images/icon-delete.svg"
                  class="mr-2"
                  style="width: 12px; height: 20px;"
                />
                download invoice
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
import TableAdminPlans from "~/data_component/Admin/TableAdminPlans";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead } = TableAdminPlans();
    const edit = ref(false);

    return {
      edit,
      tableHead
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
