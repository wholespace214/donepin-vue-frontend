<template>
  <!-- Modal Add Members in -->
  <div
    :class="openNewUsers ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="add-new-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold">Add / edit member</p>
        <button @click="$emit('closeModalAddUsers')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-5" id="select">
        <div class="grid pt-5 grid-cols-2 gap-4">
          <v-text-field
            color="rgba(145, 201, 89,1)"
            label="First name"
          ></v-text-field>
          <v-text-field
            color="rgba(145, 201, 89,1)"
            label="Last name"
          ></v-text-field>
        </div>

        <v-text-field color="rgba(145, 201, 89,1)" label="Email"></v-text-field>

        <v-text-field
          color="rgba(145, 201, 89,1)"
          label="Password"
        ></v-text-field>

        <div class="grid pt-5 grid-cols-2 gap-4">
          <div class="">
            <v-text-field
              color="rgba(145, 201, 89,1)"
              label="Workspace name"
              class="pt-0"
            ></v-text-field>
          </div>

          <div class="">
            <v-select
              class="capitalize pt-1"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Status"
              dense
            ></v-select>
          </div>
        </div>

        <p class="text-sm mt-0 py-3 capitalize">
          current workspaces as admin
        </p>

        <div class="w-full flex space-y-3 flex-col">
          <div id="head" class="flex justify-between">
            <div class="w-1/2 flex justify-between">
              <span class="text-sm font-semibold capitalize">
                Workspace name
              </span>
              <span class="text-sm font-semibold capitalize">plan</span>
            </div>
          </div>

          <div
            class="flex justify-between"
            v-for="(data, index) in ['free', 'max', 'freelance', 'ultimate']"
            :key="index"
          >
            <div class="w-1/2 flex justify-between">
              <span class="text-xs font-medium capitalize">
                Kirby Thailman
              </span>
              <span class="text-xs font-medium capitalize" v-text="data"></span>
            </div>

            <Button class="focus:outline-none relative">
              <img src="~/assets/images/icon-delete-gray.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px;"
        @click="$emit('closeModalAddUsers')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px;"
        @click="$emit('closeModalAddUsers')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import allFilter from "~/data_component/Dashboard/AllFilter";

export default defineComponent({
  props: {
    openNewUsers: Boolean
  },
  setup(props) {
    const formNewMember = reactive([
      {
        label: "Email address",
        formType: "email",
        value: ""
      },
      {
        label: "Group",
        formType: "text",
        value: ""
      }
    ]);

    const { teamMembersFilter, toCapitalized } = allFilter();

    const filter = reactive([teamMembersFilter[1], teamMembersFilter[2]]);

    const addMemberAttendance = ref(true);

    const addVacationReset = ref(true);

    return {
      formNewMember,
      addMemberAttendance,
      filter,
      addVacationReset,
      toCapitalized
    };
  }
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
