<template>
  <Groups />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";
import useGroupSettings from "~/controller/FirstSettings/GroupSettings";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  setup(pros, context) {
    const { skeletonLoader } = useGeneralFeatures();

    const { fetchGroup } = useGroupSettings();

    const { fetchMembers } = useMembersSettings();

    skeletonLoader.value = true;
    useAsync(() => {
      fetchMembers("").then((res) => {
        fetchGroup();
      });
    });
    return {};
  },

  head: {
    title: "Groups",
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
