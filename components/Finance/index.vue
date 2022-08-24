<template>
  <Div id="content" class="p-5">
    <Div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <Div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <div class="flex space-x-4 w-1/2">
          <button
            @click="moveLink('finance/addinvoice', 'standardInvoice')"
            class="
              bg-white
              justify-center
              border
              capitalize
              border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500
              duration-200
              hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            Add Invoice
          </button>
          <button
            @click="moveLink('finance/recuiringInvoice', 'recurringInvoice')"
            class="
              bg-white
              justify-center
              border
              capitalize
              border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500
              duration-200
              hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            Add Recurring Invoice
          </button>

          <button
            @click="moveLink('finance/timeloginvoice', 'timeLogInvoice')"
            class="
              bg-white
              justify-center
              border
              capitalize
              border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500
              duration-200
              hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            Add Time Log Invoice
          </button>
        </div>
        <Div class="flex">
          <!-- This is form search -->
          <Div class="flex flex-row" id="search">
            <Div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <Div class="focus-within:text-DPGREY-400 relative text-DPGREY-400">
                <Span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <Button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <Svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 text-DPGREY-200 w-4">
                      <Path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></Path>
                    </Svg>
                  </Button>
                </Span>
                <Input type="text" class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500" placeholder="Search..." autocomplete="off" />
              </Div>
            </Div>

            <Button class="focus:outline-none block xl:hidden relative" @click="filterModal = !filterModal">
              <Img src="@/assets/images/icon-settings.svg" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>

    <FinanceTableContent />

    <!-- Option select dropdown -->

    <!-- <transition class="" name="slide-fade">
      <Div
        v-if="openDropdown"
        :class="openDropdown ? 'duration-200 absolute h-32' : 'opacity-0'"
        class="px-2 rounded-lg overflow-auto py-4 z-50 bg-white dp-shadow"
        :style="
          openDropdown
            ? `left: ${leftPosition(sizing.left)}px; right: ${
                sizing.right
              }px; top: ${topPosition(sizing.top)}px; bottom: ${
                sizing.bottom
              }px; width: ${sizing.width}px`
            : false
        "
      >
        <Div class="flex justify-start flex-col ">
          <Div
            v-for="(data, index) in elementOption"
            :key="index"
            @click="newValue(data, index)"
            :class="
              index == checkDataActive()
                ? 'bg-DPGREEN-100  text-DPGREEN-400'
                : 'hover:text-DPGREEN-500 cursor-pointer hover:ml-2 hover:duration-200'
            "
            class="py-2 rounded-md"
          >
            <Span class="capitalize ml-2 cursor-pointer" v-text="data"></Span>
          </Div>
        </Div>
      </Div>
    </transition> -->

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="projectFilter" />

    <ProjectModalAddProject :openAddProject="openAddProject" @closeAddProject="openAddProject = !openAddProject" />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter, useAsync } from "@nuxtjs/composition-api";

import allFilter from "~/data_component/Dashboard/AllFilter";
import TableAddInvoice from "~/data_component/Finance/TableAddInvoice";
import useFirstSetting from "~/controller/FirstSetting";
import useInvoicesSettings from "~/controller/FirstSettings/InvoicesSettings";

export default defineComponent({
  setup() {
    const { fetchClient } = useFirstSetting();

    const { fetchInvoices } = useInvoicesSettings();
    const filterModal = ref(false);

    const openAddProject = ref(false);

    const { projectFilter } = allFilter();

    const { invoice } = TableAddInvoice();

    const router = useRouter();

    const moveLink = (link: string, invoiceType: string) => {
      invoice[0].invoiceType = invoiceType;

      router.push(link);
    };

    // const { filterDropdown } = MemberFilter();

    // const {
    //   elementOption,
    //   openDropdown,
    //   sizing,
    //   resetOption,
    //   checkDataActive,
    //   newValue,
    //   toggleOption,
    //   getClientPosition
    // } = useOptionSelect(filterDropdown);

    // const topPosition = (position: any) => position - 30;

    // const leftPosition = (position: any) => position - 255;

    return {
      openAddProject,
      moveLink,
      filterModal,
      projectFilter,
      fetchClient,
      fetchInvoices,
    };
  },
  async beforeMount() {
    await this.fetchClient();

    await this.fetchInvoices();
  },
});
</script>

<style>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) ease;
}
</style>
