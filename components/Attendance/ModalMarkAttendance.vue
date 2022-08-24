<template>
  <div
    :class="openMarkAttendance ? ' -translate-x-0' : 'translate-x-full'"
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
        <p class="font-bold">Mark Attendance</p>
        <!-- <p v-else-if="AttendanceModalStatus === 'editAttendance'" class="font-bold">Edit Mark Attendance</p> -->
        <button @click="$emit('closeMarkAttendance')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-10" id="select">
        <!-- <v-autocomplete color="rgba(165, 210, 118, 1)" label="Select Member" :items="allMember" item-text="memberName" item-value="memberId" v-modal="member"></v-autocomplete> -->
        <v-select color="rgba(165, 210, 118, 1)" class="mt-0" menu-props="auto" label="Select Member" :items="allMember" item-text="memberName" item-value="memberId" v-modal="member"></v-select>
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
        @click="$emit('closeMarkAttendance')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="submit"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from "@nuxtjs/composition-api";
import markAttendance from "~/data_component/Attendance/MarkAttendance";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useAttendanceSettings from "~/controller/FirstSettings/AttendanceSettings";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";

export default defineComponent({
  props: {
    openMarkAttendance: Boolean,
  },
  setup(props) {
    const member = ref();
    const dataa = ref([]) as any;

    const { shift, addMore, month, AttendanceType, AttendanceModalStatus, selectedData } = markAttendance();

    const { addNewAttendance } = useAttendanceSettings();
    const { fetchMembers } = useMembersSettings();

    const { allMember } = tableTeamMembers();

    useAsync(() => {
      fetchMembers("");
    });

    let data = {
      AttendanceType: "",
      memberId: "",
      selectProject: "",
      selectedDate: "",
      checkIn: "",
      checkOut: "",
      break: "",
      comment: "",
      selectedTask: "",
    };

    const params = [] as any;
    const submit = () => {
      // validation(form).then((res: any) => {
      // if (res) {
      // AttendanceModalStatus.value == "addAttendance" ? addNewAttendance() : submitEditAttendance();

      // if (selectedData.value._id) {
      shift.forEach((i, index) => {
        i.shiftManagement.forEach((i) => {
          console.log("shift ", shift);
          // console.log("daata i shift", i.label, i.value);
          const value = i.value;
          const label = i.label;
          console.log(i.value);
          let data: any = {
            [i.label.replace(/ /g, "")]: i.value,
          };

          params.push(data);
        });
      });

      const Demu = params.reduce((acc, cur, idx) => {
        const newAcc = { ...acc };
        for (let [key, val] of Object.entries(cur)) {
          if (!newAcc[key]) {
            newAcc[key] = val;
          } else {
            newAcc[key] = `${newAcc[key]},${val}`;
          }
        }
        return newAcc;
      });

      console.log("Demu-----------------", Demu);
      console.log("params-----------------", params);

      console.log("shift", shift);

      addNewAttendance();
      // }
      // fetchClient();
      props.openMarkAttendance = false;
      // }
      // });
    };

    // const {
    //   allUserList,
    //   allMember,
    //   // toggleModal,
    //   // submit,
    //   // removeGroup
    // } = useAddTeamMember();
    // console.log("alllUselist>>>>>", allUserList);

    return { shift, addMore, allMember, month, submit, AttendanceModalStatus, selectedData, member, dataa };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
