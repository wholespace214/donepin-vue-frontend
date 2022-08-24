<template>
  <Div class="flex flex-col">
    <div
      :class="openAdmin ? ' -translate-x-0' : 'translate-x-full'"
      class="bg-white w-full sm:w-96 fixed  flex flex-col h-screen justify-between modal overflow-y-auto pb-20 pt-4 px-5 right-0 shadow-md top-0  z-30 md:pb-4 duration-500 ease-in-out transform transition"
      id="add-new-roles"
    >
      <div id="top" class="flex flex-col">
        <div
          class="flex items-center capitalize justify-between mb-3"
          id="title"
        >
          <p class="font-bold pb-0 mb-0">Add / Edit Admins</p>
          <button @click="$emit('closeAdmin')" class="focus:outline-none">
            <img src="@/assets/images/icon-close.svg" />
          </button>
        </div>

        <div class="w-full mt-5 flex space-y-8 flex-col">
          <div class="grid grid-cols-2 gap-4">
            <v-text-field
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="First Name"
              dense
            ></v-text-field>
            <v-text-field
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Last Name"
              dense
            ></v-text-field>
          </div>
          <div class="">
            <v-text-field
              class="pt-0 mt-0"
              label="Email"
              color="rgba(145, 201, 89,1)"
            ></v-text-field>
          </div>

          <div class="">
            <v-text-field
              class="pt-0 mt-0"
              label="Password"
              color="rgba(145, 201, 89,1)"
            ></v-text-field>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <v-select
              class="capitalize"
              color="rgba(145, 201, 89,1)"
              item-color="DPGREEN-500"
              clearable
              label="Status"
              dense
            ></v-select>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-5" id="bottom">
        <button
          class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAdmin')"
        >
          Cancel
        </button>
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px;"
          @click="$emit('closeAdmin')"
        >
          Done
        </button>
      </div>
    </div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["openAdmin"],
  setup() {}
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
