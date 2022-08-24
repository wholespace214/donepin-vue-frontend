<template>
  <Div id="content" class="p-5">
    <Div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <H1 class="text-lg font-bold">Modules</H1>
      </Div>
    </Div>

    <Div class="w-full flex flex-col space-y-4">
      <Div class="w-1/2 flex flex-col space-y-2">
        <Div
          class="flex w-full items-center justify-between"
          v-for="(data, index) in allModule"
          :key="index"
        >
          <Div class="flex space-x-2">
            <img src="~/assets/images/icon-header-team.svg" class="mr-2" />
            <p class="pb-0 mb-0 capitalize text-lg font-medium">{{ data }}</p>
          </Div>

          <Div>
            <!-- :dense="ipadUpSize == true ? false : true" dense noted -->
            <v-switch dense color="rgba(145, 201, 89,1)" inset></v-switch>
          </Div>
        </Div>
      </Div>
    </Div>

    <!-- This is Modal -->
    <DashboardModalFilter
      @closeFilter="filterModal = !filterModal"
      :openFilter="filterModal"
      :dataFilter="projectFilter"
    />

    <ProjectModalAddProject
      :openAddProject="openAddProject"
      @closeAddProject="openAddProject = !openAddProject"
    />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";
export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const openAddProject = ref(false);

    const { projectFilter } = allFilter();

    const allModule = ref(["team", "attendance", "work", "finance"]);

    return {
      openAddProject,
      filterModal,
      projectFilter,
      allModule
    };
  }
});
</script>
