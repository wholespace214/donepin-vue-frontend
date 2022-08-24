<template>
  <FinanceClient />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";
import useClientSettings from "~/controller/FirstSettings/ClientSettings";

export default defineComponent({
  setup() {
    const { fetchClient } = useClientSettings();

    useAsync(() => fetchClient());
  },

  head: {
    title: "Finance",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  layout: "DashboardFinance"
});
</script>

<style></style>
