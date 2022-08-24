<template>
  <div class="flex w-full flex-col space-y-6">
    <p class="mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque,
      veritatis quam facere doloremque in esse voluptatem tempore officiis quis
      dolorem optio eligendi, porro hic reiciendis reprehenderit, a vero
      dignissimos!
    </p>

    <div class="w-full flex space-y-10 flex-col">
      <div id="members-teams" class="w-1/2 flex justify-between items-center">
        <div class="flex space-y-3 flex-col" id="members">
          <p class="mb-0 capitalize font-semibold text-sm">
            members
          </p>

          <div class="flex space-x-1" id="assignet-to">
            <div
              v-for="data in 3"
              :key="data"
              class="rounded-full h-6 flex items-center justify-center w-6 bg-[#D4BE45]"
            >
              <span class="uppercase py-1 text-white" v-text="'KT'"></span>
            </div>
          </div>
        </div>

        <div class="flex space-y-3 flex-col" id="teams">
          <p class="mb-0 capitalize font-semibold text-sm">
            teams
          </p>

          <div class="flex space-x-1" id="assignet-to">
            <v-chip small class="capitalize">
              marketing
            </v-chip>
            <v-chip small class="capitalize">
              production
            </v-chip>
          </div>
        </div>
      </div>

      <!-- Status & Time Information -->
      <div class="w-full flex justify-between">
        <!-- left side -->
        <div class="w-1/2 flex justify-between">
          <div id="status" class="flex flex-col space-y-2">
            <p class="mb-0 capitalize font-semibold text-sm">
              status
            </p>
            <v-chip small color="yellow" class="capitalize">
              working
            </v-chip>
          </div>

          <div id="priority" class="flex flex-col space-y-2">
            <p class="mb-0 capitalize font-semibold text-sm">
              priority
            </p>
            <div id="priority" class="w-24 md:flex md:items-center hidden">
              <span
                class="font-normal capitalize flex items-center rounded-md px-2"
                :class="priorityStyling('high')"
                v-text="'high'"
              >
              </span>
            </div>
          </div>

          <div id="visibility" class="flex flex-col space-y-2">
            <p class="mb-0 capitalize font-semibold text-sm">
              visibility
            </p>
            <div
              id="visibility"
              class="md:flex space-x-2 md:items-center hidden"
            >
              <img
                src="@/assets/images/lock.svg"
                class="w-[20px] h-[15px]"
                alt=""
              />

              <p class="mb-0 capitalize font-semibold text-sm">
                members only
              </p>
            </div>
          </div>
        </div>

        <!-- right side -->
        <div class="w-1/2 flex justify-end">
          <div id="start-date" class="flex flex-col space-y-2">
            <p class="mb-0 text-end capitalize font-semibold text-sm">
              start date
            </p>
            <div
              id="start-date"
              class="w-24 md:flex justify-end md:items-center hidden"
            >
              <span class="font-normal flex justify-end items-center text-end">
                12.02.2021
              </span>
            </div>
          </div>

          <div id="end-date" class="flex flex-col space-y-2">
            <p class="mb-0 text-end capitalize font-semibold text-sm">
              end date
            </p>
            <div
              id="end-date"
              class="w-24 md:flex justify-end md:items-center hidden"
            >
              <span class="font-normal flex justify-end items-center text-end">
                12.02.2021
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress -->
      <div class="w-full flex flex-col space-y-2">
        <div class="w-full flex items-center justify-between">
          <span class="font-normal items-center text-end">
            12.02.2021
          </span>
          <span class="font-normal items-center text-end">
            39 days left
          </span>
          <span class="font-normal flex justify-end items-center text-end">
            12.02.2022
          </span>
        </div>

        <div class="w-full h-2 rounded-sm bg-gray-100">
          <div class="w-1/2 rounded-md bg-DPGREEN-500 h-2"></div>
        </div>
      </div>
      <!-- Time line -->
      <div class="w-full p-4 flex justify-between">
        <p class="mb-0 capitalize font-semibold text-sm">
          Tasks
        </p>
        <div class="flex flex-col w-1/2 space-y-2">
          <canvas id="lineChart" ref="lineChart" class="w-1/2 block"></canvas>
        </div>

        <div class="flex justify-start w-1/2 flex-col space-y-2">
          <p class="mb-0 capitalize font-semibold text-sm">
            Timeline
          </p>

          <div class="w-full  flex  flex-col">
            <div
              v-for="data in 3"
              :key="data"
              class="flex space-x-3 border-l-2 border-gray-300"
            >
              <div id="timeline-wrapper" class="relative flex space-x-3 my-3">
                <div
                  class="w-[15px] h-[15px] rounded-full  absolute top-0 left-[-8px] bg-DPGREEN-500"
                ></div>
                <div class="flex-col justify-center flex">
                  <p
                    id="timeline"
                    class="mb-0 text-sm capitalize font-semibold"
                  >
                    new message from tom bai {{ data }}
                  </p>
                  <p id="date" class="font-light mb-0">
                    12.01.2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useFetch
} from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import TableProject from "~/data_component/Projects/TableProject";

export default defineComponent({
  setup() {
    const lineChart = ref();
    const { priorityStyling, chartData, dataOptions } = TableProject();

    const chart = ref();

    const { chartInit } = useGeneralFeatures();

    const runningChart = () => {
      chart.value = chartInit(
        lineChart.value,
        "doughnut",
        chartData.value,
        dataOptions.value.options
      );

      //Resize canvas
      chart.value.canvas.parentNode.style.width = "300px";
      chart.value.canvas.parentNode.style.height = "300px";
    };

    onMounted(() => {
      runningChart();
    });

    return {
      lineChart,
      priorityStyling
    };
  }
});
</script>

<style>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) ease;
}
</style>
