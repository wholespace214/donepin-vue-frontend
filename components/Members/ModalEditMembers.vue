<template>
  <div
    :class="openEditMembers ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-5/12
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
    id="edit-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold">Edit Member</p>
        <button @click="$emit('closeEditMembers')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex w-full">
        <v-avatar color="DPYELLOW" size="100" class="capitalize font-weight-medium text-h4 white--text"> {{ selectedMember && selectedMember.initial }} </v-avatar>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium py-2">
              {{ selectedMember && selectedMember.memberName }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ selectedMember && selectedMember.memberEmail }}
            </v-list-item-subtitle>

            <v-list-item-teamMemberStatus>
              {{ selectedMember && selectedMember.teamMemberStatus }}
            </v-list-item-teamMemberStatus>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <img src="@/assets/images/trash-remove.svg" />
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </div>

      <div class="flex flex-col mt-4 space-y-10" id="select">
        <v-autocomplete
          color="rgba(145, 201, 89,1)"
          :items="teamMembersFilter[0].allData"
          chips
          class="capitalize"
          v-model="teamMembersFilter[0].value"
          small-chips
          label="Groups"
          item-color="DPGREEN-500"
          item-text="label"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip @click:close="remove(data.index)" close>
              {{ data.item.label }}
            </v-chip>
          </template>
        </v-autocomplete>

        <div class="grid mt-0 pt-5 grid-cols-2 gap-4">
          <v-select
            v-model="data.value"
            v-for="(data, index) in filter"
            :key="index"
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            :items="data.allData"
            :label="data"
            item-text="label"
            dense
          >
            {{ selectedMember && selectedMember.status }}
          </v-select>
        </div>

        <div class="mt-0 w-full sm:w-1/2" id="member-attendance">
          <v-checkbox class="capitalize" label="add member to attendance" color="rgba(165, 210, 118, 1)" v-model="addMemberAttendance"></v-checkbox>
        </div>

        <div>
          <!-- Attendance -->
          <MembersToAttendance :editMember="true" :openAttendance="addMemberAttendance" v-show="addMemberAttendance" />

          <!-- <div class="mt-0" id="vacation-reset">
          <v-checkbox class="capitalize" label="add vacation reset" color="rgba(165, 210, 118, 1)"></v-checkbox>
        </div> -->
          <!-- 
        <div v-show="addVacationReset" class="grid mt-5 grid-cols-2 gap-5">
          <div class="flex flex-col space-y-5">
            <v-select class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable :items="month" label="Vacation Reset" dense></v-select>
          </div>
        </div> -->
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeEditMembers')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="
          $emit('closeEditMembers');
          form();
        "
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@nuxtjs/composition-api";
import useGetGroup from "~/controller/Group/getGroup";
import useGetRoles from "~/controller/Roles/getRoles";
import allFilter from "~/data_component/Dashboard/AllFilter";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import addTeamMembers from "~/data_component/Members/AddTeamMembers";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useMembersSettings from "~/controller/FirstSettings/MembersSettings";

import useMemberApis from "~/api/members";

export default defineComponent({
  props: {
    openEditMembers: Boolean,
  },

  setup() {
    const { selectedMember, allMember, team } = tableTeamMembers();

    console.log("selectedMember,", selectedMember);
    const { fetchMembers } = useMembersSettings();
    const { statusValue, addMemberAttendance, hoursPerWeek, yearlyVacation, workingTime } = addTeamMembers();
    const { EditMember } = useMemberApis();

    const month = ref(["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]);
    const { teamMembersFilter, toCapitalized } = allFilter();

    const groups = ref([]);
    const filter = reactive([teamMembersFilter[1], teamMembersFilter[2]]);

    const addVacationReset = ref(false);

    const remove = (index: number) => {
      if (index >= 0) teamMembersFilter[0].value.splice(index, 1);
    };
    const { validation } = useGeneralFeatures();

    const { getAllGroups } = useGetGroup();
    const { getDataRoles } = useGetRoles();

    getAllGroups(1).then((res: any) => {
      const updatedGroup = res.data.map((groups: any) => {
        let obj = {
          label: groups.groupName,
          value: groups._id,
        };
        return obj;
      });
      teamMembersFilter[0].allData = updatedGroup;
    });
    getDataRoles().then((res: any) => {
      const updatedRole = res.data.map((roles: any) => {
        let obj = {
          label: roles.role,
          value: roles._id,
        };
        return obj;
      });
      teamMembersFilter[1].allData = updatedRole;
    });
    const form = () => {
      const id = selectedMember.value._id;
      const memberId = selectedMember.value.memberId;

      const status = teamMembersFilter[2].value;

      // EditMember(id, memberId,status, {
      EditMember(id, memberId, {
        groupId: teamMembersFilter[0].value,
        memberJobRole: teamMembersFilter[1].value,
        teamMemberStatus: status,
        attendenceStatus: addMemberAttendance.value,
        hoursPerWeek: hoursPerWeek.value,
        yearlyVacation: yearlyVacation.value,
        workingTime: workingTime.value,
      }).then((res: any) => console.log(res.json()));
      fetchMembers("");
    };
    return {
      // formNewMember,
      form,
      addMemberAttendance,
      teamMembersFilter,
      filter,
      addVacationReset,
      month,
      groups,
      remove,
      allMember,
      toCapitalized,
      selectedMember,
      statusValue,
    };
  },
});
</script>



<style scoped>
input {
  border-style: inset;
}
</style>
