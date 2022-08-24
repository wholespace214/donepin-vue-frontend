<template>
  <Members />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";
import useGroupSettings from "~/controller/FirstSettings/GroupSettings";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";
import useGeneralFeatures from "~/controller/GeneralFeatures";
export default defineComponent({
  setup() {
    const { skeletonLoader } = useGeneralFeatures();

    const { fetchGroup } = useGroupSettings();

    const { fetchMembers } = useMembersSettings();

    skeletonLoader.value = true;
    useAsync(() => {
      fetchMembers("").then((res) => {
        fetchGroup();
      });
    });
  },

  head: {
    title: "Members",
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
