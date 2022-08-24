<template>
  <div class="flex flex-col">
    <!-- This is table head -->

    <div class="flex justify-between" id="table-head">
      <div class="flex">
        <div class="flex items-end p-2 w-60">
          <span class="text-small">Name</span>
        </div>
        <div v-for="(data, index) in tableHead" :key="index" class="hidden p-2 w-24 md:flex md:items-end">
          <span class="text-small capitalize">
            {{ data.text }}
          </span>
        </div>
      </div>
      <div class="flex items-end p-2">
        <span class="text-small">Actions</span>
      </div>
    </div>

    <!-- This is table body place -->
    <draggable v-model="content">
      <div class="" v-for="(data, index) in allAttendance" :key="index">
        <div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
          <div class="flex" id="table-left">
            <div id="name" class="flex space-x-4 items-center p-2 w-60">
              <div class="flex items-center justify-between">
                <div class="relative">
                  <v-avatar color="REDCOLOR" size="40" class="capitalize font-weight-bold text-body-1 white--text">
                    {{ `${data.memberId && data.memberId.firstName.charAt(0)}${data.memberId && data.memberId.lastName.charAt(0)} ` }}
                  </v-avatar>

                  <div class="absolute top-[30px] left-[29px]">
                    <div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="flex-col hidden justify-center p-2 md:flex">
                <span class="mb-0 text-sm font-semibold">
                  {{ `${data.memberId && data.memberId.firstName} ${data.memberId && data.memberId.lastName}` }}
                </span>
                <p class="font-light mb-0">
                  {{ data.memberId && data.memberId.email }}
                </p>
              </div>

              <!-- <div class="flex items-center">
                <span class="mb-0 text-sm font-semibold">
                  {{ `${data.memberId.firstname} ${data.memberId.lastName} ` }}
                </span>
                <span class="capitalize text-sm mb-0 font-bold">
                  {{ data.memberId.email }}
                </span>
              </div> -->
            </div>

            <div class="flex justify-between capitalize">
              <div class="flex-col hidden justify-center p-2 w-24 md:flex">
                <span class="mb-0 text-sm font-semibold">
                  {{ formatDateTime(data.createdAt, "date") }}
                </span>
                <p class="font-light mb-0">
                  {{ formatDateTime(data.createdAt, "day") }}
                </p>
              </div>
              <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                <p class="font-light mb-0">
                  {{ formatDateTime(data.checkIn, "time") }}
                </p>
              </div>
              <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                <p class="font-light mb-0">
                  {{ formatDateTime(data.checkOut, "time") }}
                </p>
              </div>
              <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                <p class="font-light mb-0">
                  {{ findBreak(new Date(data.pause), new Date(data.resume)) }}
                </p>
              </div>
              <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                <p class="font-light mb-0">
                  {{ data.AttendanceType }}
                </p>
              </div>
              <div class="flex flex-col items-center justify-center p-2 w-24">
                <p class="font-semibold mb-0">
                  <!-- {{ data.hours }} -->
                </p>
              </div>
              <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                <!-- {{ data.diferrence }} -->
              </div>
              <!-- <div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
                {{ data.commment }}
              </div> -->
            </div>
          </div>
          <div class="flex items-center justify-center p-2" id="table-right">
            <div class="relative flex items-center">
              <button @click="data.edit = !data.edit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </button>
              <Div v-show="data.edit" @click="data.edit = !data.edit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.edit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                <Span
                  @click="
                    $emit('openEditAttendance');
                    editModalStatus(data);
                  "
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                </Span>
                <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                  <img src="@/assets/images/icon-delete.svg" class="mr-2" />delete
                </Span>
              </Div>
            </div>
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TableAttendance from "~/data_component/Attendance/TableAttendance";
import markAttendance from "~/data_component/Attendance/MarkAttendance";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import draggable from "vuedraggable";
import { format, differenceInMinutes, differenceInHours } from "date-fns";

export default defineComponent({
  components: { draggable },
  props: {
    openAttendance: Function,
    openEditAttendance: Function,
  },
  setup() {
    const { tableHead, content, allAttendance } = TableAttendance();
    const { AttendanceModalStatus, selectedData } = markAttendance();
    const { sortData } = useGeneralFeatures();

    // const sortedData = sortData(allAttendance, "memberId.firstName");

    // console.log("sorted Attendnce", sortedData);

    console.log("allAttendance", allAttendance);
    const formatDateTime = (date: any, type: string) => {
      if (type === "date") return format(new Date(date), "MM/dd/yyyy");
      else if (type == "day") return format(new Date(date), "EEEE");
      else if (type == "time") return format(new Date(date), "HH:mm");
    };

    const findBreak = (start: string, end: string) => {
      let mins = 0;
      let hours = 0;
      mins = differenceInMinutes(new Date(start), new Date(end));
      hours = differenceInHours(new Date(start), new Date(end));
      if (mins < 59 && hours == 0) return `00:${mins}`;
      else return `${hours}:${mins}`;
    };

    const initials = (fName: string, lName: string) => {
      return `${fName?.charAt(0)}${lName?.charAt(0)} `;
    };
    const editModalStatus = (data) => {
      selectedData.value = data;
      console.log("data", data);
      AttendanceModalStatus.value = "editAttendance";
    };

    return {
      tableHead,
      content,
      allAttendance,
      formatDateTime,
      findBreak,
      initials,
      // AttendanceModalStatus,
      editModalStatus,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
