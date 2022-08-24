<template>
  <div id="description" class="">
    <p class="font-bold text-sm">Description</p>
    <p class="leading-relaxed font-light text-[14px]" v-text="description"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup(props) {
    const { description } = workingTask();

    return {
      description
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
