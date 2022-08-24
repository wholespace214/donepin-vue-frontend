<template>
  <div id="content" class="p-5">
    <DashboardSnackbar :right="true" />
    <DashboardModalDeletes />
    <div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div>
          <button
            @click="
              isRoleModalShown = true;
              modalType = 'add';
              selectedRoles = undefined;
            "
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
            <img
              src="~/assets/images/icon-add-user.svg"
              class="bg-DPGREEN-200 mr-1 p-1 rounded-lg w-5"
            />
            Add Role
          </button>
        </div>
      </div>
    </div>

    <!-- Close Edit Group from here  -->
    <RolesTableContent />

    <!-- This is All Provide Modal -->
    <RolesModalRoles />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import TableRoles from "~/data_component/Roles/TableRoles";

export default defineComponent({
  setup() {
    const { isRoleModalShown, modalType, selectedRoles } = TableRoles();

    const deleted = ref(true);

    return {
      isRoleModalShown,
      modalType,
      deleted,
      selectedRoles,
    };
  },
});
</script>
