<template>
  <div class="">
    <div class="w-full py-5 flex space-x-5">
      <div
        v-for="(data, index) in boardContent"
        :key="index"
        class="flex flex-col space-y-4"
      >
        <span class="flex items-center">
          <div class="w-[15px] h-[15px] rounded-full bg-[#E826B1]"></div>
          <span class=" pl-3 font-black uppercase">{{ data.title }}</span>
        </span>

        <draggable v-model="data.data" group="task">
          <div
            v-for="(dataTask, index) in data.data"
            :key="index"
            id="card-board"
            class="w-[300px] flex flex-col mt-2"
          >
            <div
              class="w-full p-4 flex flex-col space-y-4 bg-white dp-shadow rounded-lg"
            >
              <!-- Board-Head -->
              <div
                id="board-head"
                class="w-full items-center flex justify-between "
              >
                <div class="flex space-x-3 items-center justify-between">
                  <img
                    id="checklis-icon"
                    class="cursor-pointer"
                    src="@/assets/images/iconcheck.svg"
                    alt=""
                  />
                  <span
                    v-show="dataTask.priority !== ''"
                    class="font-normal capitalize flex justify-center items-center rounded-md px-2"
                    :class="priorityStyling(dataTask.priority)"
                    id="priority"
                    v-text="dataTask.priority"
                  >
                  </span>
                  <img
                    v-if="dataTask.private"
                    id="private-status"
                    src="@/assets/images/lock.svg"
                    class="w-[20px] h-[15px]"
                    alt=""
                  />
                </div>
                <div class="relative cursor-pointer">
                  <img
                    v-if="dataTask.unreadMessage"
                    class="absolute top-[11px] left-[10px]"
                    src="@/assets/images/ellipse.svg"
                    alt=""
                  />
                  <img src="@/assets/images/chat.svg" alt="" />
                </div>
              </div>

              <!-- Board-Body-content -->

              <div class="w-full justify-center py-4" id="board-body">
                <p class="mb-0 capitalize">
                  {{ dataTask.tasks }}
                </p>
              </div>

              <!-- Board-footer -->
              <div class="w-full flex items-center justify-between">
                <div class="flex space-x-1" id="assignet-to">
                  <div
                    v-for="(users, index) in dataTask.assignetTo"
                    :key="index"
                    class="rounded-full h-6 flex items-center justify-center w-6 bg-[#D4BE45]"
                  >
                    <span
                      class="uppercase py-1 text-white"
                      v-text="users"
                    ></span>
                  </div>
                </div>
                <p
                  class="capitalize text-DPGREEN-500 mb-0"
                  id="time-deadline"
                  v-text="dataTask.deadline"
                ></p>
              </div>
            </div>
          </div>
        </draggable>

        <div
          class="w-full cursor-pointer bg-white dp-shadow p-2 rounded-lg flex"
          id="add-new-board"
        >
          <img src="@/assets/images/icon-header-add-dark.svg" alt="" />
          <span
            class="text-[14px] text-[#DBDBDB] pl-2 leading-[19px] font-medium"
          >
            Add New task
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import draggable from "vuedraggable";
import TableAlpinaLogo from "~/data_component/Projects/TableAlpinaLogo";

export default defineComponent({
  components: { draggable },
  setup() {
    const { content, priorityStyling, boardContent } = TableAlpinaLogo();

    return {
      content,
      boardContent,
      priorityStyling
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
