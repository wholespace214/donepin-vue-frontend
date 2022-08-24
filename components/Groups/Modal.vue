<template>
  <div
    :class="modal ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-96
      fixed
      flex flex-col
      h-screen
      justify-between
      modal
      overflow-y-auto
      pb-20
      pt-4
      px-5
      right-0
      shadow-md
      top-0
      z-30
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="add-new-members"
  >
    <DashboardProgressLinear />
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold mb-0 pb-0">{{ modalTitle }}</p>
        <button @click="closeModal" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <template v-if="group">
        <div class="flex flex-col space-y-10" id="select">
          <ValidationObserver ref="form">
            <ValidationProvider rules="required" name="name" v-slot="{ errors }">
              <v-text-field color="rgba(165, 210, 118, 1)" class="mt-0" label="Group Name" type="text" v-model="group.name" :error-messages="errors"></v-text-field>
            </ValidationProvider>
          </ValidationObserver>
        </div>

        <div class="w-full">
          <div class="w-full mt-5">
            <div class="w-full mt-5 mb-5" v-if="modalStatus == 'editGroup'">
              <p v-if="group.allMember.length > 0" class="text-sm font-semibold text-[#6A6A6A]">Current members in this department</p>

              <div class="flex flex-col">
                <div v-for="(dataMember, indexMember) in group.allMember" :key="indexMember" class="flex wrapper-members justify-between items-center">
                  <div id="members-info" class="flex items-center">
                    <div class="relative">
                      <v-avatar color="DPYELLOW" class="capitalize font-weight-medium text-h6 white--text text-capitalize"
                        >{{ getInitials(dataMember && dataMember.firstName) }}{{ getInitials(dataMember && dataMember.lastName) }}</v-avatar
                      >

                      <div class="absolute top-[35px] left-[34px]">
                        <div class="h-3 w-3 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                      </div>
                    </div>
                    <v-list-item two-line>
                      <v-list-item-content class="pa-0">
                        <v-list-item-title class="DPGREY-600--text"> {{ dataMember && dataMember.firstName }} {{ dataMember && dataMember.lastName }} </v-list-item-title>
                        <v-list-item-subtitle class="text-body-2 DPGREY-600--text font-weight-regular">
                          {{ dataMember && dataMember.email }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                  <div>
                    <span @click="removeExistingMember(indexMember, dataMember)" class="cursor-pointer">
                      <img src="@/assets/images/trash-remove.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <template v-if="newMembers.length > 0">
              <v-autocomplete
                v-for="(data, index) in newMembers"
                :key="index"
                hide-no-data
                hide-selected
                :items="members"
                color="rgba(165, 210, 118, 1)"
                class="mt-0"
                :search-input.sync="search"
                item-color="DPGREEN-500"
                item-text="memberName"
                item-value="memberId"
                eager
                @click:clear="removeMembers(index)"
                v-model="data.member"
                clearable
                label="Add Members In this Group"
              ></v-autocomplete>
            </template>
            <!-- for all condition -->
            <div class="w-full">
              <div class="flex w-1/2 items-center cursor-pointer" @click="addMembers">
                <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
                <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add member</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="modal = !modal"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="checkingForm"
      >
        Done
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useGroupSettings from "~/controller/FirstSettings/GroupSettings";
import useAddGroupController from "~/controller/Group/groupAddController";
import useGroupEditController from "~/controller/Group/groupEditController";
import dataGroupModal from "~/data_component/Group";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useGroupUpdateMember from "~/controller/Group/groupUpdateMember";

export default defineComponent({
  setup() {
    const form = ref();

    const search = ref();

    const members = ref<any[]>([]);

    const newArr = ref<any[]>([]);

    const { submitEditGroup } = useGroupEditController();
    const { fetchGroup } = useGroupSettings();

    const { removeExistingMember } = useGroupUpdateMember();

    const { addGroup, group, newMembers, modal, modalStatus, modalTitle } = dataGroupModal();

    console.log("groupgroup", group);

    const { validation } = useGeneralFeatures();

    const { allMember, allUserList } = tableTeamMembers();

    const { addNewGroup, addMember, removeMembers } = useAddGroupController();

    const checkingForm = () => {
      validation(form).then((res: any) => {
        if (res) {
          modalStatus.value == "addGroup" ? addNewGroup() : submitEditGroup();
        }
      });
    };

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

    const closeModal = () => {
      modal.value = !modal.value;

      if (modal.value == false)
        setTimeout(() => {
          newMembers.value = [];
          group.value = "";
        }, 200);
    };

    watch(search, (newData) => {
      if (newData) {
        allMember.value.forEach((element: any) => {
          let getall = element.memberName?.toLowerCase().includes(newData?.toLowerCase());
          if (getall === true) {
            members.value.push(element);
          }
        });
      } else {
        members.value = [];
      }
    });

    const addMembers = () => {
      addMember(newArr.value);

      // newArr.vale.push(newMembers.value);
      console.log("newARRR>>>", newArr.value);
    };

    return {
      modal,
      members,
      modalStatus,
      modalTitle,
      search,
      addGroup,
      group,
      form,
      closeModal,
      addMember,
      allUserList,
      removeExistingMember,
      checkingForm,
      allMember,
      newMembers,
      removeMembers,
      getInitials,
      addMembers,
      newArr,
    };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
