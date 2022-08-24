<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex ">
        <Div class="flex items-end p-2 w-80">
          <Span class="text-small capitalize">Project</Span>
        </Div>
        <Div
          v-for="(data, index) in tableHead"
          :key="index"
          :class="data.class"
          class="p-2 md:flex md:items-end hidden"
        >
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-small">Actions</Span>
      </Div>
    </Div>

    <!-- This is table body place -->
    <Div class="py-3  mt-4">
      <Span class="flex items-center px-3">
        <Div class="w-[15px] h-[15px] rounded-full bg-[#E826B1]"></Div>
        <Span class=" pl-3 font-black uppercase">New ideas</Span>
      </Span>
      <draggable v-model="content">
        <Div
          v-for="(data, index) in content"
          :key="index"
          class="bg-white cursor-pointer flex justify-between px-3 w-full hover:bg-gray-300 hover:bg-opacity-25 hover:rounded-lg  my-1 rounded-xl"
        >
          <Div class="flex">
            <Div class="flex justify-between w-80 task-ideas p-2 items-center">
              <Div class="flex">
                <img src="@/assets/images/iconcheck.svg" alt="" />
                <Span class="text-[14px] pl-2 leading-[19px] font-medium">
                  {{ data.tasks }}
                </Span>
                <img
                  v-if="data.private"
                  src="@/assets/images/lock.svg"
                  class="w-[20px] h-[15px]"
                  alt=""
                />
              </Div>

              <Div class="mr-6 relative cursor-pointer">
                <img
                  v-if="data.unreadMessage"
                  class="absolute top-[11px] left-[10px]"
                  src="@/assets/images/ellipse.svg"
                  alt=""
                />
                <img src="@/assets/images/chat.svg" alt="" />
              </Div>
            </Div>

            <Div
              class="assignet py-2 w-48 md:flex space-x-1 md:items-end hidden"
            >
              <template v-if="data.assignetTo.length > 0">
                <Div
                  v-for="(data, index) in data.assignetTo"
                  :key="index"
                  class="rounded-full  h-6 flex items-center justify-center w-6 bg-[#D4BE45]"
                >
                  <Span class="uppercase py-1 text-white">{{ data }}</Span>
                </Div>
              </template>
            </Div>

            <Div class="deadline w-40 py-2 hidden md:flex">
              <Span
                class="text-[14px] text-[#91C959] capitalize leading-[19px] font-normal"
              >
                {{ data.deadline }}
              </Span>
            </Div>

            <Div class="priority w-32 py-2 hidden md:flex">
              <Span
                class="font-normal capitalize flex justify-center items-center rounded-md px-2"
                :class="priorityStyling(data.priority)"
              >
                {{ data.priority }}
              </Span>
            </Div>

            <Div class="priority w-28 py-2 hidden md:flex">
              <Span
                class="font-normal flex justify-center items-center rounded-md px-2"
              >
                {{ data.timeLogs }}
              </Span>
            </Div>
          </Div>

          <Div class="flex items-center justify-center" id="table-right">
            <Div class="relative flex items-center">
              <button
                @click="data.edit = !data.edit"
                class="focus:outline-none relative"
              >
                <img src="@/assets/images/icon-modify.svg" />
              </button>
              <Div
                v-show="data.edit"
                @click="data.edit = !data.edit"
                class="fixed inset-0 h-full w-full z-10"
              ></Div>
              <Div
                v-show="data.edit"
                class="absolute bg-white dp-shadow right-0 top-[33px] rounded-md w-32 z-20"
              >
                <Span
                  @click="$emit('openOverView')"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
                </Span>
                <Span
                  class="capitalize cursor-pointer flex flex-row hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row items-center px-4 py-3 text-xs"
                >
                  <img
                    src="@/assets/images/icon-delete.svg"
                    class="mr-2"
                    style="width: 12px; height: 20px;"
                  />
                  Delete
                </Span>
              </Div>
            </Div>
          </Div>
        </Div>
      </draggable>

      <!-- Add Task -->

      <Div
        class="bg-white flex justify-between px-3 w-full hover:bg-gray-300 hover:bg-opacity-25 hover:rounded-lg  my-1 rounded-xl"
      >
        <Div class="flex">
          <Div class="flex w-80 task-ideas p-2 items-center">
            <img src="@/assets/images/icon-header-add-dark.svg" alt="" />
            <Span
              class="text-[14px] text-[#DBDBDB] pl-2 leading-[19px] font-medium"
            >
              Add New task
            </Span>
          </Div>
        </Div>

        <Div class="flex items-center justify-center" id="table-right">
          <Div class="relative flex items-center">
            <Button class="focus:outline-none relative">
              <img src="@/assets/images/icon-modify.svg" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>

    <!-- This is table body place -->
  </Div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import draggable from "vuedraggable";
import TableAlpinaLogo from "~/data_component/Projects/TableAlpinaLogo";

export default defineComponent({
  components: { draggable },
  setup() {
    const {
      tableHead,
      content,
      priorityStyling,
      openModal
    } = TableAlpinaLogo();

    return {
      tableHead,
      content,
      priorityStyling,
      openModal
    };
  }
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
