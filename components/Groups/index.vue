<template>
  <div id="content" class="p-5">
    <DashboardSnackbar :right="true" />
    <DashboardModalDeletes />

    <div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <div>
          <button
            @click="openModal"
            class="
              bg-white
              bor
              border border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              focus:outline-none
              hover:bg-DPGREEN-500 hover:duration-200 hover:text-white
              items-center
              px-3
              py-2
              rounded-lg
              text-xs
            "
            style="min-width: 110px"
          >
            <img src="~/assets/images/icon-add-user.svg" class="bg-DPGREEN-200 mr-1 p-1 rounded-lg w-5" />
            Add Group
          </button>
        </div>

        <div class="flex flex-row" id="search">
          <div class="hidden bg-white md:block md:mr-4 rounded-md">
            <div class="focus-within:text-DPGREY-400 relative text-DPGREY-400">
              <span class="absolute flex inset-y-0 items-center left-0 pl-1"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Close Edit Group from here  -->
    <GroupsTableContent />

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="teamMembersFilter" />

    <!-- This is All Provide Modal -->
    <GroupsModal />
    <!-- <GroupsModalAddGroup />
    
    <GroupsModalEditGroup /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";
import dataGroupModal from "~/data_component/Group";

export default defineComponent({
  setup() {
    const { addGroup, modal, modalStatus, group, modalTitle } = dataGroupModal();
    const filterModal = ref(false);
    const { teamMembersFilter } = allFilter();

    const openModal = () => {
      modalTitle.value = "Add New Group";

      modalStatus.value = "addGroup";

      group.value = { name: "" };

      modal.value = !modal.value;
    };

    const dialog = ref(true);
    return {
      openModal,
      dialog,
      filterModal,
      teamMembersFilter,
    };
  },
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
