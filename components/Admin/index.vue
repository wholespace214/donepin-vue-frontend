<template>
  <div id="content" class="p-5">
    <H1 class="text-lg font-bold">Super Admin Dashboard</H1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) ease;
}
</style>
