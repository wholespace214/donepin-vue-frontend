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

    <div class="">
      <div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
        <div class="flex w-4/5" id="table-left">
          <div id="name" class="flex space-x-8 items-stretch p-2 w-60">
            <div class="flex items-start justify-between">
              <div class="relative">
                <v-avatar color="REDCOLOR" size="40" class="capitalize font-weight-bold text-body-1 white--text"> JC </v-avatar>

                <div class="absolute top-[30px] left-[29px]">
                  <div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div class="flex w-full justify-start flex-col">
              <p class="capitalize text-sm mb-0 font-bold">kirby mini</p>

              <div class="flex-col p-0 pt-2 hidden justify-center md:flex">
                <span class="mb-0 text-sm font-semibold"> 02.02.2021 </span>
                <p class="font-light mb-0 capitalize">monday</p>
              </div>
            </div>
          </div>

          <div class="hidden px-5 md:flex flex-col w-4/5 capitalize">
            <div v-for="(data, index) in content" :key="index" :class="index == 0 ? 'border-DPGREY-100 border-b border-dashed' : false" class="flex w-full p-0 py-2 pr-0">
              <div class="w-24" v-text="data.difference"></div>
              <div class="w-24" v-text="data.start"></div>
              <div class="w-24" v-text="data.end"></div>
              <div class="w-24" v-text="data.break"></div>
              <div class="w-24" id="project" v-text="data.project"></div>
              <div class="w-24" id="project" v-text="data.hours"></div>
              <div class="w-24" id="project" v-text="data.status"></div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center p-2" id="table-right">
          <div class="relative flex items-center">
            <button @click="edit = !edit" class="focus:outline-none relative">
              <img src="~/assets/images/icon-modify.svg" />
            </button>
            <Div v-show="edit" @click="edit = !edit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
            <Div v-show="edit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
              <Span
                @click="$emit('editAbsence')"
                class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
              >
                <img src="@/assets/images/icon-approve.svg" class="mr-2" />approve
              </Span>
              <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                <img src="@/assets/images/icon-decline.svg" class="mr-2" />decline
              </Span>
            </Div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

import draggable from "vuedraggable";
import TableAprovals from "~/data_component/Attendance/TableAprovals";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, content } = TableAprovals();

    const edit = ref(false);

    return {
      tableHead,
      content,
      edit,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
