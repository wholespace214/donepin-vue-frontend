<template>
  <div id="content" class="p-5  min-h-screen">
    <div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div class="flex space-x-4 w-1/2">
          <button
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            Add Tasks
          </button>
          <button
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            Add section
          </button>
        </div>

        <div class="flex">
          <!-- This is form search -->
          <div class="flex flex-row" id="select">
            <div class="hidden xl:block w-32 mx-2 bg-white rounded-md">
              <div class="focus-within:text-DPGREY-400 relative">
                <input
                  readonly
                  placeholder="Today"
                  class="dp-shadow capitalize w-32 cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                />

                <span class="absolute flex inset-y-0 items-center right-0 pr-2">
                  <!-- <button class="p-1">
                    <v-icon small color="ARROWCOLOR">
                      mdi-close //Button close don't deleted
                    </v-icon>
                  </button> -->
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <img
                      class="w-3 h-3"
                      src="~assets/images/icon-arrow-down.svg"
                      alt=""
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-row" id="select">
            <div class="hidden xl:block w-32 mx-2 bg-white rounded-md">
              <div class="focus-within:text-DPGREY-400 relative">
                <input
                  readonly
                  placeholder="Week"
                  class="dp-shadow capitalize w-32 cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                />

                <span class="absolute flex inset-y-0 items-center right-0 pr-2">
                  <!-- <button class="p-1">
                    <v-icon small color="ARROWCOLOR">
                      mdi-close
                    </v-icon>
                  </button> -->
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <img
                      class="w-3 h-3"
                      src="~assets/images/icon-arrow-down.svg"
                      alt=""
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProjectDetailTimelineCalendar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const openAddTask = ref(false);

    const openEditTask = ref(false);

    const openWorkingTask = ref(false);

    const dynamicTaskMode = ref("list");

    const dynamicButtonTaskClass = (currentMode: string) =>
      currentMode == dynamicTaskMode.value
        ? "bg-DPGREEN-500 text-white"
        : "hover:text-white duration-200 hover:bg-DPGREEN-500";

    const switchTaskMode = (mode: string) => (dynamicTaskMode.value = mode);

    return {
      openAddTask,
      filterModal,
      openEditTask,
      openWorkingTask,
      dynamicTaskMode,
      switchTaskMode,
      dynamicButtonTaskClass
    };
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
