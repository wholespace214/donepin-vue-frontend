<template>
  <div class="grid grid-cols-2 gap-2 flex" style="justify-content: space-between">
    <div class="flex flex-col space-y-3 mr-2">
      <div class="mb-5">
        <v-select
          v-model="workingTime"
          v-for="(data, index) in workingTimeOptions"
          :key="index"
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          :items="data.allData"
          :label="data.label"
          item-value="id"
          item-text="name"
          dense
        ></v-select>
      </div>

      <v-text-field color="rgba(165, 210, 118, 1)" class="mt-0" label="Hours Per Week" type="text" v-model="hoursPerWeek"></v-text-field>

      <v-text-field color="rgba(165, 210, 118, 1)" label="Yearly Vacation" suffix="days" v-model="yearlyVacation"></v-text-field>
    </div>

    <div v-if="editMember" class="flex flex-col space-y-3 ml-5">
      <div id="top" class="">
        <div class="flex justify-between mb-1" id="title">
          <p class="font-weight-regular">Working Days</p>
        </div>

        <div v-for="(value, index) in formatData" :key="index">
          <v-checkbox :input-value="!value[1]" value class="capitalize mt-0 pt-0 caption" :label="value[0]" color="rgba(165, 210, 118, 1)" disabled></v-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, useAsync } from "@nuxtjs/composition-api";
import HolidayDataComponent from "~/data_component/Attendance/Holiday";
import useHolidaySettings from "~/controller/FirstSettings/HolidaySettings";
import addTeamMembers from "~/data_component/Members/AddTeamMembers";
import { format } from "date-fns";

export default defineComponent({
  props: {
    openAttendance: Boolean,
    editMember: Boolean,
  },
  setup() {
    const { hoursPerWeek, yearlyVacation, workingTime, workingTimeOptions } = addTeamMembers();
    const { defaultHolidayData } = HolidayDataComponent();
    const { getDefaultHolidays } = useHolidaySettings();

    const items = ref(["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"]);
    const value = ref(["foo", "bar", "fizz"]);

    // for testing working time select option

    const days = ref(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]);

    const addMemberAttendance = ref(true);

    let formatData = ref([]) as any;

    useAsync(() => {
      let param = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
      getDefaultHolidays(param);
    });

    watch(defaultHolidayData, () => {
      if (defaultHolidayData.value) {
        formatData.value = Object.entries(defaultHolidayData.value);
      }
    });

    return {
      hoursPerWeek,
      addMemberAttendance,
      days,
      workingTime,
      yearlyVacation,
      value,
      items,
      formatData,
      workingTimeOptions,
    };
  },
});
</script>
<style scoped>
input {
  border-style: inset;
}
</style>
