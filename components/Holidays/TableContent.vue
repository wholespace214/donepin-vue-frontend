<template>
  <div class="flex flex-col">
    <!-- This is table head -->

    <!-- <v-data-table hide-default-footer :headers="headers" :items="holidayData" :items-per-page="12" class="elevation-1"></v-data-table> -->

    <div class="flex justify-between" id="table-head">
      <div class="flex items-end p-2 w-60">
        <span class="text-small">Month</span>
      </div>

      <div class="flex w-full space-x-6 ml-[47px]">
        <div v-for="data in 30" :key="data" class="hidden w-1 md:flex md:items-end">
          <span class="w-1 p-1">
            {{ data }}
          </span>
        </div>
      </div>
    </div>

    <!-- This is table body place -->

    <div class="" v-for="(data, index) in content" :key="index">
      <div class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1" id="table-body">
        <div class="flex items-center" id="table-left">
          <div id="month" class="flex space-x-4 items-center p-2 w-60">
            <p class="capitalize text-sm mb-0 font-bold">January</p>
          </div>

          <div class="flex space-x-4">
            <div v-for="data in dummyData" :key="data" class="hidden w-[10.5px] h-[10.5px] p-1 md:flex md:items-end">
              <span class="w-1 bg-red-500 p-1"> </span>
              <!-- <span class="w-1 bg-DPYELLOW-400 p-1"> </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import TableAttendance from "~/data_component/Attendance/TableAttendance";
import draggable from "vuedraggable";

export default defineComponent({
  components: { draggable },
  setup() {
    const { tableHead, content } = TableAttendance();
    let headers = ref([
      {
        text: "Month",
        // align: "start",
        value: "name",
        sortable: false,
      },
    ]);

    for (let i = 1; i <= 30; i++) {
      headers.value.push({ text: `${i}`, value: `${i}`, sortable: false });
    }

    const dummyData = [
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        _id: "6242c75762c75ceea9a03825",
        adminId: "61e1709554ae7e41d2c1092e",
        teamId: "61b86e11b999ec6802ec050b",
        beginDate: "2022-03-30T18:30:00.000Z",
        endDate: "2022-03-31T18:30:00.000Z",
        holidayType: "Independent",
        occasion: "diwali",
        createdAt: "2022-03-29T08:45:50.206Z",
        updatedAt: "2022-03-29T08:45:50.206Z",
        __v: 0,
      },
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        _id: "6242caf462c75ceea9a0382f",
        adminId: "61e1709554ae7e41d2c1092e",
        teamId: "61b86e11b999ec6802ec050b",
        beginDate: "2022-02-28T18:30:00.000Z",
        endDate: "2022-03-02T18:30:00.000Z",
        holidayType: "NoobDay",
        occasion: "NoobIsWatching",
        createdAt: "2022-03-29T08:45:50.206Z",
        updatedAt: "2022-03-29T08:45:50.206Z",
        __v: 0,
      },
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        _id: "6242caff62c75ceea9a03832",
        adminId: "61e1709554ae7e41d2c1092e",
        teamId: "61b86e11b999ec6802ec050b",
        beginDate: "2022-03-24T18:30:00.000Z",
        endDate: "2022-03-25T18:30:00.000Z",
        holidayType: "NoobDay",
        occasion: "NoobIsWatching",
        createdAt: "2022-03-29T08:45:50.206Z",
        updatedAt: "2022-03-29T08:45:50.206Z",
        __v: 0,
      },
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        _id: "6242cb0f62c75ceea9a03835",
        adminId: "61e1709554ae7e41d2c1092e",
        teamId: "61b86e11b999ec6802ec050b",
        beginDate: "2022-03-24T18:30:00.000Z",
        endDate: "2022-03-25T18:30:00.000Z",
        holidayType: "worstCase",
        occasion: "WorstDAte",
        createdAt: "2022-03-29T08:45:50.206Z",
        updatedAt: "2022-03-29T08:45:50.206Z",
        __v: 0,
      },
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        _id: "6242cb1c62c75ceea9a03838",
        adminId: "61e1709554ae7e41d2c1092e",
        teamId: "61b86e11b999ec6802ec050b",
        beginDate: "2022-03-12T18:30:00.000Z",
        endDate: "2022-03-13T18:30:00.000Z",
        holidayType: "worstCase",
        occasion: "WorstDAte",
        createdAt: "2022-03-29T08:45:50.206Z",
        updatedAt: "2022-03-29T08:45:50.206Z",
        __v: 0,
      },
    ];

    const holidayData: any[] = [];

    for (let i = 1; i <= 30; i++) {
      holidayData.push({ name: `${"jan"}`, i: `${i}` });
    }

    return {
      content,
      dummyData,
      headers,
      holidayData,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
