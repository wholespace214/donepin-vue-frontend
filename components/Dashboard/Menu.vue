<template>
  <div class="bg-white dp-shadow px-5" id="menu">
    <div class="flex flex-col">
      <div class="flex">
        <NuxtLink
          v-for="data in menu"
          :key="data.text"
          :to="data.link"
          :class="routePath == data.link ? 'border-DPGREEN-500' : 'border-transparent'"
          class="capitalize font-semibold text-sm cursor-pointer border-b-2 focus-within:outline-none focus:outline-none hover:border-DPGREEN-500 hover:border-b-2 hover:duration-200 mr-5 pb-1"
          v-text="data.text"
        >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import allMenu from "~/data_component/Dashboard/AllMenu";

export default defineComponent({
  props: ["menu"],
  setup() {
    const { routePath } = allMenu();

    return { routePath };
  },
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
