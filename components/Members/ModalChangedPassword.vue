<template>
  <div
    :class="changedPasword ? ' -translate-x-0' : 'translate-x-full'"
    class="bg-white w-full sm:w-2/3 xl:w-5/12  h-screen fixed   flex flex-col justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
    id="edit-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold text-DPGREY-500">Change Password</p>
        <button
          @click="changedPasword = !changedPasword"
          class="focus:outline-none"
        >
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col mt-4 space-y-10" id="select">
        <v-text-field
          color="rgba(145, 201, 89,1)"
          label="Old Password"
          class="text-lg"
          type="text"
        ></v-text-field>

        <v-text-field
          color="rgba(145, 201, 89,1)"
          label="New Password"
          class="text-lg"
          type="text"
        ></v-text-field>

        <v-text-field
          color="rgba(145, 201, 89,1)"
          label="Repeat Password"
          class="text-lg"
          type="text"
        ></v-text-field>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border text-DPGREY-400 font-semibold text-sm border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg"
        style="min-width: 110px;"
        @click="changedPasword = !changedPasword"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border font-semibold text-sm border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white"
        style="min-width: 110px;"
        @click="changedPasword = !changedPasword"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import members from "~/data_component/Members";

export default defineComponent({
  props: {
    openChangedPassword: Boolean
  },
  setup(props) {
    const { changedPasword } = members();
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

    const tableHeader = ref([
      "module",
      "Email notification",
      "push notification"
    ]);

    const tableBody = ref([
      {
        text: "team",
        emailNotifValue: false,
        pushNotifValue: true
      },
      {
        text: "attendance",
        emailNotifValue: false,
        pushNotifValue: true
      },
      {
        text: "work",
        emailNotifValue: false,
        pushNotifValue: true
      },
      {
        text: "finance",
        emailNotifValue: false,
        pushNotifValue: true
      }
    ]);

    const dynamicalClass = (index: number) => {
      if (index == 0) {
        return "justify-start";
      } else if (index === 2) {
        return "justify-end";
      } else if (index == 1) {
        return "justify-center";
      }
    };

    return {
      tableHeader,
      formNewMember,
      tableBody,
      changedPasword,
      dynamicalClass
    };
  }
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
