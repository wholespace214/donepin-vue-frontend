<template>
  <SettingsModule />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {},

  head: {
    title: "Settings",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  layout: "DashboardSettings"
});
</script>

<style></style>
