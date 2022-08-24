<template>
  <!-- Modal Add Members in -->
  <div
    :class="openWorkingTask ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-[45%] fixed flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="add-new-members"
  >
    <div id="top" class="flex flex-col space-y-5">
      <div class="flex capitalize items-center justify-between mb-3" id="title">
        <p class="font-bold text-sm pb-0 mb-0">This is The task name</p>
        <button @click="$emit('closeWorkingTask')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col">
        <div class="flex">
          <NuxtLink
            v-for="(data, index) in menu"
            :key="index"
            to="/"
            class="capitalize border-transparent font-semibold text-[12px] cursor-pointer border-b-2  focus-within:outline-none focus:outline-none hover:border-DPGREEN-500 hover:border-b-2 hover:duration-200 mr-5 pb-1"
            v-text="data.text"
          >
          </NuxtLink>
        </div>
      </div>

      <div class="">
        <button
          class="bg-DPGREEN-500 text-white capitalize bor border border-DPGREEN-500 font-semibold border-solid flex space-x-2 focus:outline-none hover:bg-DPGREEN-500 hover:duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-[12px]"
          style="min-width: 110px;"
        >
          <v-icon color="white">
            mdi-check-circle-outline
          </v-icon>

          <span>
            mark as completed
          </span>
        </button>
      </div>

      <!-- Project Information -->
      <ProjectDetailTasksModalWorkingTaskInformation />
      <!-- Description -->
      <ProjectDetailTasksModalWorkingTaskDescription />

      <!-- Checklist -->
      <ProjectDetailTasksModalWorkingTaskChecklist />

      <!-- Files -->
      <ProjectDetailTasksModalWorkingTaskFiles />

      <!-- History -->
      <ProjectDetailTasksModalWorkingTaskHistory />

      <!-- Time Logs -->
      <ProjectDetailTasksModalWorkingTaskTimeLogs />

      <!-- Discussion -->
      <ProjectDetailTasksModalWorkingTaskDiscussion />

      <!-- Editor -->
      <ProjectDetailTasksModalWorkingTaskEditor />
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
    const { menu } = workingTask();

    return { menu };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
