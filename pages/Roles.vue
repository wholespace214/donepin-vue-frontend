<template>
  <Roles />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useRolesSettings from "~/controller/FirstSettings/RolesSettings";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  setup(pros, context) {
    const { skeletonLoader } = useGeneralFeatures();

    const { asyncGetRoles } = useRolesSettings();

    skeletonLoader.value = true;
    asyncGetRoles().finally(() => {
      skeletonLoader.value = false;
    });

    return {};
  },
  head: {
    title: "Roles",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },

  layout: "DashboardTeam",
});
</script>

<style></style>
