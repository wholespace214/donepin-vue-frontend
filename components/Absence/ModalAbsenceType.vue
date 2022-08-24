<template>
  <div
    :class="openAbsenceType ? ' -translate-x-0' : 'translate-x-full'"
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
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold capitalize mb-0 pb-0">absence type</p>
        <button @click="$emit('closeAbsenceType')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="grid grid-cols-1 divide-y divide-[#EFEFEF] mt-5">
        <div class="flex p-2 py-4 items-center justify-between">
          <p class="text-sm pb-0 mb-0 capitalize font-semibold text-[#6A6A6A]">leave Type</p>
          <p class="text-sm pb-0 mb-0 capitalize font-semibold text-[#6A6A6A]">action</p>
        </div>

        <!-- <div class="flex p-2 py-4 items-center justify-between">
          <p class="text-sm pb-0 mb-0 capitalize font-semibold text-[#6A6A6A]">vacation</p>
        </div> -->

        <div v-for="(data, index) in absenceTypeData" :key="index">
          <div v-for="(item, index) in data.absentType" :key="index" class="flex p-2 py-4 items-center justify-between">
            <p class="text-sm pb-0 mb-0 capitalize font-semibold text-[#6A6A6A]">{{ item }}</p>

            <div v-if="item !== 'Vacation'" @click="removeAbsenceType(data._id, item)">
              <span class="cursor-pointer">
                <img src="@/assets/images/trash-remove.svg" />
              </span>
            </div>
          </div>
        </div>

        <div :v-if="absenceType.length > 0" v-for="(data, index) in absenceType" :key="index" class="flex p-2 py-4 items-center justify-between">
          <p class="text-sm pb-0 mb-0 capitalize font-semibold text-[#6A6A6A]">
            {{ data }}
          </p>
          <div @click="removeAbsenceArr(index)">
            <span class="cursor-pointer">
              <img src="@/assets/images/trash-remove.svg" />
            </span>
          </div>
        </div>
      </div>

      <div class="border-t border-[#EFEFEF] border-solid"></div>

      <div class="w-full mt-5">
        <ValidationObserver ref="form">
          <ValidationProvider rules="required" name="absence type" v-slot="{ errors }">
            <v-text-field color="rgba(165, 210, 118, 1)" label="new absence type" class="capitalize" v-model="newAbsenceType" :error-messages="errors"></v-text-field>
          </ValidationProvider>
        </ValidationObserver>
        <div class="w-full">
          <div @click="addAbsenceType" class="flex w-1/2 items-center cursor-pointer">
            <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
            <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add more</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeAbsenceType')"
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
import addNewAbsenceData from "~/data_component/Attendance/AddAbsence";
import useAbsenceSettings from "~/controller/FirstSettings/AbsenceSettings";
import AbsenceTypeData from "~/data_component/Attendance/AbsenceType";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  props: {
    openAbsenceType: Boolean,
  },
  setup() {
    const { absenceType } = addNewAbsenceData();
    const newAbsenceType = ref("");
    const { validation } = useGeneralFeatures();
    const { absenceTypeData } = AbsenceTypeData();
    const { getAllAbsenceTypes, deleteAbsentTypeById, addAbsenceTypes } = useAbsenceSettings();

    useAsync(() => {
      getAllAbsenceTypes();
    });
    const form = ref();
    const addAbsenceType = () => {
      console.log("addAbsence is called", absenceType);
      absenceType.value.push(newAbsenceType.value);
      newAbsenceType.value = "";
    };

    const removeAbsenceType = async (id: any, data: any) => {
      await deleteAbsentTypeById(id, data);
    };

    const submit = async (data: any) => {
      validation(form).then((res: any) => {
        if (res) {
          addAbsenceTypes(absenceType.value);
          newAbsenceType.value = "";
          absenceType.value = [];
        }
      });
    };

    const removeAbsenceArr = async (index: number) => {
      absenceType.value.splice(index, 1);
    };

    return { form, absenceType, newAbsenceType, addAbsenceType, removeAbsenceType, absenceTypeData, submit, removeAbsenceArr };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
