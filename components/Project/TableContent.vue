<template>
  <Div class="flex flex-col">
    <!-- This is table head -->

    <Div class="flex justify-between" id="table-head">
      <Div class="flex justify-between w-[90%]">
        <Div class="flex items-end p-2 w-60">
          <Span class="text-small capitalize">Project</Span>
        </Div>
        <Div v-for="(data, index) in tableHead" :key="index" class="p-2 md:flex md:items-end hidden" :class="data.class">
          <Span class="text-small capitalize">
            {{ data.text }}
          </Span>
        </Div>
      </Div>
      <Div class="flex items-end p-2">
        <Span class="text-small">Actions</Span>
      </Div>
    </Div>

    <DashboardSkeleton v-if="skeletonLoader" type="list-item-avatar-three-line" :amount="5" />

    <Div class="" id="table-body">
      <draggable v-model="content">
        <Div v-for="(data, index) in allProjects" :key="index" class="bg-white flex hover:bg-gray-300 hover:bg-opacity-25 justify-between my-1 rounded-md">
          <Div class="flex justify-between w-[95%]" id="table-left">
            <Div class="flex items-center p-2 w-60">
              <Div class="flex items-center justify-between">
                <Div class="relative">
                  <v-avatar :color="data.color" size="40" class="capitalize font-weight-bold text-body-1 white--text"> </v-avatar>
                </Div>
              </Div>
              <Div @click="redirect(data.project.projectName)" class="flex-col cursor-pointer hidden justify-center p-2 w-full md:flex">
                <Span class="mb-0 capitalize text-sm font-semibold">
                  {{ data.projectName }}
                </Span>
                <P class="font-light mb-0">
                  <!-- {{ data.project.tasks }} -->
                </P>
              </Div>
            </Div>
            <Div class="p-2 w-40 md:flex md:items-center hidden">
              <Div class="flex flex-wrap">
                <Div id="member" v-for="(member, index) in data.memberId" :key="index" class="flex justify-between p-0 pr-1 pb-1">
                  <Div class="avatar-small text-lg font-semibold bg-red-500 cursor-pointer flex items-center justify-center relative rounded-full text-white uppercase"> kt </Div>
                </Div>
              </Div>
            </Div>
            <Div class="p-2 w-24 justify-center md:flex md:items-center hidden">
              <Span class="text-small capitalize">
                {{ formatDateTime(data.endDate, "date") }}
              </Span>
            </Div>
            <Div class="p-2 w-52 md:block hidden">
              <Div class="h-full">
                <Span class="text-small h-[62.667%] items-end w-full flex justify-end capitalize">
                  {{ timeLeft(data.endDate) }}
                </Span>

                <Div class="w-full h-2 items-end bg-gray-100">
                  <Div class="w-1/2 bg-DPGREEN-500 h-2"></Div>
                </Div>
              </Div>
            </Div>
            <Div class="p-2 w-36 md:flex justify-center md:items-center hidden">
              <Span class="bg-DPGREEN-100 bg-opacity-25 p-0 px-3 py-1 rounded-md capitalize text-DPGREEN-500">
                {{ data.status }}
              </Span>
            </Div>
            <Div id="priority" class="p-2 justify-center w-36 md:flex md:items-center hidden">
              <Span class="font-normal capitalize flex justify-center items-center rounded-md px-2" :class="priorityStyling(data.priority)">
                {{ data.priority }}
              </Span>
            </Div>
            <Div class="md:flex md:items-center hidden">
              <v-btn icon :color="data.favorite == true ? 'yellow' : ''">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </Div>
          </Div>
          <Div class="flex items-center justify-center p-2" id="table-right">
            <Div class="relative flex items-center">
              <Button @click="data.edit = !data.edit" class="focus:outline-none relative">
                <img src="~/assets/images/icon-modify.svg" />
              </Button>
              <Div v-show="data.edit" @click="data.edit = !data.edit" class="fixed cursor-pointer inset-0 h-full w-full z-10"></Div>
              <Div v-show="data.edit" class="absolute w-24 top-6 bg-white dp-shadow right-10 rounded-md z-20">
                <Span
                  @click="$emit('editProject')"
                  class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs"
                >
                  <img src="@/assets/images/icon-edit.svg" class="mr-2" />edit
                </Span>
                <Span class="border-b cursor-pointer border-gray-100 capitalize flex hover:bg-DPGREY-50 hover:bg-opacity-20 hover:duration-200 hover:flex-row hover:items-center px-4 py-3 text-xs">
                  <img src="@/assets/images/icon-delete.svg" class="mr-2" />delete
                </Span>
              </Div>
            </Div>
          </Div>
        </Div>
      </draggable>
    </Div>
  </Div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import draggable from "vuedraggable";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import useProject from "~/controller/Project";
import TableProject from "~/data_component/Projects/TableProject";
import { format, differenceInBusinessDays } from "date-fns";

export default defineComponent({
  components: { draggable },
  props: {
    allProjects: Array,
    editProject: Function,
  },

  setup() {
    const { tableHead, project, projectContent, priorityStyling, content } = TableProject();

    const { skeletonLoader } = useGeneralFeatures();

    const { redirect } = useProject();

    const formatDateTime = (date: any, type: string) => {
      if (type === "date") return format(new Date(date), "MM/dd/yyyy");
      else if (type == "day") return format(new Date(date), "EEEE");
      else if (type == "time") return format(new Date(date), "HH:mm");
    };

    const timeLeft = (end: string) => {
      console.log("new Date", new Date(), end);
      let days = differenceInBusinessDays(new Date(), new Date(end));
      console.log("days in timeLeft", days);
      return `${days} days`;
    };

    return {
      tableHead,
      project,
      content,
      projectContent,
      skeletonLoader,
      priorityStyling,
      redirect,
      formatDateTime,
      timeLeft,
    };
  },
});
</script>

<style scoped>
#table-body {
  border-radius: 0.7rem;
}
</style>
