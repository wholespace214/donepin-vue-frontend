<template>
  <div id="time-logs" class="pb-4 border-b border-gray-300">
    <p class="font-bold text-sm capitalize">time logs</p>

    <div class="flex w-full flex-col space-y-2">
      <div
        v-for="(data, index) in timeLogs"
        :key="index"
        class="flex items-center p-1 rounded-md justify-between"
      >
        <div class="flex items-center space-x-3.5 w-auto">
          <div
            class="avatar text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"
          >
            kt
          </div>
          <p
            class="mb-0 pb-0 font-bold text-sm capitalize"
            v-text="data.user"
          ></p>
        </div>

        <p class="mb-0 pb-0 capitalize" v-text="data.time"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup() {
    const { timeLogs } = workingTask();

    return {
      timeLogs
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
