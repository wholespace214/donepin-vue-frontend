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
        <div class="flex space-x-3">
          <button
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 hover:duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            add time logs
          </button>
          <button
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 hover:duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            create invoice
          </button>
        </div>

        <div class="flex">
          <!-- This is form search -->
          <div class="flex flex-row" id="search">
            <div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <div
                class="focus-within:text-DPGREY-400 relative text-DPGREY-400"
              >
                <span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="h-6 text-DPGREY-200 w-4"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </div>

            <button
              class="focus:outline-none block xl:hidden relative"
              @click="filterModal = !filterModal"
            >
              <img src="@/assets/images/icon-settings.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <ProjectDetailTimeLogsTableContent />

    <!-- This is Modal -->
    <DashboardModalFilter
      @closeFilter="filterModal = !filterModal"
      :openFilter="filterModal"
      :dataFilter="projectDetailsTimelogsFilter"
    />

    <ProjectModalAddProject
      :openAddProject="openAddProject"
      @closeAddProject="openAddProject = !openAddProject"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";

export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const openAddProject = ref(false);

    const { projectDetailsTimelogsFilter } = allFilter();

    return {
      openAddProject,
      filterModal,
      projectDetailsTimelogsFilter
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
