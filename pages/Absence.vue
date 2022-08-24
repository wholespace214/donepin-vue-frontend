<template>
  <Absence />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    return {};
  },

  head: {
    title: "Absence",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  layout: "DashboardAttendance"
});
</script>

<style></style>
