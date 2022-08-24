<template>
  <!-- Modal Add Members in -->
  <div
    :class="openAddTask ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-1/3 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="add-new-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex capitalize items-center justify-between mb-3" id="title">
        <p class="font-bold mb-0 pb-0">Add task</p>
        <button @click="$emit('closeAddTask')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex justify-between items-center w-full">
        <div class="flex space-x-1 items-center capitalize">
          <p class="font-bold mb-0">Project</p>
          <p
            class="font-medium text-xs mb-0 rounded-lg px-1 py-px bg-[#19CCF3] bg-opacity-[20%] text-[#19CCF3] "
          >
            theodore litt schelu
          </p>
        </div>
        <div class="flex space-x-1">
          <img src="@/assets/images/Unlock.svg" />
          <p class="font-bold mb-0 capitalize">public</p>
        </div>
      </div>

      <div v-for="(data, index) in newTask" :key="index">
        <v-text-field
          color="rgba(165, 210, 118, 1)"
          label="Task Name"
          v-model="data.taskName"
          class="capitalize"
        ></v-text-field>

        <v-text-field
          color="rgba(165, 210, 118, 1)"
          label="Task Description"
          v-model="data.taskDescription"
          class="capitalize"
        ></v-text-field>

        <div class="grid mt-5 pt-5 grid-cols-2 gap-5">
          <v-autocomplete
            color="rgba(145, 201, 89,1)"
            :items="filterDropdown[0].allData"
            chips
            class="capitalize mt-0 pt-0"
            small-chips
            label="assignd to"
            v-model="data.assignetTo"
            item-color="DPGREEN-500"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip small @click:close="remove(data.index)" close>
                {{ data.item }}
              </v-chip>
            </template>
          </v-autocomplete>

          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            v-model="data.section"
            label="Section"
            dense
          ></v-select>
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            v-model="data.startDate"
            label="Start Date"
            dense
          ></v-select>
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            v-model="data.deadline"
            label="Deadline"
            dense
          ></v-select>
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            v-model="data.status"
            label="Status"
            dense
          ></v-select>
          <v-select
            class="capitalize"
            color="rgba(145, 201, 89,1)"
            item-color="DPGREEN-500"
            clearable
            v-model="data.priority"
            label="Priority"
            dense
          ></v-select>
        </div>
      </div>

      <div class="w-full">
        <div @click="addTask" class="flex w-40 items-center cursor-pointer">
          <v-icon color="rgba(165, 210, 118, 1)">
            mdi-plus
          </v-icon>
          <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">
            Add checklist
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px;"
        @click="$emit('closeAddTask')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px;"
        @click="$emit('closeAddTask')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import addNewProject from "~/data_component/Projects/AddNewProject";
import manageTask from "~/data_component/Projects/ManageTask";

export default defineComponent({
  props: {
    openAddTask: Boolean
  },
  setup(props) {
    const { newProject, allColor } = addNewProject();

    const { addTask, newTask } = manageTask();

    //just prototype
    const filterDropdown = reactive([
      {
        label: "group",
        value: [],
        allData: ["design", "web", "finance", "manage"],
        dataActive: null
      }
    ]);

    const remove = (index: number) => {
      console.log(index);
      if (index >= 0) filterDropdown; /// Splice to v-model directive
    };

    return { newProject, filterDropdown, allColor, remove, newTask, addTask };
  }
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
