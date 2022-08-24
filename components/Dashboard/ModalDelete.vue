<template>
  <Div v-show="deleteConfirm" class="fixed flex justify-center items-center  inset-0 h-full w-full z-10">
    <div class="m-7 p-2 sm:p-5 md:p-5 lg:p-5 bg-white rounded-xl shadow-xl transform transition w-[31rem]" id="registration-box">
      <div class="flex flex-col space-y-5">
        <p class="pb-0 capitalize font-semibold text-lg mb-0">
          are you sure ?
        </p>

        <div class="w-full mt-4">
          <div class="w-full space-x-2 flex">
            <v-icon color="rgba(240, 61, 36, 1)" x-large v-text="'mdi-alert-circle'"> </v-icon>
            <p class="mb-0 text-sm font-semibold capitalize pb-0">
              are you sure want to deleted this profile ? You can't view this profile anymore if you delete.
            </p>
          </div>

          <div class="w-full flex mt-3 py-2 space-x-3 justify-end">
            <button
              @click="$emit('closeDelete')"
              class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
            >
              Cancel
            </button>
              <!--@click="$emit('deletedMember')"-->
            <button
              @click="$emit('deletedMember'), $emit('closeDelete')"
              
              class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
// import deletedMember from "./api/members";
// import members from "./api/members";
// import useMembersApi from "./api/members";

export default defineComponent({
  props: {
    deleteConfirm: Boolean,
    deletedMember: String
    // members: ["deletedMember"]
  }
});
</script>

<style></style>
