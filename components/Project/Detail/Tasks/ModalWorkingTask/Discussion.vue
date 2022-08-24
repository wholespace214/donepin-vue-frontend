<template>
  <div id="discussion" class="pb-4">
    <p class="font-bold text-sm capitalize">Discussion</p>

    <div class="flex w-full flex-col space-y-2">
      <div class="" v-for="(data, index) in discussion" :key="index">
        <div class="flex items-center p-1 rounded-md justify-between">
          <div class="flex items-center space-x-3.5 w-auto">
            <div
              class="avatar text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"
            >
              kt
            </div>
            <p
              class="mb-0 pb-0 font-bold text-sm capitalize"
              v-text="data.user"
            ></p>
          </div>

          <p class="mb-0 pb-0 capitalize" v-text="data.date"></p>
        </div>

        <p
          class="mb-0 p-1 px-2 capitalize text-[14px] font-normal mt-2"
          v-text="data.message"
        ></p>

        <div v-show="data.files" class="p-2">
          <img class="" src="@/assets/images/volla-phone.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup(props) {
    const { discussion } = workingTask();

    return {
      discussion
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
