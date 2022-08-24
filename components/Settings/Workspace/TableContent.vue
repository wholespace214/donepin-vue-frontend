<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-32">
          <Span class="text-small capitalize">Name</Span>
        </Div>
        <Div
          v-for="(data, index) in tableHead"
          :key="index"
          class="p-2 md:flex md:items-end hidden"
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
      <Div
        class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex" id="table-left">
          <Div id="name" class="flex items-center p-2 w-32">
            <Div class="flex capitalize items-center justify-between">
              <span>private</span>
            </Div>
          </Div>
          <Div id="member" class="p-2 w-24 md:flex md:items-center hidden">
            <Div class="flex capitalize flex-wrap">
              <span>free plan</span>
            </Div>
          </Div>
          <Div
            id="member"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              1/3
            </Span>
          </Div>

          <Div id="monthly" class="p-2 w-32 md:flex md:items-center hidden">
            <Span class="font-normal capitalize px-2">
              free
            </Span>
          </Div>
          <Div id="status" class="p-2  w-24 md:flex md:items-center hidden">
            <Span
              class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"
            >
              Paid
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center capitalize space-x-3 justify-between p-2">
          <Span class="text-small text-DPGREEN-500">
            switch to this workspace
          </Span>
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
              class="absolute bg-white dp-shadow right-10 rounded-md w-32 z-20"
            >
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
              </Span>
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Disable
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
            </Div>
          </Div>
        </Div>
      </Div>

      <!-- Second data -->
      <Div
        class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex" id="table-left">
          <Div id="name" class="flex items-center p-2 w-32">
            <Div class="flex capitalize items-center justify-between">
              <span>luna company</span>
            </Div>
          </Div>
          <Div id="member" class="p-2 w-24 md:flex md:items-center hidden">
            <Div class="flex capitalize flex-wrap">
              <span>plan 1</span>
            </Div>
          </Div>
          <Div
            id="member"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              3/5
            </Span>
          </Div>

          <Div id="monthly" class="p-2 w-32 md:flex md:items-center hidden">
            <Span class="font-normal capitalize px-2">
              $ 300
            </Span>
          </Div>
          <Div id="status" class="p-2  w-24 md:flex md:items-center hidden">
            <Span
              class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"
            >
              Active
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center capitalize space-x-3 justify-between p-2">
          <Div class="flex space-x-2 items-center">
            <img src="~/assets/images/danger-circle.svg" />
            <Span class="font-semibold">
              current workspace
            </Span>
          </Div>

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
              class="absolute bg-white dp-shadow right-10 rounded-md w-32 z-20"
            >
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
              </Span>
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Disable
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
            </Div>
          </Div>
        </Div>
      </Div>

      <!-- Third data -->
      <Div
        class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md"
      >
        <Div class="flex" id="table-left">
          <Div id="name" class="flex items-center p-2 w-32">
            <Div class="flex capitalize items-center justify-between">
              <span>luna company</span>
            </Div>
          </Div>
          <Div id="member" class="p-2 w-24 md:flex md:items-center hidden">
            <Div class="flex capitalize flex-wrap">
              <span>plan 1</span>
            </Div>
          </Div>
          <Div
            id="member"
            class="p-2 w-32 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              3/5
            </Span>
          </Div>

          <Div id="monthly" class="p-2 w-32 md:flex md:items-center hidden">
            <Span class="font-normal capitalize px-2">
              $ 300
            </Span>
          </Div>
          <Div id="status" class="p-2  w-24 md:flex md:items-center hidden">
            <Span
              class="bg-[#EA8426] bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-[#EA8426]"
            >
              Disable 
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center capitalize space-x-3 justify-between p-2">
          <Div class="flex space-x-2 items-center">
            <!-- <img src="~/assets/images/danger-circle.svg" /> -->
            <Span class="text-[#DBDBDB]">
              workspace unavailable
            </Span>
          </Div>

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
              class="absolute bg-white dp-shadow right-10 rounded-md w-32 z-20"
            >
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
              </Span>
              <Span
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />Disable
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
import TableWorkspace from "~/data_component/Settings/TableWorkspace";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead } = TableWorkspace();
    const edit = ref(false);

    return {
      tableHead,
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
