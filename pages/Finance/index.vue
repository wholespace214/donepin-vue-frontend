<template>
  <Finance />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},

  head: {
    title: "Finance",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },

  layout: "DashboardFinance",
});
</script>

<style></style>
