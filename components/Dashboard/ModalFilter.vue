<template>
  <!-- Modal Setting Filters -->
  <div
    :class="openFilter ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      fixed
      xl:hidden
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
      w-72
      z-30
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="filters-settings"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-5" id="title">
        <p class="font-bold">Filter</p>
        <button @click="$emit('closeFilter')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-4" id="select">
        <div v-for="(data, index) in dataFilter" :key="index" @click="getClientPosition(data.allData, $event, index)" class="rounded-xl modal-filter">
          <div class="focus-within:text-DPGREY-400 modal-filter cursor-pointer dp-shadow rounded-md px-2 relative text-DPGREY-400">
            <input
              type="search"
              @blur="toggleOption"
              readonly
              :placeholder="data.value.length > 0 ? data.value : data.label"
              class="capitalize cursor-pointer modal-filter focus:outline-none focus:text-gray-900 p-2 text-DPGREY-500"
            />

            <span class="absolute flex inset-y-0 items-center right-5">
              <button @click="resetOption" v-if="data.dataActive !== null" class="p-1">
                <v-icon small color="ARROWCOLOR"> mdi-close </v-icon>
              </button>
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <img class="w-3 h-3" src="~assets/images/icon-arrow-down.svg" alt="" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeFilter')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="$emit('closeFilter')"
      >
        Done
      </button>
    </div>

    <transition name="slide-fade">
      <div
        v-if="openDropdown"
        :class="openDropdown ? 'duration-200 absolute h-32' : 'opacity-0'"
        class="px-2 rounded-lg overflow-auto py-4 z-50 bg-white dp-shadow"
        :style="openDropdown ? `top: ${topPosition}px; left: 20px; width: ${sizing.width}px` : false"
      >
        <div class="flex justify-start flex-col">
          <div
            v-for="(data, index) in elementOption"
            :key="index"
            @click="newValue(data, index)"
            :class="index == checkDataActive() ? 'bg-DPGREEN-100  text-DPGREEN-400' : 'hover:text-DPGREEN-500 cursor-pointer hover:ml-2 hover:duration-200'"
            class="py-2 rounded-md"
          >
            <button class="capitalize ml-2" v-text="data"></button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";
import useOptionSelect from "~/controller/OptionSelect";

export default defineComponent({
  props: ["openFilter", "emits", "dataFilter"],
  setup(props) {
    const { elementOption, openDropdown, sizing, resetOption, checkDataActive, newValue, toggleOption, getClientPosition } = useOptionSelect(props.dataFilter);

    const topPosition = computed(() => sizing.value.top + 36);

    return {
      elementOption,
      openDropdown,
      sizing,
      topPosition,
      resetOption,
      checkDataActive,
      newValue,
      toggleOption,
      getClientPosition,
    };
  },
});
</script>

<style scoped>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) eas;
}
</style>
