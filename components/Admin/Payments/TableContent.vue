<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between">
        <Div class="flex items-end p-2 w-40">
          <Span class="text-sm font-semibold capitalize">Workspace</Span>
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
          <div id="name" class="flex space-x-4 items-center p-2 w-40">
            <!-- <div class="flex items-center justify-between">
              <div class="relative">
                <v-avatar
                  color="REDCOLOR"
                  size="40"
                  class="capitalize font-weight-bold text-body-1 white--text"
                >
                  JC
                </v-avatar>

                <div class="absolute top-[30px] left-[29px]">
                  <div
                    class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"
                  ></div>
                </div>
              </div>
            </div> -->

            <div class="flex-col hidden justify-center p-2 w-full md:flex">
              <span class="mb-0 text-sm font-semibold">
                Khirby thailman
              </span>
            </div>
          </div>
          <!-- <Div
            id="company-name"
            class="p-2 w-40 capitalize flex-wrap md:flex md:items-center hidden"
          >
            <span
              class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini"
            >
              mao mam
            </span>
          </Div> -->
          <Div
            id="package"
            class="p-2 w-20 md:flex justify-center md:items-center hidden"
          >
            <Span class="text-small capitalize">
              max
            </Span>
          </Div>
          <Div id="invoices" class="p-2 w-36 md:flex items-center hidden">
            <Span class="text-small capitalize">
              RE-01696522/03/2021
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-32 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              4101696522
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-20 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              $200.00
            </Span>
          </Div>
          <Div
            id="client-number"
            class="p-2 w-20 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              02.05.2021
            </Span>
          </Div>

          <Div
            id="client-number"
            class="p-2 w-28 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              02.05.2021
            </Span>
          </Div>

          <Div
            id="client-number"
            class="p-2 w-36 md:flex justify-center  md:items-center hidden"
          >
            <Span class="font-normal capitalize items-center rounded-md">
              paypal
            </Span>
          </Div>
          <Div
            id="email"
            class="p-2 w-20 md:flex justify-center md:items-center hidden"
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
import TableAdminPayments from "~/data_component/Admin/TablePayments";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead } = TableAdminPayments();
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
