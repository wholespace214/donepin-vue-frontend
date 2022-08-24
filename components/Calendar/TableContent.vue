<template>
  <div class="flex flex-col">
    <!-- This is table head -->

    <div class="flex justify-between" id="table-head">
      <div class="flex">
        <div class="flex items-end p-2 w-60">
          <span class="text-small">Name</span>
        </div>

        <div class="flex space-x-5">
          <div v-for="data in daysInMonth" :key="data" class="hidden w-1 md:flex md:items-end">
            <span class="w-1 p-1">
              {{ data }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-end p-2">
        <span class="text-small">Hours</span>
      </div>
    </div>

    <!-- This is table body place -->

    <div class="" v-for="(data, index) in dataFilter" :key="index">
      <div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
        <div class="flex items-center" id="table-left">
          <div id="name" class="flex space-x-4 items-center p-2 w-60">
            <div class="flex items-center justify-between">
              <div class="relative">
                <v-avatar color="DPYELLOW" size="40" class="capitalize font-weight-bold text-body-1 white--text">
                  {{ `${data.memberId && data.memberId.firstName.charAt(0)}${data.memberId && data.memberId.lastName.charAt(0)}` }}</v-avatar
                >

                <div class="absolute top-[30px] left-[29px]">
                  <div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div class="flex-col hidden justify-center p-2 w-full md:flex">
              <span class="mb-0 capitalize text-sm font-semibold">{{ `${data.memberId && data.memberId.firstName} ${data.memberId && data.memberId.lastName}` }}</span>
              <p class="font-light mb-0" v-text="data.memberId && data.memberId.email"></p>
            </div>
          </div>

          <div class="flex space-x-3.5">
            <div v-for="item in data.attendence" :key="item" class="hidden w-[10.5px] h-[10.5px] p-1 md:flex md:items-end">
              <span v-if="item.createdAt" class="w-1 bg-DPGREEN-500 p-1"> </span>
              <!-- <span else class="w-1 bg-DPGREY-100 p-1"> </span> -->
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center p-2" id="table-right">
          <div class="relative flex items-center">
            <span class="text-sm font-normal" id="hours">{{ `${hoursSum(data.attendence)}/180` }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end space-x-4">
      <div class="flex items-center capitalize space-x-1">
        <span class="w-[10px] h-[10px] bg-DPGREEN-500 p-1"></span>
        <p class="mb-0 mt-0 pb-0">attendance</p>
      </div>
      <div class="flex items-center capitalize space-x-1">
        <span class="w-[10px] h-[10px] bg-DPGREY-100 p-1"></span>
        <p class="mb-0 mt-0 pb-0">not attendance</p>
      </div>
      <div class="flex items-center capitalize space-x-1">
        <span class="w-[10px] h-[10px] bg-DPGREY-50 p-1"></span>
        <p class="mb-0 mt-0 pb-0">free day</p>
      </div>
      <div class="flex items-center capitalize space-x-1">
        <span class="w-[10px] h-[10px] bg-DPBLUE-400 p-1"></span>
        <p class="mb-0 mt-0 pb-0">absence</p>
      </div>
      <div class="flex items-center capitalize space-x-1">
        <span class="w-[10px] h-[10px] bg-DPYELLOW-400 p-1"></span>
        <p class="mb-0 mt-0 pb-0">holidays</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import TableAttendance from "~/data_component/Attendance/TableAttendance";
import calendarDataComponent from "~/data_component/Calendar";
import draggable from "vuedraggable";
import { format, getDaysInMonth } from "date-fns";

export default defineComponent({
  components: { draggable },

  setup() {
    const { tableHead, content } = TableAttendance();
    const { calendarData } = calendarDataComponent();
    let dataFilter = calendarData;

    const hoursSum = (attendArr) => {
      let sum = 0;
      if (attendArr.length !== 0) {
        sum = attendArr.map((item) => item.totalHours).reduce((prev, next) => prev + next);
        return sum;
      } else {
        return "Nodata";
      }
      // const sum = hour?.reduce((prev, next) => prev + next);
    };
    // const getDays = () => {
    const daysInMonth = getDaysInMonth(new Date());
    //   return days;
    // };

    return {
      content,
      dataFilter,
      hoursSum,
      daysInMonth,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
