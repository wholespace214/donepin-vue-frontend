<template>
  <v-progress-linear
    absolute
    :active="loading"
    :indeterminate="loading"
    top
    class="rounded-b-0"
    color="rgba(145, 201, 89,1)"
  ></v-progress-linear>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  setup() {
    const { loading } = useGeneralFeatures();

    return { loading };
  }
});
</script>

<style></style>
