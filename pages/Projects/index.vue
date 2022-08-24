<template>
  <Project />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  },

  head: {
    title: "Projects",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },

  layout: "DashboardProject",
});
</script>

<style></style>
