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
      <draggable v-model="allGroup" group="task">
        <div v-for="(data, index) in allGroup" :key="index" class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
          <div class="flex" id="table-left">
            <div id="group-name" class="flex flex-row items-center p-2 w-60">
              <div class="flex flex-col">
                <span class="text-sm font-weight-medium" v-text="data.groupName"></span>
                <span class="text-small">{{ data.totalMembers }} Members</span>
              </div>
            </div>

            <div id="members" class="flex-wrap hidden items-center p-2 w-48 md:flex">
              <template v-if="data.totalMembers > 6">
                <div class="flex -space-x-1 overflow-hidden">
                  <div
                    v-for="(members, index) in data.groupMember.slice(0, 6)"
                    :key="index"
                    class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative ring-2 ring-white rounded-full text-white uppercase"
                  >
                    {{ getInitials(members.firstName) }}{{ getInitials(members.lastName) }}
                  </div>

                  <div class="avatar-small bg-DPGREY-50 flex items-center justify-center relative ring-2 ring-white rounded-full text-lg font-semibold uppercase">
                    +{{ setMemCount(data.totalMembers) }}
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="flex -space-x-1 overflow-hidden">
                  <div
                    v-for="members in data.groupMember"
                    :key="members"
                    class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative ring-2 ring-white rounded-full text-white uppercase"
                  >
                    {{ getInitials(members.firstName) }}{{ getInitials(members.lastName) }}
                    <!-- Should use initals from user -->
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="flex items-center justify-center p-2" id="table-right">
            <div class="relative flex items-center">
              <button @click="data.edit = !data.edit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </button>

              <Div v-show="data.edit" @click="data.edit = !data.edit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.edit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                <!-- @click="editProccess(data)" -->
                <Span
                  @click="openModalEdit(data)"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                </Span>
                <Span
                  @click="processDelete(data.id, data)"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-delete.svg" class="mr-2" />delete
                </Span>
              </Div>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TableGroups from "~/data_component/Group/TableGroups";
import draggable from "vuedraggable";
import dataGroupModal from "~/data_component/Group";
import useGroupEditController from "~/controller/Group/groupEditController";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useDeletedGroup from "~/controller/Group/groupDeleted";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, allGroup } = TableGroups();

    console.log("allGroup", allGroup);
    const { allUserList } = tableTeamMembers();

    const { skeletonLoader } = useGeneralFeatures();

    const { editGroup, groupCurrent, group, modal, modalStatus, modalTitle } = dataGroupModal();

    const { processDelete } = useDeletedGroup();

    const getInitials = function (name: string) {
      const parts = name?.split(" ");
      let initials = "";
      for (let i = 0; i < parts?.length; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0];
        }
      }
      return initials.toUpperCase();
    };

    const setMemCount = (data: any) => {
      if (data > 6) {
        return data - 6;
      } else {
        return data;
      }
    };

    const openModalEdit = (groupData: any) => {
      modal.value = !modal.value;

      modalStatus.value = "editGroup";

      modalTitle.value = "Edit Group";

      let allusers: any[] = getUsers(groupData);
      console.log(groupData);

      group.value = {
        name: groupData.groupName,
        _id: groupData.id,
        allMember: allusers,
        allMemberId: groupData.groupMember,
      };
    };

    const getUsers = (group: any) => {
      let allMembers: any[] = [];

      group.groupMember.forEach((element: any) => {
        let getAllUser = allUserList.value.find((user: any) => user._id == element._id);

        allMembers.push(getAllUser);
      });

      return allMembers;
    };

    return {
      tableHead,
      allGroup,
      openModalEdit,
      editGroup,
      skeletonLoader,
      processDelete,
      getInitials,
      setMemCount,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
