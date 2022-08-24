<template>
  <div id="content" class="p-5">
    <div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <div>
          <button
            @click="
              openAttendance = !openAttendance;
              editModalStatus();
            "
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
            <img src="~/assets/images/icon-add-user.svg" class="bg-DPGREEN-200 mr-1 p-1 rounded-lg w-5" />
            Mark Attendance
          </button>
        </div>

        <div class="flex">
          <div class="flex flex-row" v-for="(data, index) in attendanceFilter" :key="index" id="select">
            <div class="hidden xl:block w-40 mx-2 bg-white rounded-md">
              <div class="focus-within:text-DPGREY-400 relative">
                <input
                  @focus="getClientPosition(data.allData, $event, index)"
                  @blur="toggleOption"
                  readonly
                  :placeholder="data.value && data.value.length > 0 ? data.value : data.label"
                  class="dp-shadow w-45 capitalize cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                />

                <span class="cursor-pointer absolute flex inset-y-0 items-center right-0 pr-2">
                  <button @click="resetOption" v-if="data.dataActive !== null" type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <img class="w-3 h-3" src="~assets/images/icon-arrow-down.svg" alt="" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="input" class="flex bg-transparent items-center">
          <div class="hidden xl:block w-28 mx-2 bg-white rounded-md">
            <div class="focus-within:text-DPGREY-400 relative mx-2">
              <input
                type="date"
                style="color: lightgrey"
                placeholder=""
                class="dp-shadow w-45 capitalize cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                v-model="startDate"
              />
            </div>
          </div>

          <span>-</span>

          <div class="hidden xl:block w-28 mx-2 bg-white rounded-md">
            <div class="focus-within:text-DPGREY-400 relative">
              <input
                type="date"
                placeholder=""
                style="color: lightgrey"
                class="dp-shadow w-45 capitalize focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                v-model="endDate"
              />
            </div>
          </div>
        </div>

        <div class="flex">
          <!-- This is form search -->
          <div class="flex flex-row" id="search">
            <div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <div class="focus-within:text-DPGREY-400 relative text-DPGREY-400">
                <span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 text-DPGREY-200 w-4">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input type="text" class="dp-shadow w-45 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500" placeholder="Search..." autocomplete="off" />
              </div>
            </div>

            <button class="focus:outline-none block xl:hidden relative" @click="filterModal = !filterModal">
              <img src="@/assets/images/icon-settings.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <AttendanceTableContent @openAttendance="openAttendance = !openAttendance" @openEditAttendance="editAttendance = !editAttendance" />

    <!-- Option select dropdown -->
    <transition class="" name="slide-fade">
      <div
        v-if="openDropdown"
        :class="openDropdown ? 'duration-200 absolute h-32' : 'opacity-0'"
        class="px-2 rounded-lg overflow-auto py-4 z-50 bg-white dp-shadow"
        :style="openDropdown ? `left: ${leftPosition(sizing.left)}px; right: ${sizing.right}px; top: ${topPosition(sizing.top)}px; bottom: ${sizing.bottom}px; width: ${sizing.width}px` : false"
      >
        <div class="flex justify-start flex-col">
          <div
            v-for="(data, index) in elementOption"
            :key="index"
            @click="newValue(data, index)"
            :class="index == checkDataActive() ? 'bg-DPGREEN-100  text-DPGREEN-400' : 'hover:text-DPGREEN-500 cursor-pointer hover:ml-2 hover:duration-200'"
            class="py-2 rounded-md"
          >
            <span class="capitalize ml-2 cursor-pointer" v-text="data.label"></span>
          </div>
        </div>
      </div>
    </transition>

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="attendanceFilter" />

    <ModalEditAttendance @closeEditAttendance="editAttendance = !editAttendance" :openEditAttendance="editAttendance" />

    <!-- @getAttendance="getAttendanceData" :dataFilter="attendanceFilter" -->
    <AttendanceModalMarkAttendance @closeMarkAttendance="openAttendance = !openAttendance" :openMarkAttendance="openAttendance" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";
import ModalEditAttendance from "@/components/Attendance/ModalEditAttendance.vue";
import attendance from "~/data_component/Attendance";
import useOptionSelect from "~/controller/OptionSelect";
import useAttendanceSettings from "~/controller/FirstSettings/AttendanceSettings";
import markAttendance from "~/data_component/Attendance/MarkAttendance";

export default defineComponent({
  components: {
    ModalEditAttendance,
  },
  setup() {
    const { getAllAttendance } = useAttendanceSettings();
    const { AttendanceModalStatus } = markAttendance();

    const startDate = ref();
    const endDate = ref();

    useAsync(() => {
      getAllAttendance();
      // fetchMembers("");
    });

    const filterModal = ref(false);
    const { editAttendance } = attendance();
    const openAttendance = ref(false);

    const { attendanceFilter } = allFilter();

    const { elementOption, openDropdown, sizing, resetOption, checkDataActive, newValue, toggleOption, getClientPosition } = useOptionSelect(attendanceFilter);

    const editModalStatus = () => {
      AttendanceModalStatus.value = "addAttendance";
    };

    const topPosition = (position: any) => position - 30;

    const leftPosition = (position: any) => position - 255;

    return {
      filterModal,
      openAttendance,
      editAttendance,
      editModalStatus,
      attendanceFilter,
      resetOption,
      getClientPosition,
      elementOption,
      openDropdown,
      sizing,
      checkDataActive,
      newValue,
      toggleOption,
      leftPosition,
      topPosition,
      startDate,
      endDate,
    };
  },
});
</script>

<style></style>
