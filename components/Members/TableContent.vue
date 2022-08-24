<template>
  <div class="">
    <div class="flex flex-col">
      <!-- This is table head -->
      <div class="flex justify-between" id="table-head">
        <div class="flex justify-between">
          <div class="flex items-end py-2 lg:p-2 w-60">
            <span class="text-small capitalize flex px-1 items-center font-normal"> name </span>
          </div>

          <div v-for="(data, index) in tableHead" :key="index" :class="data.class" class="hidden p-2 lg:flex lg:items-end">
            <span class="text-small capitalize font-normal">{{ data.text }}</span>
          </div>
        </div>
        <div class="flex items-end p-2">
          <span class="text-small capitalize font-normal">Actions</span>
        </div>
      </div>

      <!-- This is table body place -->

      <DashboardSkeleton v-if="skeletonLoader" type="list-item-avatar-three-line" :amount="5" />
      <div v-else class="">
        <div v-for="(data, index) in allMember" :key="index" class="bg-white flex hover:bg-gray-300 rounded-lg hover:bg-opacity-25 justify-between my-1" id="table-body">
          <div class="flex" id="table-left">
            <div id="name" class="flex space-x-4 items-center p-2 w-60">
              <div class="flex items-center justify-between">
                <div class="relative">
                  <v-avatar color="REDCOLOR" size="40" class="capitalize text-uppercase font-weight-bold text-body-1 white--text">
                    {{ data.initial }}
                  </v-avatar>

                  <div class="absolute top-[30px] left-[29px]">
                    <div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="flex-col hidden justify-center p-2 w-full md:flex">
                <span class="mb-0 capitalize text-sm font-semibold" v-text="data.memberName"></span>
                <p class="font-light mb-0" v-text="data.memberEmail"></p>
              </div>
            </div>

            <div id="group looping use data groupId" class="flex justify-between capitalize">
              <div class="flex-wrap items-center hidden p-2 w-48 md:flex">
                <template v-if="data.groupId.length > 0">
                  <span
                    v-for="(data, index) in data.groupId"
                    :key="index"
                    class="bg-DPGREY-50 bg-opacity-30 flex mr-2 my-1 p-2 h-[25px] items-center rounded-xl text-mini w-min"
                    v-text="data.groupName"
                  >
                  </span>
                </template>
              </div>

              <div class="hidden items-center p-2 w-32 md:flex">
                <div class="font-normal capitalize font-[13px]" v-if="data.memberJobRole !== null" v-text="data.memberJobRole.role"></div>
              </div>

              <div class="hidden items-center p-2 w-28 md:flex">
                <span class="capitalize bg-opacity-25 p-0 px-3 py-1 rounded-md" :class="statusColorMember(data.teamMemberStatus)" v-text="data.teamMemberStatus"> </span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center p-2" id="table-right">
            <div class="relative flex items-center">
              <button @click="data.isEdit = !data.isEdit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </button>
              <Div v-show="data.isEdit" @click="data.isEdit = !data.isEdit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.isEdit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                <Span
                  @click="
                    getMemberData($event, data._id);
                    $emit('editMember');
                  "
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                </Span>
                <!--
                       onClick="deletedMember();"
                       @click = "deletedMember(teamId)"
                 -->
                <Span
                  @click="
                    data.isDeleted = !data.isDeleted;
                    getMemberData($event, data._id);
                  "
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-delete.svg" class="mr-2" />
                  delete
                </Span>

                <DashboardModalDelete :deleteConfirm="data.isDeleted" @closeDelete="data.isDeleted = !data.isDeleted" @deletedMember="deleteMemb" />
              </Div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import draggable from "vuedraggable";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import allFilter from "~/data_component/Dashboard/AllFilter";
import useMembersApi from "~/api/members";

// import { mapState, mapGetters, mapActions } from "vuex";

export default defineComponent({
  components: { draggable },
  // props: ['teamId'],
  // deletedMember: ['teamId']

  // computed: {
  //   ...mapState("member", ["members"]),
  //   ...mapGetters("member", ["getAllMembers"]),
  // },

  setup() {
    const { tableHead, allMember, selectedMember } = tableTeamMembers();
    const { statusColorMember, skeletonLoader, sortData } = useGeneralFeatures();
    const { deletedMember } = useMembersApi();

    const deleteMemb = () => {
      const memberId = selectedMember.value._id;
      // deletedMember(selectedMember.value.teamId, memberId).then((res: any) => res.json());
      deletedMember(selectedMember.value.teamId, memberId).then((res: any) => res.json());
    };
    return {
      allMember,
      tableHead,
      statusColorMember,
      // deletedMember,
      skeletonLoader,
      deleteMemb,
    };
  },

  methods: {
    getMemberData(event: any, id: any) {
      const { allMember, selectedMember } = tableTeamMembers();
      const { teamMembersFilter } = allFilter();
      // console.log(selectedMember);
      const filterMember = allMember.value.find((member: any) => member._id == id);

      if (filterMember.groupId.length > 0) {
        teamMembersFilter[0].value = filterMember.groupId.map((group: any) => {
          return group._id;
        });
      }
      let status: any = filterMember.teamMemberStatus;
      teamMembersFilter[2].value = status;
      if (filterMember.memberJobRole !== null) {
        let role: any = filterMember.memberJobRole._id;
        teamMembersFilter[1].value = role;
      }
      selectedMember.value = filterMember;
    },
    // ...mapActions("member", ["getMembers"]),
  },
  // async created() {
  //   this.getMembers(1);
  // },
});
</script>

<style></style>
