<template>
  <Div id="content" class="p-5">
    <Div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <DashboardSnackbar :right="true" />
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <H1 class="text-lg font-bold">Add Invoice</H1>
        <Div class="flex">
          <!-- This is form search -->
          <Div class="flex flex-row" id="search">
            <Div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <Div
                class="focus-within:text-DPGREY-400 relative text-DPGREY-400"
              >
                <Span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <Button
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
                  </Button>
                </Span>
                <Input
                  type="text"
                  class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </Div>
            </Div>

            <Button
              class="focus:outline-none block xl:hidden relative"
              @click="filterModal = !filterModal"
            >
              <img src="@/assets/images/icon-settings.svg" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>

    <FinanceInvoiceForm />

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
