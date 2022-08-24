<template>
  <div id="history" class="pb-4 border-b border-gray-300">
    <p class="font-bold text-sm capitalize">history</p>

    <div class="flex w-full flex-col space-y-2">
      <div
        v-for="(data, index) in history"
        :key="index"
        class="flex items-center p-1 rounded-md justify-between"
      >
        <p class="mb-0 pb-0 capitalize" v-text="data.text"></p>
        <p class="mb-0 pb-0 capitalize" v-text="data.date"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup(props) {
    const { history } = workingTask();

    return {
      history
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
