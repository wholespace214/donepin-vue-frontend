<template>
  <div
    :class="openModal ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-96
      fixed
      flex flex-col
      h-screen
      justify-between
      modal
      overflow-y-auto
      pb-20
      pt-4
      px-5
      right-0
      shadow-md
      top-0
      z-30
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="add-new-members"
  >
    <DashboardProgressLinear />

    <div id="top" class="flex flex-col">
      <div class="flex capitalize items-center justify-between mb-3" id="title">
        <p class="font-bold mb-0">Add (Edit) Client</p>
        <button @click="openModal = !openModal" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div v-if="skeletonLoader" class="flex flex-col space-y-2">
        <v-skeleton-loader v-for="data in 5" :key="data" type="list-item-three-line"></v-skeleton-loader>
      </div>

      <ValidationObserver v-else ref="form">
        <div v-for="(data, index) in client" :key="index">
          <div class="grid grid-cols-2 gap-4">
            <ValidationProvider rules="required" name="Client name" v-slot="{ errors }">
              <v-text-field v-model="data.Name" label="Client name" color="rgba(145, 201, 89,1)" :error-messages="errors"></v-text-field>
            </ValidationProvider>

            <ValidationProvider rules="required" name="Company name" v-slot="{ errors }">
              <v-text-field v-model="data.companyName" label="Company name" color="rgba(145, 201, 89,1)" :error-messages="errors"></v-text-field>
            </ValidationProvider>
          </div>
          <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
            <ValidationProvider rules="integer" name="Client Number" v-slot="{ errors }">
              <v-text-field label="Client Number" v-model="data.clientNumber" color="rgba(145, 201, 89,1)" :error-messages="errors"></v-text-field>
            </ValidationProvider>

            <v-text-field label="Company Type" color="rgba(145, 201, 89,1)" v-model="data.clientType"></v-text-field>
          </div>
          <div class="grid mt-5 pt-5 grid-cols-2 gap-4">
            <v-textarea rows="1" class="pt-0" v-model="data.address" label="Contact Infomation" color="rgba(145, 201, 89,1)"></v-textarea>

            <v-text-field v-model="data.phoneNo" label="Phone" color="rgba(145, 201, 89,1)"></v-text-field>
          </div>
          <div class="grid pt-5 grid-cols-2 gap-4">
            <div></div>
            <ValidationProvider rules="email|required" name="Email" v-slot="{ errors }">
              <v-text-field label="Email" v-model="data.email" color="rgba(145, 201, 89,1)" :error-messages="errors"></v-text-field>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="openModal = !openModal"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="submit"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useAddClient from "~/controller/Finance.ts/Client/AddClient";
import useUpdateClient from "~/controller/Finance.ts/Client/UpdateClient";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useFirstSetting from "~/controller/FirstSetting";
import Client from "~/data_component/Finance/Client";
export default defineComponent({
  setup() {
    const form = ref();

    const { client, openModal, modalStatus, skeletonLoader } = Client();

    const { addNewClient } = useAddClient();

    const { submitUpdateClient } = useUpdateClient();
    const { fetchClient } = useFirstSetting();

    const { validation } = useGeneralFeatures();

    const submit = () => {
      validation(form).then((res: any) => {
        if (res) {
          modalStatus.value == "addClient" ? addNewClient() : submitUpdateClient();
          fetchClient();
          openModal.value = false;
        }
      });
    };

    return { client, form, submit, openModal, skeletonLoader };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
