<template>
  <div
    :class="openModalLanguage ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="add-new-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between items-center mb-3" id="title">
        <p class="font-bold capitalize">Add / Edit language</p>
        <button @click="$emit('closeModalLanguage')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-10" id="select">
        <v-text-field
          color="rgba(165, 210, 118, 1)"
          class="mt-0"
          label="Language name"
          type="text"
        ></v-text-field>
      </div>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-text-field
          class="pt-0 mt-0"
          label="Code"
          color="rgba(145, 201, 89,1)"
        ></v-text-field>
        <v-select
          class="capitalize"
          color="rgba(145, 201, 89,1)"
          item-color="DPGREEN-500"
          clearable
          label="Status"
          dense
        ></v-select>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px;"
        @click="$emit('closeModalLanguage')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px;"
        @click="$emit('closeModalLanguage')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    openModalLanguage: Boolean
  },
  setup() {}
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
