<template>
  <div id="content" class="p-5">
    <div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div class="capitalize">
          <button
            @click="openModal = !openModal"
            class="bg-white bor border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 hover:duration-200 hover:text-white items-center px-4 py-2 rounded-lg text-xs"
          >
            Add coupon
          </button>
        </div>

        <div class="flex">
          <div class="flex flex-row" id="select">
            <div
              v-for="(data, index) in teamMembersFilter"
              :key="index"
              class="hidden xl:block w-52 mx-2 bg-white rounded-md"
            >
              <div class="focus-within:text-DPGREY-400 relative">
                <input
                  @focus="getClientPosition(data.allData, $event, index)"
                  @blur="toggleOption"
                  readonly
                  :placeholder="data.value.length > 0 ? data.value : data.label"
                  class="dp-shadow w-52 capitalize cursor-pointer focus:bg-white focus:outline-none focus:text-gray-900 p-2 rounded-md text-DPGREY-500"
                />
                

                <span class="absolute flex inset-y-0 items-center right-0 pr-2">
                  <button
                    @click="resetOption"
                    v-if="data.dataActive !== null"
                    class="p-1"
                  >
                    <v-icon small color="ARROWCOLOR">
                      mdi-close
                    </v-icon>
                  </button>
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <img
                      class="w-3 h-3"
                      src="~assets/images/icon-arrow-down.svg"
                      alt=""
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <!-- This is form search -->
          <div class="flex flex-row" id="search">
            <div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <div
                class="focus-within:text-DPGREY-400 relative text-DPGREY-400"
              >
                <span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="h-6 text-DPGREY-200 w-4"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </div>

            <button
              class="focus:outline-none block xl:hidden relative"
              @click="filterModal = !filterModal"
            >
              <img src="@/assets/images/icon-settings.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <AdminCouponsTableContent />

    <!-- Option select dropdown -->
    <transition class="" name="slide-fade">
      <div
        v-if="openDropdown"
        :class="openDropdown ? 'duration-200 absolute h-32' : 'opacity-0'"
        class="px-2 rounded-lg overflow-auto py-4 z-50 bg-white dp-shadow"
        :style="
          openDropdown
            ? `left: ${leftPosition(sizing.left)}px; right: ${
                sizing.right
              }px; top: ${topPosition(sizing.top)}px; bottom: ${
                sizing.bottom
              }px; width: ${sizing.width}px`
            : false
        "
      >
        <div class="flex justify-start flex-col ">
          <div
            v-for="(data, index) in elementOption"
            :key="index"
            @click="newValue(data, index)"
            :class="
              index == checkDataActive()
                ? 'bg-DPGREEN-100  text-DPGREEN-400'
                : 'hover:text-DPGREEN-500 cursor-pointer hover:ml-2 hover:duration-200'
            "
            class="py-2 rounded-md"
          >
            <span class="capitalize ml-2 cursor-pointer" v-text="data"></span>
          </div>
        </div>
      </div>
    </transition>

    <DashboardModalFilter
      @closeFilter="filterModal = !filterModal"
      :openFilter="filterModal"
      :dataFilter="teamMembersFilter"
    />

    <MembersModalEditMembers
      @closeEditMembers="editMember = !editMember"
      :openEditMembers="editMember"
      :dataFilter="teamMembersFilter"
    />

    <AdminCouponsModalAddCoupons
      :openCoupuns="openModal"
      @closeAddCoupuns="openModal = !openModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useOptionSelect from "~/controller/OptionSelect";
import allFilter from "~/data_component/Dashboard/AllFilter";

export default defineComponent({
  setup() {
    const filterModal = ref(false);

    const editMember = ref(false);

    const openModal = ref(false);

    const { teamMembersFilter } = allFilter();

    const {
      elementOption,
      openDropdown,
      sizing,
      resetOption,
      checkDataActive,
      newValue,
      toggleOption,
      getClientPosition
    } = useOptionSelect(teamMembersFilter);

    const topPosition = (position: any) => position - 30;

    const leftPosition = (position: any) => position - 255;

    return {
      topPosition,
      leftPosition,
      toggleOption,
      newValue,
      resetOption,
      getClientPosition,
      checkDataActive,
      teamMembersFilter,
      openModal,
      editMember,
      sizing,
      filterModal,
      elementOption,
      openDropdown
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
