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
        <H1 class="text-lg font-bold">Current Workspace Settings</H1>
      </Div>
    </Div>

    <Div class="w-full flex flex-col space-y-4">
      <Div class="flex space-x-6  justify-between">
        <Div class="w-43">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Invoice"
          ></v-text-field>
        </Div>
        <Div class="w-24 flex capitalize space-y-3 flex-col">
          <H1 class="text-small capitalize">
            plan
          </H1>
          <Span class="text-md font-bold">
            free
          </Span>
        </Div>
        <Div class="w-43">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Default Language"
          ></v-text-field>
        </Div>
        <Div class="w-43">
          <v-text-field
            color="rgba(165, 210, 118, 1)"
            label="Display"
          ></v-text-field>
        </Div>
      </Div>

      <!-- Time Zone field -->
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <H1 class="text-lg font-bold">Time & Zone</H1>
      </Div>
      <Div class="flex space-x-6  justify-between">
        <Div class="w-43">
          <v-select
            label="Default Timezone"
            color="rgba(165, 210, 118, 1)"
          ></v-select>
        </Div>

        <Div class="w-43">
          <v-select
            label="Starting day"
            color="rgba(165, 210, 118, 1)"
          ></v-select>
        </Div>
        <Div class="w-43">
          <v-select
            label="Data Format"
            color="rgba(165, 210, 118, 1)"
          ></v-select>
        </Div>
        <Div class="w-43">
          <v-select
            label="Time Format"
            color="rgba(165, 210, 118, 1)"
          ></v-select>
        </Div>
      </Div>

      <!-- Display field -->
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="display"
      >
        <H1 class="text-lg font-bold">Display</H1>
      </Div>
      <Div class="flex space-x-6  justify-between">
        <Div class="w-43">
          <v-select label="Display" color="rgba(165, 210, 118, 1)"></v-select>
        </Div>
      </Div>
    </Div>

    <Div class="w-full mt-5">
      <div class="flex space-x-3 justify-end mt-5" id="bottom">
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px;"
        >
          Done
        </button>
      </div>
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

    return {
      openAddProject,
      filterModal,
      projectFilter
    };
  }
});
</script>
