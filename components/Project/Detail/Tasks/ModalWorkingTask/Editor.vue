<template>
  <div id="editor" class="pb-4" :class="{ 'h-[200px]': editor }">
    <div class="flex w-full space-x-3">
      <div
        class="avatar text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"
      >
        kt
      </div>
      <div class="flex w-full flex-col">
        <div
          @click="openEditor"
          class="w-full cursor-pointer rounded-lg p-4 border"
          v-show="editor == true ? false : true"
        ></div>

        <v-expand-transition>
          <div
            v-show="editor"
            class="w-full transition-fast-in-fast-out rounded-lg p-4 border flex flex-col"
          >
            <div class="w-full">
              <textarea
                ref="inputValue"
                class="w-full resize-none focus:outline-none focus:ring-0 focus:ring-transparent"
                id="textarea"
                placeholder="Write Something here ...."
                rows="5"
              ></textarea>
            </div>

            <div class="flex w-full justify-between" id="action">
              <div class="flex space-x-4">
                <img class="" src="@/assets/images/format-text-color.svg" />

                <v-icon color="blue-grey lighten-2">mdi-at</v-icon>
                <v-icon color="blue-grey lighten-2">
                  mdi-star-circle-outline
                </v-icon>
                <v-icon color="blue-grey lighten-2">mdi-paperclip</v-icon>
                <v-icon color="blue-grey lighten-2">
                  mdi-emoticon-happy-outline
                </v-icon>
              </div>
              <div class="flex items-center">
                <button
                  class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center rounded-lg text-white text-xs py-1 px-6"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </v-expand-transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

export default defineComponent({
  setup(props) {
    const { checklist } = workingTask();

    const editor = ref(false);

    const inputValue = ref();

    const openEditor = () => {
      editor.value = !editor.value;
      inputValue.value.focus();
    };

    return {
      checklist,
      editor,
      inputValue,
      openEditor
    };
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}
</style>
