<template>
  <Div>
    <Div class="w-full flex flex-col space-y-4" v-for="(data, index) in invoice" :key="index">
      <Div class="flex">
        <div class="flex items-center pr-2 w-56">
          <v-autocomplete
            v-model="data.invoiceType"
            :items="invoiceType"
            item-text="text"
            item-value="data"
            eager
            color="rgba(165, 210, 118, 1)"
            item-color="SWITCHCOLOR"
            label="Invoice Type"
          ></v-autocomplete>
        </div>

        <div class="flex items-center pr-2 w-56">
          <v-text-field v-model="data.invoice" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Invoice"></v-text-field>
        </div>

        <div class="flex items-center pr-2 w-56">
          <v-text-field v-model="data.purchaseOrder" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Purchase order"></v-text-field>
        </div>

        <div class="flex items-center pr-2 w-56">
          <v-text-field v-model="data.InvoiceDate" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Purchase Date"></v-text-field>
        </div>

        <div class="flex items-center pl-2 w-56">
          <v-text-field v-model="data.dueDate" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Due Date" id="id"></v-text-field>
        </div>
      </Div>
      <Div class="flex">
        <div class="flex items-center pr-2 w-56">
          <v-autocomplete
            v-model="data.projectId"
            color="rgba(165, 210, 118, 1)"
            item-color="SWITCHCOLOR"
            label="Project"
            :items="project"
            eager
            item-text="projectName"
            item-value="_id"
          ></v-autocomplete>
        </div>
        <div class="flex items-center pr-2 w-56">
          <v-autocomplete v-model="data.clientId" eager :items="allClient" item-text="Name" item-value="_id" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Client"></v-autocomplete>
        </div>

        <div class="flex items-center pr-2 w-56">
          <v-autocomplete eager color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" item-text="text" item-value="data" label="Your Company" :items="dummyCompany" v-model="data.company">
          </v-autocomplete>
        </div>

        <div class="flex items-center pr-2 w-56">
          <v-autocomplete :items="allCurrency" label="Currency" item-color="SWITCHCOLOR" item-text="display" item-value="value" color="rgba(165, 210, 118, 1)" clearable v-model="data.currency" eager>
          </v-autocomplete>
        </div>

        <div class="flex items-center pl-2 w-56">
          <v-autocomplete
            :items="invoiceLanguage"
            item-text="text"
            eager
            item-value="data"
            v-model="data.invoiceLanguage"
            color="rgba(165, 210, 118, 1)"
            item-color="SWITCHCOLOR"
            label="Invoice Language"
          ></v-autocomplete>
        </div>
      </Div>

      <Div class="flex mb-5">
        <div class="flex items-center pr-2 w-56">
          <v-select
            v-model="data.billingFrequently"
            :items="dummyBillyFrequently"
            item-text="text"
            item-value="data"
            color="rgba(165, 210, 118, 1)"
            item-color="SWITCHCOLOR"
            label="Billing Frequently"
          ></v-select>
        </div>

        <div class="flex items-center pl-2 w-56">
          <v-text-field v-model="data.billingCycle" item-color="SWITCHCOLOR" color="rgba(165, 210, 118, 1)" label="Billing Cycle"></v-text-field>
        </div>
      </Div>

      <div v-for="(item, index) in data.item" :key="index" class="flex space-x-5 justify-between items-center">
        <v-text-field v-model="item.itemName" color="rgba(165, 210, 118, 1)" label="Item"></v-text-field>
        <v-text-field v-model="item.quantityHours" color="rgba(165, 210, 118, 1)" label="Quantity/Hours"></v-text-field>
        <v-text-field v-model="item.unitPrice" color="rgba(165, 210, 118, 1)" label="Unit Price"></v-text-field>
        <v-text-field v-model="data.tax" color="rgba(165, 210, 118, 1)" label="Tax"></v-text-field>
        <v-text-field v-model="item.description" color="rgba(165, 210, 118, 1)" label="Description"></v-text-field>

        <div @click="deletedItemProduct" class="p-4 flex items-center cursor-pointer">
          <span v-html="deleteIcon"></span>
        </div>
        <div class="flex flex-col space-y-2 justify-center">
          <span class="capitalize">amount</span>
          <span>{{ `$ ${item.amount}` }}</span>
        </div>
      </div>

      <div class="w-full">
        <div @click="addItemProduct" class="flex w-40 items-center cursor-pointer">
          <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
          <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add item</p>
        </div>
      </div>

      <div class="w-full flex justify-end">
        <div class="p-2 space-x-3 flex capitalize">
          <span>sub total</span>
          <span>
            {{ `$ ${subTotal}` }}
          </span>
        </div>
      </div>

      <div id="total-note">
        <div class="w-full flex justify-between">
          <div class="w-[80%]">
            <v-text-field color="rgba(165, 210, 118, 1)" v-model="data.note" label="Note"></v-text-field>
          </div>
          <div class="flex items-center space-x-4" id="discout">
            <span class="capitalize">discount</span>

            <div class="w-14">
              <v-text-field @input="totalAmount" v-model="data.discount" color="rgba(165, 210, 118, 1)" suffix="%"></v-text-field>
            </div>
            <div class="w-14">
              <v-select color="rgba(165, 210, 118, 1)"></v-select>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-end">
          <div class="p-2 space-x-3 flex capitalize">
            <span>total</span>
            <span>{{ `$ ${amountTotal}` }} </span>
          </div>
        </div>
      </div>
    </Div>

    <Div class="w-full mt-5">
      <div class="flex space-x-3 justify-end mt-5" id="bottom">
        <button
          class="border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-black text-xs"
          style="min-width: 110px"
          @click="invoicesRedir"
        >
          Cancel
        </button>
        <button
          @click="submitData"
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px"
        >
          Done
        </button>
      </div>
    </Div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";
import useAddInvoice from "~/controller/Finance.ts/AddInvoice";
import useInvoice from "~/controller/Finance.ts/Invoice";
import useFirstSetting from "~/controller/FirstSetting";
import allFilter from "~/data_component/Dashboard/AllFilter";
import Client from "~/data_component/Finance/Client";
import Finance from "~/data_component/Finance/finance";
import TableAddInvoice from "~/data_component/Finance/TableAddInvoice";
import TableProject from "~/data_component/Projects/TableProject";

export default defineComponent({
  setup(props, context) {
    const { invoice, subTotal, amountTotal, invoiceResp } = TableAddInvoice();

    const { allClient } = Client();

    const { allProjects } = TableProject();

    const { submitNewInvoice } = useAddInvoice();

    const { fetchClient, fetchProject } = useFirstSetting();

    const { invoiceType, dummyBillyFrequently, dummyCompany, dummyCurrency, invoiceLanguage, deleteIcon, allCurrency } = Finance();

    const { totalAmount, addItemProduct, deletedItemProduct } = useInvoice();

    useAsync(() => {
      fetchProject();
      fetchClient();
    });

    return {
      allClient,
      dummyCompany,
      amountTotal,
      subTotal,
      invoice,
      allProjects,
      allCurrency,
      invoiceType,
      invoiceLanguage,
      dummyCurrency,
      dummyBillyFrequently,
      deleteIcon,
      submitNewInvoice,
      totalAmount,
      addItemProduct,
      deletedItemProduct,
      invoiceResp,
    };
  },
  methods: {
    async submitData() {
      this.submitNewInvoice();
      // console.log("submitDtaatatatya", this.invoiceResp);
      // this.$router.push({ path: "/finance" });
    },
    invoicesRedir() {
      this.$router.push({ path: "/finance" });
    },
  },
});
</script>
