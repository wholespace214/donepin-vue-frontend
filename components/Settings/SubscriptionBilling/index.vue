<template>
  <Div id="content" class="p-5">
    <Div
      v-if="changePlan == false"
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div class="flex space-x-4 w-1/2">
          <H1 class="text-lg font-bold">Subscription</H1>
          <button
            @click="changePlan = !changePlan"
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            style="min-width: 110px;"
          >
            Change plan
          </button>
        </div>
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
                <input
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

    <Div v-if="changePlan == false" class="flex flex-col space-y-5">
      <SettingsSubscriptionBillingTableSubscription />

      <SettingsSubscriptionBillingTableBilling />
    </Div>

    <Div v-else class="mt-5">
      <SettingsSubscriptionBillingChangePlan />
    </Div>

    <!-- This is Modal -->
    <DashboardModalFilter
      @closeFilter="filterModal = !filterModal"
      :openFilter="filterModal"
      :dataFilter="projectFilter"
    />

    <SettingsWorkspaceModalAddWorkspace
      :openAddWorkspace="openAddWorkspace"
      @closeAddWorkspace="openAddWorkspace = !openAddWorkspace"
    />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";
export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const openAddWorkspace = ref(false);

    const { projectFilter } = allFilter();

    const changePlan = ref(false);

    return {
      openAddWorkspace,
      changePlan,
      filterModal,
      projectFilter
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
