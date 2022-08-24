<template>
  <div class="bg-white flex items-center pb-2 place-content-between pt-3 px-5 mt-5 sticky top-0 z-10" id="header">
    <div class="flex justify-between" id="brand">
      <div v-if="SideBar === false" @click="$emit('openSideBar')" style="cursor: pointer" class="">
        <div :style="`width: 21px; height: 2px; background-color:#91C959; margin: 4px 0`"></div>
        <div :style="`width: 21px; height: 2px; background-color: #91C959; margin: 4px 0`"></div>
        <div :style="`width: 21px; height: 2px; background-color: #91C959; margin: 4px 0`"></div>
      </div>
      <div class="flex w-1/2">
        <div class="flex w-full">
          <img src="~/assets/images/icon-header-team.svg" class="mr-2" />
          <span class="font-bold text-gray-800 text-lg capitalize">
            {{ title }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="hidden mt-1 px-3 relative md:block" id="add">
        <button @click="modalAdd = !modalAdd" class="focus:outline-none relative">
          <img src="~/assets/images/icon-header-add.svg" />
        </button>
        <div v-show="modalAdd" @click="modalAdd = !modalAdd" class="fixed inset-0 h-full w-full z-10"></div>
        <div v-show="modalAdd" class="absolute bg-white dark:bg-gray-800 dp-shadow mt-2 overflow-hidden right-0 rounded-md w-48 z-20">
          <div>
            <span
              v-for="data in modalAddComponent"
              :key="data.text"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <img src="~/assets/images/icon-header-add.svg" style="width: 14px; height: 14px" />
              <p class="font-weight-light text-sm mx-2 mb-0" v-text="data.text"></p>
            </span>
          </div>
        </div>
      </div>
      <button
        @click="openTimeTracker = !openTimeTracker"
        class="bg-DPGREEN-500 bg-dplgreen-500 flex flex-row focus:outline-none items-center ml-2 px-2 py-1 rounded-lg text-white text-xs w-24 md:mr-2"
        name="timer"
      >
        <img src="~/assets/images/icon-header-clock.svg" class="mr-2" />12h 12m
      </button>
      <div class="hidden mt-1 px-3 relative md:block" id="notification">
        <button @click="modalNotification = !modalNotification" class="focus:outline-none relative">
          <img src="~/assets/images/icon-header-notification.svg" />
        </button>
        <div v-show="modalNotification" @click="modalNotification = !modalNotification" class="fixed inset-0 h-full w-full z-10"></div>
        <div v-show="modalNotification" class="absolute bg-white dark:bg-gray-800 dp-shadow mt-2 overflow-hidden right-0 rounded-md w-80 z-20">
          <div>
            <a
              href="#"
              class="border-b font-weight-light text-sm text-black border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-weight-light text-sm mb-0">
                <span href="#" class="font-medium">Sara Salah</span> replied the
                <span class="text-DPGREEN-500" href="#">Main Logo</span>
                project. 2m
              </p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="font-weight-light text-sm mb-0"><span href="#" class="font-medium">Slick Net</span> accepted your invitation. 45m</p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="font-weight-light text-sm mb-0">
                <span href="#" class="font-medium">Jane Doe</span> liked your
                <span class="text-DPGREEN-500" href="#">Test with TDD</span>
                comment. 1h
              </p>
            </a>
            <a href="#" class="duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="font-weight-light text-sm mb-0">
                <span href="#" class="font-medium">Abigail Bennett</span>
                assigned you to the
                <span class="text-DPGREEN-500" href="#">Revision Logo</span>
                task. 3h
              </p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="font-weight-light text-sm mb-0">
                <span href="#" class="font-medium">Sara Salah</span> replied the
                <span class="text-DPGREEN-500" href="#">Main Logo</span>
                project. 2m
              </p>
            </a>
          </div>
          <a href="#" class="bg-DPGREEN-500 block dark:bg-gray-700 hover:bg-DPGREEN-400 py-2 text-center white--text"> See all notifications </a>
        </div>
      </div>
      <div class="hidden mt-1 px-3 relative md:block" id="search">
        <button @click="modalSearch = !modalSearch" class="focus:outline-none relative">
          <img src="~/assets/images/icon-header-search.svg" class="my-1" />
        </button>
        <div v-show="modalSearch" @click="modalSearch = !modalSearch" class="fixed inset-0 h-full w-full z-10"></div>
        <div v-show="modalSearch" class="absolute bg-white dp-shadow mt-2 overflow-hidden pr-3 right-0 rounded-md w-96 z-20">
          <div class="focus-within:text-DPGREY-400 pr-2 relative text-DPGREY-400">
            <span class="absolute flex inset-y-0 items-center left-0 pl-1">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 text-DPGREY-200 w-4">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="search"
              class="focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500 w-full"
              placeholder="Search for projects, tasks, members, clients..."
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div class="hidden mt-1 px-3 relative md:block" id="help">
        <button @click="modalSupport = !modalSupport" class="focus:outline-none relative">
          <img src="~/assets/images/icon-header-help.svg" class="my-1" />
        </button>
        <div v-show="modalSupport" @click="modalSupport = !modalSupport" class="fixed inset-0 h-full w-full z-10"></div>
        <div v-show="modalSupport" class="absolute bg-white dark:bg-gray-800 dp-shadow mt-2 overflow-hidden right-0 rounded-md w-32 z-20">
          <div>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="mb-0 text-sm font-weight-normal">FAQ</p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="mb-0 text-sm font-weight-normal">Tutorials</p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="mb-0 text-sm font-weight-normal">Support</p>
            </a>
          </div>
        </div>
      </div>
      <div class="hidden mt-1 px-3 relative md:block" id="profile">
        <div @click="modalProfile = !modalProfile" class="avatar bg-red-500 flex items-center justify-center m-1 relative rounded-full text-sm text-white uppercase">
          <div class="absolute bg-DPGREEN-500 bg-dplgreen-500 border-2 border-white bottom-0 h-3 right-0 rounded-full w-3"></div>
          QW
        </div>

        <div class="cursor-auto" @click="modalProfile = false">
          <v-overlay color="transparent" :z-index="50" :value="modalProfile"> </v-overlay>
        </div>

        <div v-show="modalProfile" class="absolute modal-profile bg-white dark:bg-gray-800 dp-shadow mt-2 overflow-hidden right-0 rounded-md w-56 z-20">
          <div>
            <div class="flex items-center justify-between pt-3 px-4">
              <p class="font-semibold text-sm">Current Workspace</p>
              <img src="~/assets/images/icon-workspace-settings.svg" />
            </div>
            <a href="#" class="duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors">
              <p class="font-medium text-sm">Personal</p>
              <img src="~/assets/images/icon-check.svg" />
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors">
              <p class="font-light text-sm">Mola Company</p>
            </a>

            <div class="flex items-center justify-between pt-3 px-4">
              <p class="font-semibold text-s">Current Plan</p>
              <img src="~/assets/images/icon-workspace-settings.svg" />
            </div>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors">
              <p class="font-light text-sm">Free Plan</p>
              <button class="bg-DPGREEN-500 bg-dplgreen-500 flex flex-row focus:outline-none items-center px-2 py-1 rounded-lg text-white text-xs">Upgrade</button>
            </a>
            <a @click="profile = !profile" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors">
              <p class="font-light text-sm">Profile</p>
            </a>
            <a href="#" class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors">
              <p class="font-light text-sm">Settings</p>
            </a>
          </div>
          <a @click="logout" class="bg-DPGREEN-500 text-sm font-semibold block dark:bg-gray-700 hover:bg-DPGREEN-400 px-4 py-2 text-left white--text" target="_pg_blank"> Log Out </a>
        </div>
      </div>
    </div>

    <!-- Modal  -->

    <DashboardTimeClock :openTimeTracker="openTimeTracker" @close="openTimeTracker = !openTimeTracker" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import useAPI from "~/api";
import HeaderComponent from "~/data_component/Dashboard/Header";
import members from "~/data_component/Members";

export default defineComponent({
  props: {
    title: String,
    SideBar: Boolean,
    openSideBar: Function,
  },
  setup(props) {
    console.log("propsin header", props);
    const { modalProfile, modalSupport, modalNotification, modalSearch, modalAdd, modalAddComponent } = HeaderComponent();

    const { profile } = members();

    const { router } = useAPI();

    const openTimeTracker = ref(false);

    const logout = () => {
      localStorage.clear();
      router.push("/");
    };

    return {
      modalProfile,
      modalSupport,
      modalNotification,
      modalSearch,
      modalAdd,
      openTimeTracker,
      modalAddComponent,
      logout,
      profile,
    };
  },
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}

p {
  margin-bottom: 0px;
}
</style>
