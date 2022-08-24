<template>
  <!-- Modal Add Members in -->
  <div
    :class="openModalAddMember ? ' -translate-x-0' : 'translate-x-full'"
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
    <div id="top" class="flex flex-col">
      <div class="flex items-center justify-between mb-3" id="title">
        <p class="font-bold mb-0 pb-0">Invite a New Member</p>
        <button @click="toggleModal" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>
      <div v-if="formNewMember" class="flex flex-col mt-5 space-y-10" id="select">
        <div class="mt-0">
          <ValidationObserver ref="form">
            <ValidationProvider v-for="(data, index) in formNewMember" :key="index" :name="data.label" :rules="data.rules" v-slot="{ errors }">
              <template v-if="data.hasOwnProperty('autoComplete')">
                <v-autocomplete
                  v-if="data.label !== 'Group'"
                  :items="allUserList"
                  :label="data.label"
                  :error-messages="errors"
                  item-color="SWITCHCOLOR"
                  item-text="email"
                  item-value="_id"
                  color="rgba(165, 210, 118, 1)"
                  clearable
                  v-model="data.value"
                  eager
                >
                </v-autocomplete>
                <v-autocomplete
                  v-else
                  :items="allGroup"
                  item-color="SWITCHCOLOR"
                  item-text="groupName"
                  chips
                  multiple
                  item-value="id"
                  :label="data.label"
                  :error-messages="errors"
                  color="rgba(165, 210, 118, 1)"
                  v-model="data.value"
                  eager
                >
                  <template v-slot:selection="data">
                    <v-chip v-bind="data.attrs" :input-value="data.selected" close color="rgba(145, 201, 89,1)" text-color="white" @click="data.select" @click:close="removeGroup(data.item)">
                      {{ data.item.groupName }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.groupName"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </template>

              <v-text-field v-else :error-messages="errors" color="rgba(165, 210, 118, 1)" class="mt-0" :label="data.label" :type="data.formType" v-model="data.value"></v-text-field>
            </ValidationProvider>
          </ValidationObserver>
        </div>

        <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
          <v-select
            :items="allRoles"
            v-model="memberJobRoles"
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            item-text="role"
            item-value="_id"
            label="Roles"
            dense
          ></v-select>
          <v-select v-model="memberStatus" :items="statusValue" class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable label="Status" dense></v-select>
        </div>

        <div class="mt-0 w-full" id="member-attendance">
          <v-checkbox v-model="addMemberAttendance" class="capitalize" label="add member to attendance" color="rgba(165, 210, 118, 1)"></v-checkbox>
        </div>

        <!-- Attendance -->

        <div class="mt-0" v-show="addMemberAttendance">
          <MembersToAttendance />

          <!-- <div class="mt-0" id="vacation-reset">
            <v-checkbox v-model="addVacationReset" class="capitalize" label="add vacation reset" color="rgba(165, 210, 118, 1)"></v-checkbox>
          </div> -->

          <!-- <div v-show="addVacationReset" class="grid mt-5 grid-cols-2 gap-5">
            <div class="flex flex-col space-y-5">
              <v-select
                class="capitalize"
                color="rgba(145, 201, 89,1)"
                item-color="DPGREEN-500"
                clearable 
                :items="month"
                label="Vacation Reset"
                dense
              ></v-select>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="toggleModal"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="checkValidation"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useAddTeamMember from "~/controller/TeamMember/AddTeamMember";
import allFilter from "~/data_component/Dashboard/AllFilter";
import TableGroups from "~/data_component/Group/TableGroups";
import addTeamMembers from "~/data_component/Members/AddTeamMembers";
import TableRoles from "~/data_component/Roles/TableRoles";

export default defineComponent({
  setup() {
    const form = ref();

    const { allGroup } = TableGroups();

    const { allRoles } = TableRoles();

    const { month, addMemberAttendance, addVacationReset, formNewMember, openModalAddMember, memberStatus, statusValue, memberJobRoles } = addTeamMembers();

    const { validation } = useGeneralFeatures();

    const { teamMembersFilter, toCapitalized } = allFilter();

    const { allUserList, toggleModal, submit, removeGroup } = useAddTeamMember();

    const filter = reactive([teamMembersFilter[1], teamMembersFilter[2]]);

    const checkValidation = () => {
      validation(form).then((response: boolean) => {
        if (response) submit();
      });
    };

    return {
      formNewMember,
      addMemberAttendance,
      filter,
      memberStatus,
      removeGroup,
      statusValue,
      toggleModal,
      openModalAddMember,
      form,
      memberJobRoles,
      month,
      addVacationReset,
      toCapitalized,
      allGroup,
      allUserList,
      checkValidation,
      allRoles,
    };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
