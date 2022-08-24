<template>
  <div id="content" class="flex flex-col space-y-10">
    <ProjectDetailTasksModalWorkingTaskDiscussion />
    <div id="editor" class="pb-4 h-[200px]">
      <div class="flex w-full space-x-3">
        <div
          class="avatar text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"
        >
          kt
        </div>
        <div class="flex w-full flex-col">
          <div
            class="w-full transition-fast-in-fast-out rounded-lg p-4 border flex flex-col"
          >
            <div class="w-full">
              <div id="toolbar">
                <select class="ql-size">
                  <option value="small"></option>

                  <option selected></option>
                  <option value="large"></option>
                  <option value="huge"></option>
                </select>

                <button class="ql-bold"></button>
                <!-- Add subscript and superscript buttons -->
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
              </div>

              <client-only>
                <quill-editor
                  ref="editor"
                  v-model="content"
                  :options="editorOption"
                  @ready="onEditorReady($event)"
                />
              </client-only>
            </div>

            <div class="flex w-full justify-between" id="action">
              <div id="tollbar" class="flex space-x-4">
                <img
                  class=""
                  class=""
                  src="@/assets/images/format-text-color.svg"
                />

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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import workingTask from "~/data_component/Projects/WorkingTask";

import "quill-emoji/dist/quill-emoji.css";

export default defineComponent({
  setup(props) {
    const { discussion } = workingTask();

    const content = ref();

    const toolbar = ref();

    const editorOption = ref({
      theme: "snow",
      modules: {
        "emoji-shortname": true,
        "emoji-toolbar": true,
        toolbar: {
          container: [["link", "image", "emoji"], [{ color: [] }]]
        }
      }
    });

    const onEditorReady = (editor: any) => console.log("editor ready!", editor);

    return {
      toolbar,
      content,
      discussion,
      editorOption,
      onEditorReady
    };
  }
});
</script>

<style lang="scss" scoped>
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
