<template>
  <div id="files" class="pb-4 border-b border-gray-300">
    <div class="flex justify-between">
      <p class="font-bold text-sm capitalize">Files</p>

      <div
        id="icon-plus"
        @click="storageModal = !storageModal"
        class="cursor-pointer"
      >
        <img src="@/assets/images/icon-plus.svg" />
      </div>

      <div
        v-show="storageModal"
        @click="storageModal = false"
        class="fixed inset-0 h-full w-full z-10"
      ></div>

      <div
        v-show="storageModal"
        class="absolute bg-white dp-shadow right-0 bottom-[60px] rounded-md w-32 z-20"
      >
        <span
          v-for="(data, index) in storageAsset"
          :key="index"
          class="border-b cursor-pointer items-center space-x-2 border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200  px-4 py-3 text-xs"
        >
          <v-icon small color="rgba(165, 210, 118, 1)" v-text="data.icon">
          </v-icon>
          <span v-text="data.text"></span>
        </span>
      </div>
    </div>

    <div class="w-full flex space-x-2">
      <img class="" src="@/assets/images/volla-phone.svg" />

      <div class="rounded-lg border flex items-center p-3">
        <img class="" src="@/assets/images/ms-word-icon.svg" />
        <p class="mb-0 pb-0 ml-3 capitalize">
          My files.docx
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup(props) {
    const { storageAsset, storageModal } = workingTask();

    return {
      storageAsset,
      storageModal
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
