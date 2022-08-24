<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between w-[90%]">
        <Div class="flex items-end p-2 w-32">
          <Span class="text-small capitalize">Client name</Span>
        </Div>
        <Div v-for="(data, index) in tableHead" :key="index" class="p-2 md:flex md:items-end hidden" :class="data.class">
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-small w-24 text-end">Actions</Span>
      </Div>
    </Div>

    <Div class="" id="table-body">
      <!-- <DashboardSkeleton v-if="skeletonLoader" type="list-item-avatar-three-line" :amount="5" /> -->

      <template>
        <Div v-for="(data, index) in allClient" :key="index" class="bg-white w-full items-center flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md">
          <Div class="flex w-[90%] items-center" id="table-left">
            <Div id="client-name" class="flex items-center p-2 w-32">
              <Div class="flex items-center capitalize justify-between">
                <span>{{ data.Name }}</span>
              </Div>
            </Div>
            <Div id="company-name" class="p-2 w-32 md:flex md:items-center hidden">
              <Div class="flex flex-wrap">
                <span>{{ data.companyName }}</span>
              </Div>
            </Div>
            <Div id="type" class="p-2 w-32 md:flex md:items-center hidden">
              <Span class="text-small capitalize">
                {{ data.clientType }}
              </Span>
            </Div>
            <Div id="client" class="p-2 w-36 md:flex items-center hidden">
              <Span class="text-small capitalize">
                {{ data.address }}
              </Span>
            </Div>
            <Div id="client-number" class="p-2 w-32 md:flex md:items-center hidden">
              <Span class="font-normal capitalize items-center rounded-md px-2">
                {{ data.clientNumber }}
              </Span>
            </Div>
            <Div id="email" class="p-2 w-40 md:flex md:items-center hidden">
              <Span class="font-normal truncate capitalize px-2">
                {{ data.email }}
              </Span>
            </Div>
            <Div id="phone" class="p-2 w-40 md:flex md:items-center hidden">
              <Span class="font-normal capitalize px-2">
                {{ data.phoneNo }}
              </Span>
            </Div>
            <Div id="member" class="p-2 w-32 justify-center md:flex md:items-center hidden">
              <img src="~/assets/images/Group.svg" />
            </Div>
          </Div>

          <Div class="flex items-center justify-between p-2">
            <Div class="w-24 text-end">
              <Button @click="data.edit = !data.edit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </Button>

              <Div v-show="data.edit" @click="data.edit = !data.edit" class="fixed inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.edit" class="absolute bg-white dp-shadow right-10 rounded-md w-32 z-20">
                <Span
                  @click="modalEdit(data._id)"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />Edit
                </Span>
                <Span class="capitalize cursor-pointer flex flex-row hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row items-center px-4 py-3 text-xs">
                  <img src="~/assets/images/icon-delete.svg" class="mr-2" style="width: 12px; height: 20px" />
                  Delete
                </Span>
              </Div>
            </Div>
          </Div>
        </Div>
      </template>
    </Div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import draggable from "vuedraggable";
import TableClient from "~/data_component/Finance/TableClient";
import Client from "~/data_component/Finance/Client";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useUpdateClient from "~/controller/Finance.ts/Client/UpdateClient";
export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead } = TableClient();

    const { getClientByid } = useUpdateClient();

    const { openModal, modalStatus, allClient } = Client();

    console.log("client>>>>>>><<<<<<<<", allClient);

    const { skeletonLoader } = useGeneralFeatures();

    const modalEdit = (id: any) => {
      getClientByid(id);
      modalStatus.value = "editClient";
      openModal.value = !openModal.value;
    };

    return {
      tableHead,
      allClient,
      skeletonLoader,
      modalEdit,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
