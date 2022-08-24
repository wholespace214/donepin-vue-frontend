<template>
  <Attendance />
</template>

<script lang="ts">
import { defineComponent, useAsync } from "@nuxtjs/composition-api";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";

export default defineComponent({
  setup() {
    const { fetchMembers } = useMembersSettings();
    useAsync(() => {
      fetchMembers(1);
    });

    return {};
  },

  head: {
    title: "Attendance",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },

  layout: "DashboardAttendance",
});
</script>

<style></style>
