<template>
  <Div id="content" class="">
    <H1 class="text-lg font-bold">Language</H1>

    <div class="w-full flex-col flex  mt-5 items-center" id="head">
      <div class="w-full flex border-b py-2 justify-between">
        <div class="flex space-x-4 capitalize justify-between">
          <span class="p-2 w-24">language</span>
          <span class="p-2 w-24">code</span>
        </div>

        <div class="flex space-x-4 capitalize justify-between">
          <span class="p-2 w-24">status</span>
          <span class="p-2 pr-0 text-end w-24">actions</span>
        </div>
      </div>

      <div class="w-full flex border-b py-2 justify-between">
        <div class="flex space-x-4 capitalize justify-between">
          <span class="p-2 w-24">arabic</span>
          <span class="p-2 w-24">AR</span>
        </div>

        <div class="flex space-x-4 capitalize justify-between">
          <div class="p-2 w-24">
            <span
              class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500"
            >
              active
            </span>
          </div>
          <div class="p-2 pr-0 w-24 flex justify-end">
            <div class="relative flex items-center">
              <button @click="edit = !edit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </button>

              <Div
                v-show="edit"
                @click="edit = false"
                class="fixed inset-0 h-full w-full z-10"
              ></Div>
              <Div
                v-show="edit"
                class="absolute bg-white dp-shadow right-8 top-3 rounded-md z-20"
              >
                <Span
                  @click="openModal = !openModal"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                </Span>
                <Span
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img
                    src="@/assets/images/icon-delete.svg"
                    class="mr-2"
                  />delete
                </Span>
              </Div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full mt-5">
      <div class="flex w-32 items-center cursor-pointer">
        <v-icon color="rgba(165, 210, 118, 1)">
          mdi-plus
        </v-icon>
        <p class="mb-0 capitalize text-DPGREEN-400 font-semibold text-sm">
          Add language
        </p>
      </div>
    </div>

    <!-- Modal part -->

    <AdminSettingsLanguageModalActionLanguage
      :openModalLanguage="openModal"
      @closeModalLanguage="openModal = !openModal"
    />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const edit = ref(false);

    const openModal = ref(false);

    return { edit, openModal };
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
