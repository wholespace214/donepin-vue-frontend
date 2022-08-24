<template>
  <div id="content">
    <div class="w-full flex justify-between" id="table-head">
      <div class="" id="left-side">
        <span class="text-small capitalize flex px-1 items-center font-normal">
          Name
        </span>
      </div>

      <div class="flex space-x-5" id="right-side">
        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          size
        </span>
        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          file type
        </span>
        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          uploaded
        </span>

        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          date
        </span>
      </div>
    </div>

    <div
      v-for="data in 4"
      :key="data"
      class="bg-white flex hover:bg-gray-300 rounded-lg hover:bg-opacity-25 justify-between my-1"
      id="table-body"
    >
      <div class="" id="left-side">
        <div id="name" class="flex space-x-4 items-center p-2">
          <div class="flex items-center justify-between">
            <img src="~assets/images/ms-word-icon.svg" alt="" />
          </div>

          <div class="flex-col justify-center p-2 w-full flex">
            <span class="mb-0 capitalize text-sm font-semibold">
              my files.docx
            </span>
            <div class="flex text-DPGREEN-500 capitalize space-x-4">
              <span class="cursor-pointer">
                preview
              </span>
              <span class="cursor-pointer">
                download
              </span>
              <span class="cursor-pointer text-red-500">
                delete
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-5" id="right-side">
        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          185.93 KB
        </span>
        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          PDF
        </span>
        <span
          class="text-small text-DPGREEN-500 w-24 capitalize flex px-1 items-center font-normal"
        >
          Mike
        </span>

        <span
          class="text-small w-24 capitalize flex px-1 items-center font-normal"
        >
          31.12.2021
        </span>
      </div>
    </div>
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
