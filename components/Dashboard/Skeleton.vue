<template>
  <div class="flex flex-col space-y-2">
    <v-skeleton-loader
      v-for="data in amount"
      :key="data"
      :type="type"
    ></v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["type", "amount"]
});
</script>
