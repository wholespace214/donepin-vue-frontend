<template>
  <div
    :class="openEditAttendance ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-1/3
      fixed
      flex flex-col
      h-screen
      justify-between
      modal
      overflow-y-auto
      pb-20
      pt-4
      px-5
      right-0
      shadow-md
      top-0
      z-30
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="add-new-members"
  >
    <div id="top" class="">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold">Edit Attendance</p>
        <button @click="$emit('closeEditAttendance')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-10" id="select">
        <v-select
          :items="allMember"
          item-text="memberName"
          item-value="memberId"
          color="rgba(165, 210, 118, 1)"
          class="mt-0"
          label="Select member"
          :v-model="selectedData && selectedData.memberId.memberName"
          menu-props="auto"
        ></v-select>
      </div>

      <div v-for="(data, index) in shift" :key="index" class="flex flex-col min-h-[50vh]">
        <p class="text-sm capitalize mt-3 font-semibold text-[#6A6A6A]">
          {{ data.title }}
        </p>

        <div class="grid pt-5 grid-cols-2 gap-4">
          <span v-for="(input, index) in data.shiftManagement" :key="index">
            <v-select
              v-if="input.type === 'select'"
              :items="input.items"
              class="capitalize"
              item-text="name"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              item-value="id"
              clearable
              v-model="input.value"
              :label="input.label"
              dense
            ></v-select>

            <v-text-field v-else color="rgba(165, 210, 118, 1)" class="mt-0 capitalize" v-model="input.value" :label="input.label" :type="input.type"></v-text-field>
          </span>
        </div>
      </div>

      <div class="w-full">
        <div @click="addMore" class="flex w-24 items-center cursor-pointer">
          <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
          <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add more</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeEditAttendance')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="
          submit();
          $emit('closeEditAttendance');
        "
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import markAttendance from "~/data_component/Attendance/MarkAttendance";
import useAttendanceSettings from "~/controller/FirstSettings/AttendanceSettings";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";

export default defineComponent({
  props: {
    openEditAttendance: Boolean,
  },
  setup(props) {
    // const member = ref();
    const { editAttendanceData } = useAttendanceSettings();
    const { allMember } = tableTeamMembers();

    const { shift, addMore, selectedData } = markAttendance();

    const submit = () => {
      console.log("markAttendance", shift);
      console.log("selectedData", selectedData);

      // validation(form).then((res: any) => {
      // if (res) {
      // AttendanceModalStatus.value == "addAttendance" ? addNewAttendance() : submitEditAttendance();

      if (selectedData.value._id) {
        editAttendanceData(selectedData.value._id, selectedData.value.memberId._id, shift);
      }
      // fetchClient();
      props.openEditAttendance = false;
      // }
      // });
    };

    return { shift, addMore, selectedData, submit, allMember };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
