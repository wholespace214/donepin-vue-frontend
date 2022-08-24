<template>
  <div class="flex flex-col">
    <!-- This is table head -->

    <div class="flex justify-between" id="table-head">
      <div class="flex justify-between">
        <div class="flex items-end p-2 w-60">
          <span class="text-small capitalize">Project</span>
        </div>
        <div
          v-for="(data, index) in tableHead"
          :key="index"
          class="p-2 md:flex md:items-end hidden"
          :class="data.class"
        >
          <span class="text-small capitalize">
            {{ data.text }}
          </span>
        </div>
      </div>
      <div class="flex items-end p-2">
        <span class="text-small">Actions</span>
      </div>
    </div>

    <div class="" id="table-body">
      <draggable v-model="content">
        <div
          v-for="(data, index) in content"
          :key="index"
          class="bg-white flex items-center hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-lg"
        >
          <div class="flex justify-between" id="table-left">
            <div class="flex items-center  p-2 w-60">
              <div class="flex items-center justify-between">
                <div class="relative">
                  <v-avatar
                    color="REDCOLOR"
                    size="40"
                    class="capitalize font-weight-bold text-body-1 white--text"
                  >
                  </v-avatar>
                </div>
              </div>

              <div
                class="flex-col cursor-pointer hidden justify-center p-2 w-full md:flex"
              >
                <span
                  class="mb-0 capitalize text-sm font-semibold"
                  v-text="data.tasks.tasks"
                >
                </span>
                <p
                  class="font-light capitalize mb-0"
                  v-text="data.tasks.favoriteProject"
                ></p>
              </div>
            </div>
            <div class="p-2 w-40 md:flex md:items-center hidden">
              <div class="flex flex-wrap">
                <div class="flex justify-between p-0 pr-1 pb-1">
                  <div class="text-sm capitalize" v-text="data.member"></div>
                </div>
              </div>
            </div>
            <div class="w-32 md:flex flex-col md:justify-center p-2 hidden">
              <span class="mb-0 capitalize text-sm font-normal">
                {{ data.start.time }}
              </span>
              <p class="font-light mb-0">
                {{ data.start.date }}
              </p>
            </div>
            <div class="w-32 md:flex flex-col md:justify-center p-2 hidden">
              <span class="mb-0 capitalize text-sm font-normal">
                {{ data.start.time }}
              </span>
              <p class="font-light mb-0">
                {{ data.start.date }}
              </p>
            </div>
            <div class="w-32 md:flex flex-col md:justify-center p-2 hidden">
              <span class="mb-0 capitalize text-sm font-normal">
                {{ data.hours }}
              </span>
            </div>
          </div>
          <div class="flex items-center justify-center p-2" id="table-right">
            <div
              @click="data.edit = !data.edit"
              class="relative flex items-center"
            >
              <button class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </button>
              <Div
                v-show="data.edit"
                @click="data.edit = !data.edit"
                class="fixed cursor-pointer inset-0 h-full w-full z-10"
              ></Div>
              <Div
                v-show="data.edit"
                class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20"
              >
                <Span
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
      </draggable>

      <div class="w-[62%] py-2 flex justify-end">
        <p class="mb-0  capitalize text-sm font-semibold">
          15:15
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import draggable from "vuedraggable";
import TableTimeLogs from "~/data_component/Projects/TableTimeLogs";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, content } = TableTimeLogs();

    return {
      tableHead,
      content
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
