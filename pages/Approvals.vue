<template>
  <Aprovals />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {},

  head: {
    title: "Aprovals",
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
