<template>
  <Div id="content" class="p-5">
    <Div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <Div
        class="flex flex-row items-center justify-between pb-5 w-full"
        id="filter"
      >
        <div class="flex space-x-4 w-full">
          <button
            v-for="(data, index) in buttonDynamic"
            :key="index"
            @click="switchPage(data.value)"
            class="bg-white  justify-center border capitalize border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none hover:bg-DPGREEN-500 duration-200 hover:text-white items-center px-3 py-2 rounded-lg text-xs"
            v-text="data.text"
          ></button>
        </div>
      </Div>
    </Div>

    <keep-alive>
      <component :is="currentPage"></component>
    </keep-alive>

    <SettingsWorkspaceModalAddWorkspace
      :openAddWorkspace="openAddWorkspace"
      @closeAddWorkspace="openAddWorkspace = !openAddWorkspace"
    />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const currentPage = ref("AdminSettingsEmail");

    const openAddWorkspace = ref(false);

    const buttonDynamic = ref([
      {
        text: "email",
        value: "Email"
      },
      {
        text: "security",
        value: "Security"
      },
      {
        text: "push notification",
        value: "PushNotification"
      },
      {
        text: "language",
        value: "Language"
      },
      {
        text: "currency",
        value: "Currency"
      },

      {
        text: "payment gateway",
        value: "PaymentGateway"
      }
    ]);

    const switchPage = (value: string) =>
      (currentPage.value = `AdminSettings${value}`);

    return {
      openAddWorkspace,
      buttonDynamic,
      switchPage,
      currentPage
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
