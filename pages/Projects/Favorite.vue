<template>
  <Project />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {},

  head: {
    title: "Projects",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  layout: "DashboardProject"
});
</script>

<style></style>
