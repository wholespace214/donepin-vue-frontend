<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between w-[95%]">
        <Div class="flex items-end p-2 w-30">
          <Span class="text-small capitalize">Invoice</Span>
        </Div>
        <Div v-for="(data, index) in tableHead" :key="index" class="p-1 md:flex md:items-end hidden" :class="data.class">
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-1">
        <Span class="text-small w-20 text-end">Total</Span>
        <Span class="text-small w-20 text-end">Actions</Span>
      </Div>
    </Div>

    <DashboardSkeleton v-if="skeletonLoader" type="list-item-avatar-three-line" :amount="5" />

    <draggable v-else v-model="invoices" group="task">
      <Div class="" id="table-body" v-for="(data, index) in invoices" :key="index">
        <Div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md">
          <Div class="flex w-[95%]" id="table-left">
            <Div id="invoice" class="flex items-center p-2 w-28">
              <Div class="flex items-center justify-between">
                <span v-text="data.invoice"></span>
              </Div>
            </Div>
            <Div id="purchase-order" class="p-2 w-30 md:flex md:items-center hidden">
              <Div class="flex flex-wrap">
                <span v-text="data.purchaseOrder"></span>
              </Div>
            </Div>
            <Div id="project" class="p-2 w-30 md:flex md:items-center hidden">
              <Span class="text-small capitalize">
                {{ data.projectId }}
              </Span>
            </Div>
            <Div id="client" class="p-2 w-50 md:flex hidden">
              <Div class="flex items-center justify-between">
                <Div class="relative">
                  <v-avatar color="REDCOLOR" size="40" class="capitalize font-weight-bold text-body-1 white--text"> JC </v-avatar>

                  <Div class="absolute top-[30px] left-[29px]">
                    <Div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></Div>
                  </Div>
                </Div>
              </Div>

              <Div class="flex-col hidden justify-center p-2 w-full md:flex">
                <Span class="mb-0 text-sm font-semibold"> Khirby thailman </Span>
                <P class="font-light mb-0"> kirby@gmail.com </P>
              </Div>
            </Div>
            <Div id="date" class="p-2 w-22 md:flex md:items-center hidden">
              <Span class="font-normal capitalize items-center rounded-md px-2">
                {{ getDate(data.dueDate) }}
              </Span>
            </Div>
            <Div id="type" class="p-2 w-30 md:flex md:items-center hidden">
              <Span class="font-normal capitalize px-2">
                {{ getInvoicesType(data.invoiceType) }}
              </Span>
            </Div>
            <Div id="status" class="p-2 w-20 md:flex md:items-center hidden">
              <Span class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"> Paid </Span>
            </Div>
          </Div>

          <Div class="flex items-center justify-between p-2">
            <Span class="text-small w-22 text-end">$400</Span>
            <Div class="w-24 text-end">
              <Button @click="data.isEdit = !data.isEdit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </Button>

              <Div v-show="data.isEdit" @click="data.isEdit = !data.isEdit" class="fixed inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.isEdit" class="absolute bg-white dp-shadow right-10 rounded-md w-32 z-20">
                <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />Send Invoice
                </Span>
                <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />Download
                </Span>
                <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
                </Span>
                <Span class="capitalize cursor-pointer flex flex-row hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row items-center px-4 py-3 text-xs">
                  <img src="~/assets/images/icon-delete.svg" class="mr-2" style="width: 12px; height: 20px" />
                  Delete
                </Span>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </draggable>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import draggable from "vuedraggable";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import TableFinance from "~/data_component/Finance/TableFinance";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, invoices } = TableFinance();

    const { skeletonLoader } = useGeneralFeatures();

    const getDate = (dateInvoices: any) => {
      const date = new Date(dateInvoices);

      return `${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`;
    };

    const getInvoicesType = (invoicesType: string) => {
      switch (invoicesType) {
        case "standardInvoice":
          return "Standart Invoices";
          break;
        case "timeLogInvoice":
          return "Time Logs Invoices";
          break;
        case "recurringInvoice":
          return "recurring Invoice";
      }
    };

    return {
      getDate,
      getInvoicesType,
      skeletonLoader,
      tableHead,
      invoices,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
