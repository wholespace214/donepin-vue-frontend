<template>
  <div class="flex flex-col">
    <!-- This is table head -->
    <div class="flex justify-between border-solid" id="table-head">
      <div class="flex">
        <div class="flex items-end p-2 w-60">
          <span class="text-small capitalize flex px-1 items-center font-normal"> Name </span>
        </div>

        <div v-for="(data, index) in tableHead" :key="index" :class="data.width" class="hidden p-2 w-48 md:flex md:items-end">
          <span class="text-small capitalize font-normal">{{ data.text }}</span>
        </div>
      </div>
      <div class="flex items-end p-2">
        <span class="text-small capitalize font-normal">Actions</span>
      </div>
    </div>

    <!-- This is table body place -->

    <DashboardSkeleton v-if="skeletonLoader" type="list-item-avatar-three-line" :amount="5" />

    <div v-else class="py-3 mt-4">
      <draggable v-model="filteredAllRoles" group="task">
        <div v-for="(data, index) in filteredAllRoles" :key="index" class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
          <div class="flex" id="table-left">
            <div id="group-name" class="flex flex-row items-center p-2 w-60">
              <div class="flex flex-col">
                <span class="text-sm capitalize font-weight-medium" v-text="data.role"></span>
                <span class="text-small">{{ data.totalMembers }} Members</span>
              </div>
            </div>

            <div id="members" class="flex-wrap hidden items-center p-2 w-48 md:flex">
              <template v-if="data.totalMembers > 5">
                <div class="flex -space-x-1 overflow-hidden">
                  <div
                    v-for="member in 5"
                    :key="member.memberId"
                    class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative ring-2 ring-white rounded-full text-white uppercase"
                  >
                    {{ member.initial }}
                  </div>

                  <div class="avatar-small bg-DPGREY-50 flex items-center justify-center relative ring-2 ring-white rounded-full text-lg font-semibold uppercase">+{{ data.totalMembers - 5 }}</div>
                </div>
              </template>

              <template v-else>
                <div class="flex -space-x-1 overflow-hidden">
                  <div
                    v-for="member in data.roleMembers"
                    :key="member.memberId"
                    class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative ring-2 ring-white rounded-full text-white uppercase"
                  >
                    {{ member.initial }}
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="flex items-center justify-center p-2" id="table-right">
            <div class="relative flex items-center">
              <template v-if="data.role !== 'Admin'">
                <button @click="data.isEdit = true" class="focus:outline-none relative">
                  <img src="~/assets/images/icon-modify.svg" />
                </button>
                <Div v-show="data.isEdit" @click="data.isEdit = false" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
                <Div v-show="data.isEdit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                  <Span
                    @click="
                      data.isEdit = false;
                      isRoleModalShown = true;
                      modalType = 'edit';
                      selectedRoles = data;
                    "
                    class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                  >
                    <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                  </Span>
                  <Span
                    class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                    @click="
                      data.isEdit = false;
                      processDelete(data._id, data);
                    "
                  >
                    <img src="@/assets/images/icon-delete.svg" class="mr-2" />delete
                  </Span>
                </Div>
              </template>
              <div v-else class="p-4">
                <span class="capitalize text-DPGREY-200"> This role can not be modified or deleted </span>
              </div>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import TableRoles from "~/data_component/Roles/TableRoles";
import draggable from "vuedraggable";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useDeleteRole from "~/controller/Roles/roleDelete";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, isRoleModalShown, selectedRoles, modalType, allRoles, filteredAllRoles } = TableRoles();

    // If the backend data is already correct, then use filteredAllRoles instead of allRoles
    const { processDelete } = useDeleteRole();
    const { skeletonLoader } = useGeneralFeatures();
    return {
      tableHead,
      filteredAllRoles,
      skeletonLoader,
      isRoleModalShown,
      modalType,
      selectedRoles,
      allRoles,
      processDelete,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
