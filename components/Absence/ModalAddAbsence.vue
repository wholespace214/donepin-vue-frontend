<template>
  <!-- Modal Add Members in -->
  <div
    :class="openAddAbsence ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-96
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
    <div id="top" class="flex flex-col">
      <div class="flex capitalize justify-between mb-3" id="title">
        <p class="font-bold">Add absence</p>
        <button @click="$emit('closeAddAbsence')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>
      <ValidationObserver ref="form">
        <ValidationProvider rules="required" name="Member" v-slot="{ errors }">
          <v-autocomplete
            color="rgba(165, 210, 118, 1)"
            menu-props="auto"
            v-model="addAbsenceInit.member"
            label="Select Member"
            :items="allMember"
            item-text="memberName"
            item-value="memberId"
            :error-messages="errors"
          ></v-autocomplete>
        </ValidationProvider>

        <div class="py-3 space-x-5 flex">
          <ValidationProvider rules="required" name="Absence type" v-slot="{ errors }">
            <v-autocomplete
              color="rgba(165, 210, 118, 1)"
              label="Absence Type"
              v-model="addAbsenceInit.absenceType"
              :items="absenceArr"
              item-value="id"
              item-text="name"
              :error-messages="errors"
            ></v-autocomplete>
          </ValidationProvider>
          <ValidationProvider rules="required" name="Duration" v-slot="{ errors }">
            <v-autocomplete color="rgba(165, 210, 118, 1)" label="Duration" v-model="addAbsenceInit.duration" :items="absenceDuration" :error-messages="errors"></v-autocomplete>
          </ValidationProvider>
        </div>

        <div class="py-3 space-x-5 flex">
          <ValidationProvider rules="required" name="Begin" v-slot="{ errors }">
            <v-text-field color="rgba(165, 210, 118, 1)" label="Begin" v-model="addAbsenceInit.begin" type="date" :error-messages="errors"></v-text-field>
          </ValidationProvider>
          <ValidationProvider rules="required" name="End" v-slot="{ errors }">
            <v-text-field color="rgba(165, 210, 118, 1)" label="End" v-model="addAbsenceInit.end" type="date" :error-messages="errors"></v-text-field>
          </ValidationProvider>
        </div>
        <ValidationProvider rules="required" name="Reason" v-slot="{ errors }">
          <v-text-field color="rgba(165, 210, 118, 1)" label="Reason" v-model="addAbsenceInit.reason" :error-messages="errors"></v-text-field>
        </ValidationProvider>
        <div class="flex w-full justify-end">
          <div class="w-1/2">
            <ValidationProvider rules="required" name="Status" v-slot="{ errors }">
              <v-autocomplete v-model="addAbsenceInit.status" color="rgba(165, 210, 118, 1)" label="Status" :items="absenceStatus" :error-messages="errors"></v-autocomplete>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>

      <p class="text-sm capitalize font-semibold text-[#6A6A6A]">vacations</p>

      <div class="flex flex-col">
        <div class="flex justify-between items-center" id="total">
          <span id="year" class="flex items-center"> 2021 </span>
          <div class="flex space-x-4">
            <div v-for="data in ['total', 'used', 'left']" :key="data" class="flex capitalize text-center justify-center w-10 flex-col">
              <span class="">{{ data }}</span>
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeAddAbsence')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="submit()"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from "@nuxtjs/composition-api";
import addNewAbsenceData from "~/data_component/Attendance/AddAbsence";
import useAbsenceSettings from "~/controller/FirstSettings/AbsenceSettings";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import AbsenceTypeData from "~/data_component/Attendance/AbsenceType";
import TableAbsence from "~/data_component/Attendance/TableAbsence";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  props: {
    openAddAbsence: Boolean,
  },
  setup() {
    const absenceArr = ref([]) as any;
    const form = ref();

    const { addAbsenceInit, openAddAbsence, absenceType, absenceDuration, absenceStatus } = addNewAbsenceData();
    const { addAbsence, getAllAbsenceTypes } = useAbsenceSettings();
    const { editAbsenceData } = TableAbsence();
    const { validation } = useGeneralFeatures();

    const { allMember } = tableTeamMembers();
    const { absenceTypeData } = AbsenceTypeData();
    useAsync(() => {
      getAllAbsenceTypes();
    });

    absenceTypeData.value.forEach((element: any) => {
      element.absentType.forEach((i) => absenceArr.value.push({ id: i, name: i }));
    });

    const submit = () => {
      validation(form).then((res: any) => {
        if (res) {
          addAbsence();
          openAddAbsence.value = false;
        }
      });
    };
    return { form, absenceArr, addAbsenceInit, editAbsenceData, submit, absenceType, absenceDuration, absenceStatus, allMember };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
