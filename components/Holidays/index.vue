<template>
  <div id="content" class="p-5">
    <div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <div class="flex space-x-3">
          <button
            @click="openAddHolidays = !openAddHolidays"
            class="
              bg-white
              bor
              border border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500 hover:duration-200 hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            Holidays
          </button>

          <button
            @click="openDefaultHolidays = !openDefaultHolidays"
            class="
              bg-white
              bor
              border border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500 hover:duration-200 hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            Default Holidays
          </button>
        </div>

        <div class="flex">
          <div class="flex flex-row" v-for="(data, index) in filter" :key="index" id="select">
            <div class="hidden xl:block w-52 mx-2 bg-white rounded-md">
              <div class="focus-within:text-DPGREY-400 relative">
                <input readonly :placeholder="data" class="dp-shadow w-52 capitalize cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500" />

                <span class="cursor-pointer absolute flex inset-y-0 items-center right-0 pr-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <img class="w-3 h-3" src="~assets/images/icon-arrow-down.svg" alt="" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <!-- This is form search -->
          <div class="flex flex-row" id="search">
            <button class="focus:outline-none block xl:hidden relative" @click="filterModal = !filterModal">
              <img src="@/assets/images/icon-settings.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <HolidaysTableContent />

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="teamMembersFilter" />

    <HolidaysModalAddHolidays @closeAddHolidays="openAddHolidays = !openAddHolidays" :openAddHolidays="openAddHolidays" />

    <HolidaysModalDefaultHolidays @closeDefaultHolidays="openDefaultHolidays = !openDefaultHolidays" :openDefaultHolidays="openDefaultHolidays" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, useAsync } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";
import useHolidaySettings from "~/controller/FirstSettings/HolidaySettings";
import HolidayDataComponent from "~/data_component/Attendance/Holiday";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";
import { startOfYear, format } from "date-fns";

export default defineComponent({
  setup() {
    const { getHolidayData, getDefaultHolidays } = useHolidaySettings();
    const { HolidayData } = HolidayDataComponent();
    const { fetchMembers } = useMembersSettings();

    useAsync(() => {
      let params = { beginDate: format(startOfYear(new Date()), "yyyy-MM-dd"), endDate: format(new Date(), "yyyy-MM-dd") };
      fetchMembers("");

      getHolidayData(params);
    });
    const filterModal = ref(false);

    const openAddHolidays = ref(false);

    const openDefaultHolidays = ref(false);

    const { teamMembersFilter } = allFilter();

    const filter = ref(["select year"]);

    return {
      openAddHolidays,
      openDefaultHolidays,
      filterModal,
      filter,
      teamMembersFilter,
      HolidayData,
    };
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
