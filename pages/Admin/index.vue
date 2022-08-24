<template>
  <Admin />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    return {};
  },

  head: {
    title: "Admin",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  layout: "DashboardAdmin"
});
</script>

<style></style>
