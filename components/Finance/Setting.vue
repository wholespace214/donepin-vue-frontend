<template>
  <Div id="content" class="p-5">
    <DashboardSnackbar :right="true" />
    <Div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <Div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <H1 class="text-lg font-bold">Invoice</H1>
        <Div class="flex">
          <!-- This is form search -->
          <Div class="flex flex-row" id="search">
            <Div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <Div class="focus-within:text-DPGREY-400 relative text-DPGREY-400">
                <Span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <Button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 text-DPGREY-200 w-4">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </Button>
                </Span>
                <Input type="text" class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500" placeholder="Search..." autocomplete="off" />
              </Div>
            </Div>

            <Button class="focus:outline-none block xl:hidden relative" @click="filterModal = !filterModal">
              <img src="@/assets/images/icon-settings.svg" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>

    <ValidationObserver ref="form">
      <Div class="w-full flex flex-col space-y-4" v-for="(data, index) in settings" :key="index">
        <Div class="flex items-center justify-between">
          <ValidationProvider rules="required" name="Invoice Language" v-slot="{ errors }">
            <div class="w-56">
              <v-select
                v-model="data.language"
                :items="invoiceLanguage"
                item-text="text"
                item-value="data"
                color="rgba(165, 210, 118, 1)"
                item-color="SWITCHCOLOR"
                label="Default Invoice Language"
                :error-messages="errors"
              ></v-select>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="Invoice Currency" v-slot="{ errors }">
            <div class="w-40">
              <v-select
                v-model="data.currency"
                :items="allCurrency"
                color="rgba(165, 210, 118, 1)"
                item-color="SWITCHCOLOR"
                item-text="display"
                item-value="value"
                label="Default Currency"
                :error-messages="errors"
              ></v-select>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="Due after" v-slot="{ errors }">
            <div class="w-40 flex flex-col">
              <v-text-field type="date" v-model="data.dueAfter" color="rgba(165, 210, 118, 1)" label="Due after" :error-messages="errors"></v-text-field>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="Invoice prefix" v-slot="{ errors }">
            <div class="w-40">
              <v-text-field v-model="data.invoicePrefix" color="rgba(165, 210, 118, 1)" label="Invoice prefix" :error-messages="errors"></v-text-field>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="Number Digits" v-slot="{ errors }">
            <div class="w-40">
              <v-text-field v-model="data.numberDigits" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Number Digits" :error-messages="errors"></v-text-field>
            </div>
          </ValidationProvider>

          <Div class="flex capitalize flex-col items-center">
            <span>invoice number sample</span>
            <span v-text="data.invoice"></span>
          </Div>
        </Div>
        <ValidationProvider rules="required" name="Invoice terms" v-slot="{ errors }">
          <Div class="w-48">
            <v-text-field v-model="data.invoiceTerms" color="rgba(165, 210, 118, 1)" label="Invoice terms" :error-messages="errors"></v-text-field>
          </Div>
        </ValidationProvider>

        <Div class="w-full">
          <H1 class="text-lg font-bold">Tax</H1>
          <Div class="flex flex-col w-1/2">
            <Div v-for="(tax, index) in data.tax" :key="index" class="flex space-x-5 items-center">
              <ValidationProvider rules="required" name="Tax Name" v-slot="{ errors }">
                <div class="w-48">
                  <v-text-field v-model="tax.taxName" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Tax Name" :error-messages="errors"></v-text-field>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="integer" name="Tax Rate" v-slot="{ errors }">
                <div class="w-48">
                  <v-text-field v-model="tax.taxRate" color="rgba(165, 210, 118, 1)" item-color="SWITCHCOLOR" label="Tax rate" :error-messages="errors"></v-text-field>
                </div>
              </ValidationProvider>

              <div @click="removeTax(index)" class="p-4 flex cursor-pointer items-center">
                <span v-html="deleteIcon"></span>
              </div>
            </Div>

            <div @click="addTax" class="mt-2" id="add-tax">
              <div class="flex w-40 items-center cursor-pointer">
                <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
                <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add item</p>
              </div>
            </div>
          </Div>
        </Div>

        <Div class="w-full mt-5">
          <div class="flex justify-end mt-5" id="bottom">
            <button
              @click="updated"
              class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
              style="min-width: 110px"
            >
              Done
            </button>
          </div>
        </Div>
      </Div>
    </ValidationObserver>

    <!-- <v-date-picker @change="getDate" v-model="picker"></v-date-picker> -->

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="projectFilter" />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useSettings from "~/controller/Finance.ts/Settings";
import useUpdateSettings from "~/controller/Finance.ts/Settings/UpdatedSettings";
import allFilter from "~/data_component/Dashboard/AllFilter";
import Finance from "~/data_component/Finance/finance";
import Settings from "~/data_component/Finance/Settings";

export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const picker = ref("");

    const { settings } = Settings();

    const { allCurrency, invoiceLanguage, deleteIcon } = Finance();

    const { submitUpdateSettings } = useUpdateSettings();

    const { addTax, removeTax } = useSettings();

    const { projectFilter } = allFilter();

    const getDate = (date: any) => console.log(picker.value);

    const updated = () => {
      submitUpdateSettings();
    };

    return {
      deleteIcon,
      settings,
      filterModal,
      projectFilter,
      allCurrency,
      invoiceLanguage,
      picker,
      getDate,
      updated,
      addTax,
      removeTax,
    };
  },
});
</script>
