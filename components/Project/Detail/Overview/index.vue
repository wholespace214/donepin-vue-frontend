<template>
  <div id="content" class="p-5">
    <div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div class="" id="description">
          <p class="text-lg capitalize font-semibold">
            project description
          </p>
        </div>
        <div class="flex space-x-3">
          <button
            @click="openAddProject = !openAddProject"
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 hover:duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            edit project
          </button>
        </div>
      </div>
    </div>

    <ProjectDetailOverviewContent />
    <ProjectModalAddProject
      :openAddProject="openAddProject"
      @closeAddProject="openAddProject = !openAddProject"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";


export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const openAddProject = ref(false);

    // const { filterDropdown } = MemberFilter();

    // const {
    //   elementOption,
    //   openDropdown,
    //   sizing,
    //   resetOption,
    //   checkDataActive,
    //   newValue,
    //   toggleOption,
    //   getClientPosition
    // } = useOptionSelect(filterDropdown);

    // const topPosition = (position: any) => position - 30;

    // const leftPosition = (position: any) => position - 255;

    return {
      openAddProject,
      filterModal
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
