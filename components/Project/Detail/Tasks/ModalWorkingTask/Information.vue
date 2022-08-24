<template>
  <div>
    <div
      v-for="(data, index) in projectInformation"
      :key="index"
      class="grid grid-rows-1 gap-5 pb-4 border-b border-gray-300"
    >
      <div class="flex justify-between items-center w-full">
        <div
          class="flex space-x-1 items-center w-1/2 justify-between capitalize"
        >
          <p class="font-bold w-1/2 mb-0">Project</p>
          <p class="font-medium w-1/2 text-xs mb-0 rounded-lg">
            <span
              class="rounded-md py-px px-2 bg-[#19CCF3] bg-opacity-[20%] text-[#19CCF3]"
              v-text="data.projectName"
            >
            </span>
          </p>
        </div>

        <div class="flex space-x-1">
          <img src="@/assets/images/Unlock.svg" />
          <p class="font-bold mb-0 capitalize">public</p>
        </div>
      </div>
      <div class="flex justify-between items-center w-full">
        <div
          class="flex space-x-1 items-center w-1/2 justify-between capitalize"
        >
          <p class="font-bold mb-0 w-1/2">Dependent</p>
          <p
            v-text="data.dependent"
            class="font-medium w-1/2 text-xs mb-0 px-1 py-px"
          ></p>
        </div>

        <div class="flex justify-between items-center w-[40%]">
          <p class="font-bold mb-0 capitalize">Start Date:</p>
          <p class="mb-0" v-text="data.startDate"></p>
        </div>
      </div>
      <div class="flex justify-between items-center w-full">
        <div
          class="flex space-x-1 items-center w-1/2 justify-between capitalize"
        >
          <p class="font-bold mb-0 w-1/2">Priority</p>
          <p class="font-medium w-1/2 text-xs mb-0 px-1 py-px">
            <span
              :class="priorityStyling(data.priority)"
              class="rounded-md py-px px-2"
              v-text="data.priority"
            >
            </span>
          </p>
        </div>

        <div class="flex justify-between items-center w-[40%]">
          <p class="font-bold mb-0 capitalize">Due Date:</p>
          <p class="mb-0" v-text="data.dueDate"></p>
        </div>
      </div>

      <div class="flex items-center w-full">
        <div class="flex space-x-1 items-center w-full  capitalize">
          <p class="font-bold mb-0 w-1/4">Asigned To</p>

          <div class="flex space-x-1 w-auto">
            <div
              v-for="(users, index) in data.assigned_to"
              :key="index"
              class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"
              v-text="users"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";
import TableAlpinaLogo from "~/data_component/Projects/TableAlpinaLogo";

export default defineComponent({
  props: {
    openWorkingTask: Boolean
  },
  setup(props) {
    const { projectInformation } = workingTask();

    const { priorityStyling } = TableAlpinaLogo();

    return {
      projectInformation,
      priorityStyling
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
