<template>
  <footer class="bg-opacity-5 bg-white border-gray-800 border-solid border-t">
    <button
      @click="router.push('/settings')"
      class="flex focus:outline-none hover:-translate-x-1 hover:-translate-y-1 hover:bg-opacity-5 hover:bg-white hover:duration-200 items-center px-3 py-2 text-left text-white transform transition w-full"
    >
      <img src="~/assets/images/icon-sidebar-settings.svg" class="p-2" />
      Settings
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const router = useRouter();

    return {
      router
    };
  }
});
</script>

<style scoped>
a {
  color: white;
}
</style>
