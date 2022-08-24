<template>
  <v-app v-resize="onResize" id="inspire">
    <v-app-bar app flat class="pa-0 mb-5" height="">
      <Div class="flex w-full flex-col">
        <DashboardHeader :title="'dashboard'" @openSideBar="sidebar = !sidebar" :SideBar="sidebar" />
        <DashboardMenu :menu="menu" />
      </Div>
    </v-app-bar>

    <v-main class="text-standard BACKGROUNDCOLOR">
      <Div class="pt-5 text-standard">
        <nuxt />
      </Div>
    </v-main>

    <v-navigation-drawer color="#10182b" v-model="sidebar" app>
      <v-list-item class="pa-0">
        <v-list-item-content class="pa-0">
          <Div class="border-b flex justify-between border-gray-800 border-solid p-4" id="brand">
            <img src="~/assets/images/donepin-logo-light.svg" />
            <img src="~/assets/images/icon-burger-menu-open.svg" class="cursor-pointer" alt="" @click="handleHamburger" />
          </Div>
        </v-list-item-content>
      </v-list-item>

      <Nav class="text-white">
        <NuxtLink
          v-for="data in sidebarMenuAdmin"
          :key="data.text"
          :to="data.url"
          class="flex text-sm font-medium focus:outline-none hover:-translate-x-1 hover:-translate-y-1 hover:bg-opacity-5 hover:bg-white items-center px-3 py-2 text-left transform transition w-full"
        >
          <img :src="require(`~/assets/images/${data.icon}`)" class="p-2" />
          {{ data.text }}
        </NuxtLink>
      </Nav>

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
import { defineComponent, ref, useRoute, computed, onMounted } from "@nuxtjs/composition-api";
import SidebarPage from "@/data_component/Dashboard/Sidebar";

import useResize from "~/controller/Resize";
import allMenu from "~/data_component/Dashboard/AllMenu";

export default defineComponent({
  setup() {
    const sidebar = ref(true);

    const route = useRoute();

    const { adminMenu, dashboardMenu } = allMenu();

    const { sidebarMenuAdmin } = SidebarPage();

    const { onResize, ipadUpSize } = useResize();

    const menu = computed(() => (route.value.name == "Dashboard" ? dashboardMenu.value : adminMenu.value));

    onMounted(() => {
      console.log(route.value.name);
    });

    const handleHamburger = () => {
      sidebar.value = !sidebar.value;
    };

    return {
      onResize,
      ipadUpSize,
      sidebarMenuAdmin,
      sidebar,
      menu,
      adminMenu,
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
