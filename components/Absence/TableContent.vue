<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex">
        <Div class="flex items-end p-2 w-60">
          <Span class="text-small">Name</Span>
        </Div>
        <Div v-for="(data, index) in tableHead" :key="index" class="hidden p-2 w-24 md:flex md:items-end">
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-small">Actions</Span>
      </Div>
    </Div>

    <Div class="" v-for="(data, index) in allAbsenceData" :key="index">
      <Div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
        <Div class="flex" id="table-left">
          <Div id="name" class="flex space-x-4 items-center p-2 w-60">
            <Div class="flex items-center justify-between">
              <Div class="relative">
                <v-avatar color="REDCOLOR" size="40" class="capitalize font-weight-bold text-body-1 white--text">
                  {{ data.memberId && `${data.memberId.firstName.charAt(0)}${data.memberId.lastName.charAt(0)}` }}
                </v-avatar>

                <Div class="absolute top-[30px] left-[29px]">
                  <Div class="h-2 w-2 bg-DPGREEN-500 ring-2 ring-white rounded-full"></Div>
                </Div>
              </Div>
            </Div>

            <Div class="flex-col hidden justify-center p-2 w-full md:flex">
              <Span class="mb-0 text-sm font-semibold">{{ data.memberId && `${data.memberId.firstName} ${data.memberId.lastName}` }}</Span>
              <P class="font-light mb-0"> {{ data.memberId && `${data.memberId.email}` }} </P>
            </Div>
          </Div>

          <Div class="flex justify-between capitalize">
            <Div class="flex-col hidden justify-center p-2 w-24 md:flex">
              <!-- <Span class="mb-0 text-sm font-semibold"> {{ formatDateTime(data.begin, "date") }} </Span> -->
              <!-- <P class="font-light mb-0"> {{ formatDateTime(data.begin, "day") }} </P> -->
            </Div>
            <Div class="flex-col hidden justify-center p-2 w-24 md:flex">
              <!-- <Span class="mb-0 text-sm font-semibold"> {{ formatDateTime(data.end, "date") }} </Span> -->
              <!-- <P class="font-light mb-0"> {{ formatDateTime(data.end, "day") }} </P> -->
            </Div>
            <Div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
              <P class="font-light mb-0"> 1 </P>
            </Div>
            <Div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
              <P class="font-light mb-0"> 1 </P>
            </Div>
            <Div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
              <P class="font-light mb-0"> {{ data.absenceType }} </P>
            </Div>
            <Div class="flex flex-col items-center justify-center p-2 w-24">
              <P class="font-semibold mb-0">{{ data.reason }}</P>
            </Div>
            <Div class="flex-col hidden items-center justify-center p-2 w-24 md:flex">
              <Span v-if="data.approvalStatus === 'APPROVED'" class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md text-DPGREEN-500"> {{ data.approvalStatus }} </Span>
              <Span v-else-if="data.approvalStatus === 'PENDING'" class="bg-DPORANGE-400 bg-opacity-25 p-0 px-3 py-1 rounded-md text-DPORANGE-500"> {{ data.approvalStatus }} </Span>
              <Span v-else-if="data.approvalStatus === 'DECLINE'" class="bg-DPRED-400 bg-opacity-25 p-0 px-3 py-1 rounded-md text-DPRED-500"> {{ data.approvalStatus }} </Span>
            </Div>
          </Div>
        </Div>
        <Div class="flex items-center justify-center p-2" id="table-right">
          <Div class="relative flex items-center">
            <div class="flex items-center justify-center p-2" id="table-right">
              <div class="relative flex items-center">
                <button @click="data.edit = !data.edit" class="focus:outline-none relative">
                  <img src="~/assets/images/icon-modify.svg" />
                </button>
                <Div v-show="data.edit" @click="data.edit = !data.edit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
                <Div v-show="data.edit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                  <Span
                    class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                    @click="approveRequest(data._id)"
                  >
                    <img src="@/assets/images/icon-edit.svg" class="mr-2" />Approve
                  </Span>
                  <Span
                    @click="declineRequest(data._id)"
                    class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                  >
                    <img src="@/assets/images/icon-edit.svg" class="mr-2" />Decline
                  </Span>
                  <Span
                    @click="
                      $emit('editAbsence');
                      editData(data);
                    "
                    class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                  >
                    <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                  </Span>
                  <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                    <img src="@/assets/images/icon-delete.svg" class="mr-2" />delete
                  </Span>
                </Div>
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </Div>
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import TableAbsence from "~/data_component/Attendance/TableAbsence";
import useAbsenceSettings from "~/controller/FirstSettings/AbsenceSettings";
import draggable from "vuedraggable";
import { format } from "date-fns";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, content, allAbsenceData, editAbsenceData } = TableAbsence();
    const { approveAbsence, declineAbsence, getAllAbsence } = useAbsenceSettings();
    const edit = ref(false);

    // const modalEdit = (id: any) => {
    //   getClientByid(id);
    //   modalStatus.value = "editClient";
    //   openModal.value = !openModal.value;
    // };

    const formatDateTime = (date: any, type: string) => {
      if (type === "date") return format(new Date(date), "MM.dd.yyyy");
      else if (type == "day") return format(new Date(date), "EEEE");
      else if (type == "time") return format(new Date(date), "HH:mm");
    };

    const approveRequest = async (id: any) => {
      await approveAbsence(id, "APPROVED");
      await getAllAbsence();
    };

    const declineRequest = async (id: any) => {
      await approveAbsence(id, "DECLINE");
      await getAllAbsence();
    };

    const editData = (data: any) => {
      editAbsenceData.value = data;
      console.log(editAbsenceData);
    };

    return {
      tableHead,
      edit,
      allAbsenceData,
      formatDateTime,
      declineAbsence,
      approveRequest,
      declineRequest,
      editData,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
