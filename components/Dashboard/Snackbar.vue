<template>
  <v-snackbar
    v-model="openSnackbar"
    :right="right"
    :left="left"
    :top="top"
    :bottom="bottom"
    :color="statusColor"
    :timeout="2000"
  >
    <div class="flex space-x-2 items-center justify-between w-full">
      <p class="mb-0 font-semibold text-sm ">
        {{ message }}
      </p>

      <v-btn @click="openSnackbar = !openSnackbar" :color="buttonColor" icon>
        <v-icon> mdi-close-circle</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  props: ["right", "left", "bottom", "top"],
  setup() {
    const { openSnackbar, message, snackbarStatus } = useGeneralFeatures();

    const statusColor = computed(() => {
      switch (snackbarStatus.value) {
        case "error":
          return "error";
        case "success":
          return "rgba(165, 210, 118, 1)";
        default:
          return "";
      }
    });

    const buttonColor = computed(() =>
      snackbarStatus.value == "" ? "rgba(165, 210, 118, 1)" : "white"
    );

    return { openSnackbar, message, statusColor, buttonColor };
  }
});
</script>
