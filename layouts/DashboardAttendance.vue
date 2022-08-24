<template>
  <v-app v-resize="onResize" id="inspire">
    <v-app-bar app flat class="pa-0 mb-5" height="">
      <div class="flex w-full flex-col">
        <DashboardHeader :title="'Attendance'" @openSideBar="sidebar = !sidebar" :SideBar="sidebar" />
        <DashboardMenu :menu="attendanceMenu" />
      </div>
    </v-app-bar>

    <v-main class="text-standard BACKGROUNDCOLOR">
      <div class="pt-5 text-standard">
        <nuxt />
      </div>
    </v-main>

    <v-navigation-drawer color="#10182b" v-model="sidebar" app>
      <v-list-item class="pa-0">
        <v-list-item-content class="pa-0">
          <div class="border-b flex justify-between border-gray-800 border-solid p-4" id="brand">
            <img src="~/assets/images/donepin-logo-light.svg" />
            <img src="~/assets/images/icon-burger-menu-open.svg" class="cursor-pointer" alt="" @click="handleHamburger" />
          </div>
        </v-list-item-content>
      </v-list-item>

      <nav class="text-white">
        <NuxtLink
          v-for="data in sidebarMenu"
          :key="data.text"
          :to="data.url"
          class="flex text-sm font-medium focus:outline-none hover:-translate-x-1 hover:-translate-y-1 hover:bg-opacity-5 hover:bg-white items-center px-3 py-2 text-left transform transition w-full"
        >
          <img :src="require(`~/assets/images/${data.icon}`)" class="p-2" />
          {{ data.text }}
        </NuxtLink>
      </nav>

      <div class="border-gray-800 border-solid border-t" id="favorites">
        <div class="items-start pb-1 pt-3 px-5">
          <span class="text-gray-500 text-xs uppercase">Favorite Projects</span>
        </div>
        <div v-for="data in favoriteProject" :key="data.text" class="flex hover:bg-opacity-5 hover:bg-white hover:duration-200 hover:ml-1 items-start px-5 py-2">
          <button :style="`background-color: ${data.buttonRoundColor}`" class="navbar-favorite-projects-avatar"></button>
          <a href="" target="_pg_blank" class="text-sm font-weight-bold" v-text="data.text"></a>
        </div>
      </div>

      <template v-slot:append>
        <DashboardFooterSetting />
      </template>
    </v-navigation-drawer>

    <v-footer v-if="ipadUpSize ? false : true" :app="ipadUpSize ? false : true" color="transparent" style="z-index: 50">
      <DashboardFooter @sidebar="sidebar = !sidebar" />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import SidebarPage from "@/data_component/Dashboard/Sidebar";
import allMenu from "~/data_component/Dashboard/AllMenu";

import useResize from "~/controller/Resize";

export default defineComponent({
  setup() {
    const sidebar = ref(true);

    const { sidebarMenu, favoriteProject } = SidebarPage();

    const { attendanceMenu } = allMenu();

    const { onResize, ipadUpSize } = useResize();

    const handleHamburger = () => {
      sidebar.value = !sidebar.value;
    };

    return {
      onResize,
      ipadUpSize,
      sidebarMenu,
      favoriteProject,
      sidebar,
      attendanceMenu,
      handleHamburger,
    };
  },
});
</script>

<style scoped>
a {
  color: white;
}
</style>
