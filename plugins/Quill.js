import * as Emoji from "quill-emoji";
import Vue from "vue";
import Quill from "quill";
import VueQuillEditor from "vue-quill-editor";
Quill.register("modules/emoji", Emoji);

Vue.use(VueQuillEditor);
