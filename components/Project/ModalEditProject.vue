<template>
  <!-- Modal Add Members in -->
  <div
    :class="openEditModal ? ' -translate-x-0' : 'translate-x-full'"
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
      <div class="flex capitalize justify-between mb-3" id="title">
        <p class="font-bold mb-0">Edit Project</p>
        <button @click="openEditModal = !openEditModal" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>
      <v-text-field color="rgba(165, 210, 118, 1)" :label="newProject.projectName.label" v-model="newProject.projectName.value" class="capitalize"></v-text-field>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-select class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable :label="newProject.startDate.label" v-model="newProject.startDate.value" dense></v-select>
        <v-select class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable :label="newProject.deadline.label" v-model="newProject.deadline.value" dense></v-select>
      </div>
      <div class="mt-5">
        <v-autocomplete
          color="rgba(145, 201, 89,1)"
          :items="filterDropdown[0].allData"
          chips
          class="capitalize"
          small-chips
          :label="newProject.members.label"
          v-model="newProject.members.value"
          item-color="DPGREEN-500"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip small @click:close="remove(data.index)" close>
              {{ data.item }}
            </v-chip>
          </template>
        </v-autocomplete>
      </div>

      <div class="mt-5">
        <v-autocomplete
          color="rgba(145, 201, 89,1)"
          :items="filterDropdown[0].allData"
          chips
          class="capitalize"
          small-chips
          :label="newProject.teams.label"
          v-model="newProject.teams.value"
          item-color="DPGREEN-500"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip small @click:close="remove(data.index)" close>
              {{ data.item }}
            </v-chip>
          </template>
        </v-autocomplete>
      </div>

      <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
        <v-select class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable :label="newProject.status.label" v-model="newProject.status.value" dense></v-select>
        <v-select class="capitalize" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable :label="newProject.priority.label" v-model="newProject.priority.value" dense></v-select>
      </div>

      <p class="text-xs mt-3 font-semibold text-[#6A6A6A]">Choose color</p>

      <div class="flex">
        <div id="all color" class="w-full flex justify-between">
          <div v-for="(data, index) in allColor" :key="index" :style="`background-color: ${data};`" class="w-[20px] h-[20px] cursor-pointer ring-2 ring-white rounded-full text-white uppercase"></div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeEditModal')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import addNewProject from "~/data_component/Projects/AddNewProject";
import TableProject from "~/data_component/Projects/TableProject";

export default defineComponent({
  props: {
    openEditModal: Boolean,
    closeEditModal: Function,
  },
  setup(props) {
    const { newProject, allColor } = addNewProject();

    const { addProject } = TableProject();

    //just prototype
    const filterDropdown = reactive([
      {
        label: "group",
        value: [],
        allData: ["design", "web", "finance", "manage"],
        dataActive: null,
      },
      {
        label: "role",
        value: [],
        allData: ["owner", "developer", "finance", "manage"],
        dataActive: null,
      },
      {
        label: "status",
        value: [],
        allData: ["active", "disabled"],
        dataActive: null,
      },
    ]);

    const remove = (index: number) => {
      if (index >= 0) filterDropdown[0].value.splice(index, 1);
    };

    return { newProject, filterDropdown, allColor, addProject, remove };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
