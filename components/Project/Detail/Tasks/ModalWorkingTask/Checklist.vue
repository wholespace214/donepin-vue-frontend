<template>
  <div id="checklist" class="pb-4 border-b border-gray-300">
    <div class="flex w-full flex-col space-y-2">
      <draggable v-model="checklist">
        <v-hover
          v-for="(data, index) in checklist"
          :key="index"
          v-slot="{ hover }"
          :disabled="data.completed"
        >
          <div
            class="flex items-center p-1 rounded-md justify-between"
            :class="{ 'bg-DPGREY-150': hover }"
          >
            <div class="flex">
              <img
                class="cursor-pointer w-5 h-5"
                @click="checklistCompleted(index, checklist)"
                :src="
                  require(`@/assets/images/${
                    data.completed ? 'icon-check.svg' : 'iconcheck.svg'
                  }`)
                "
              />

              <input
                v-show="data.editable"
                v-model="data.text"
                ref="inputValue"
                @blur="editTask(checklist, index, inputValue)"
                placeholder="Write your task ..."
                type="text"
                class="focus:outline-none ml-3 focus:ring-0 focus:ring-opacity-50"
              />

              <p
                v-show="data.editable == false"
                @dblclick="editTask(checklist, index, inputValue)"
                class="mb-0 pb-0 cursor-auto ml-3 capitalize"
                :class="{ 'text-DPGREY-200': data.completed }"
              >
                {{ data.text }}
              </p>
            </div>
            <div
              class="cursor-pointer"
              @click="deletedTask(index, checklist)"
              id="trash-icon"
              v-show="hover"
            >
              <img
                class="cursor-pointer"
                src="@/assets/images/icon-delete-gray.svg"
              />
            </div>
          </div>
        </v-hover>
      </draggable>

      <span v-if="openNewChecklist">
        <div
          class="flex items-center p-1 hover:bg-DPGREY-150 rounded-md justify-between"
        >
          <div class="flex">
            <img
              class="cursor-pointer w-5 h-5"
              src="@/assets/images/iconcheck.svg"
            />
            <p class="mb-0 pb-0 ml-3 capitalize">
              <input
                @keypress.enter="newChecklist"
                v-model="addChecklist.text"
                placeholder="Write your task ..."
                type="text"
                class="focus:outline-none focus:ring-0 focus:ring-opacity-50"
              />
            </p>
          </div>
        </div>
      </span>
    </div>

    <div class="w-full mt-5">
      <div @click="addCheck" class="flex w-40 items-center cursor-pointer">
        <v-icon color="rgba(165, 210, 118, 1)">
          mdi-plus
        </v-icon>
        <p class="mb-0 capitalize text-DPGREEN-400 font-semibold text-sm">
          Add checklist
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";
import draggable from "vuedraggable";
import useWorkingTask from "~/controller/Project/ProjectDetail/WorkingTask";

export default defineComponent({
  components: { draggable },
  setup(props) {
    const { checklist, addChecklist } = workingTask();

    const {
      deletedTask,
      checklistCompleted,
      pushNewChecklist,
      editTask
    } = useWorkingTask();

    const openNewChecklist = ref(false);
    const addCheck = () => (openNewChecklist.value = !openNewChecklist.value);

    const inputValue = ref(null);

    const newChecklist = () => {
      pushNewChecklist(
        {
          text: addChecklist.text,
          completed: addChecklist.completed,
          editable: addChecklist.editable
        },
        checklist
      );
      openNewChecklist.value = !openNewChecklist.value;
    };

    return {
      checklist,
      addChecklist,
      openNewChecklist,
      inputValue,
      addCheck,
      newChecklist,
      checklistCompleted,
      editTask,
      deletedTask
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
