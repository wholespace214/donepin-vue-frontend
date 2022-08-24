<template>
  <!-- by default is fixed -->
  <footer
    class="bg-DPGREY-800 block fixed w-full bottom-0 left-0 z-40 md:hidden"
  >
    <div class="flex items-center justify-between max-w-xl mx-auto pa-2">
      <div class="flex items-center px-3" id="menu">
        <button
          @click="$emit('sidebar')"
          class="focus:outline-none mobile-menu-button"
        >
          <!-- it is for sidebar -->
          <img src="@/assets/images/icon-burger-menu-mobile.svg" />
        </button>
      </div>
      <div class="px-3" id="add">
        <button
          @click="modalAdd = !modalAdd"
          class="focus:outline-none relative"
        >
          <img src="@/assets/images/icon-header-add-mobile.svg" />
        </button>
        <div
          v-show="modalAdd"
          @click="modalAdd = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>
        <div
          v-show="modalAdd"
          class="absolute bg-white bottom-16 dark:bg-gray-800 dp-shadow inset-x-0 mx-24 overflow-hidden rounded-t-md z-20"
        >
          <div>
            <span
              v-for="data in modalAddComponent"
              :key="data.text"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <img
                src="~/assets/images/icon-header-add.svg"
                style="width: 14px; height: 14px;"
              />
              <p
                class="font-weight-light text-sm mx-2 mb-0"
                v-text="data.text"
              ></p>
            </span>
          </div>
        </div>
      </div>
      <div class="px-3" id="notification">
        <button
          @click="modalNotification = !modalNotification"
          class="focus:outline-none relative"
        >
          <img src="@/assets/images/icon-header-notification-mobile.svg" />
        </button>
        <div
          v-show="modalNotification"
          @click="modalNotification = !modalNotification"
          class="fixed inset-0 h-full w-full z-10"
        ></div>
        <div
          v-show="modalNotification"
          class="absolute bg-white bottom-16 dark:bg-gray-800 dp-shadow inset-x-0 mx-10 overflow-hidden rounded-t-md z-20"
        >
          <div>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">
                <span href="#" class="font-medium">Sara Salah</span>
                replied the
                <span class="text-DPGREEN-500" href="#">Main Logo</span>
                project. 2m
              </p>
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">
                <span href="#" class="font-medium">Slick Net</span>
                accepted your invitation. 45m
              </p>
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">
                <span href="#" class="font-medium">Jane Doe</span>
                liked your
                <span class="text-DPGREEN-500" href="#">Test with TDD</span>
                comment. 1h
              </p>
            </a>
            <a
              href="#"
              class="duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">
                <span href="#" class="font-medium">Abigail Bennett</span>
                assigned you to the
                <span class="text-DPGREEN-500" href="#">Revision Logo</span>
                task. 3h
              </p>
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">
                <span href="#" class="font-medium">Sara Salah</span>
                replied the
                <span class="text-DPGREEN-500" href="#">Main Logo</span>
                project. 2m
              </p>
            </a>
          </div>
          <a
            href="#"
            class="bg-DPGREEN-500 block dark:bg-gray-700 hover:bg-DPGREEN-400 py-3 text-center white--text"
            >See all notifications</a
          >
        </div>
      </div>
      <div class="px-3" id="search">
        <button
          @click="modalSearch = !modalSearch"
          class="focus:outline-none relative"
        >
          <img
            src="@/assets/images/icon-header-search-mobile.svg"
            class="my-1"
          />
        </button>
        <div
          v-show="modalSearch"
          @click="modalSearch = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>
        <div
          v-show="modalSearch"
          class="absolute bg-white bottom-16 dark:bg-gray-800 dp-shadow inset-x-0 mx-10 overflow-hidden rounded-md z-20"
        >
          <div
            class="focus-within:text-DPGREY-400 pr-2 relative text-DPGREY-400"
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
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="search"
              class="focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-4 rounded-t-md text-DPGREY-500 w-full"
              placeholder="Search for projects, tasks, members, clients..."
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div class="px-3 cursor-pointer" id="profile">
        <div
          @click="modalProfile = !modalProfile"
          class="avatar bg-red-500 flex h-9 items-center justify-center m-1 relative rounded-full text-sm text-white uppercase w-9"
        >
          <div
            class="absolute bg-DPGREEN-500 bg-dplgreen-500 border-2 border-white bottom-0 h-3 right-0 rounded-full w-3"
          ></div>
          QW
        </div>
        <div
          v-show="modalProfile"
          @click="modalProfile = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>
        <div
          v-show="modalProfile"
          class="absolute bg-white bottom-16 dark:bg-gray-800 dp-shadow inset-x-0 mx-10 overflow-hidden rounded-t-md z-20"
        >
          <div>
            <div class="flex items-center justify-between pt-3 px-4">
              <p class="font-semibold">Current Workspace</p>
              <img src="@/assets/images/icon-workspace-settings.svg" />
            </div>
            <a
              href="#"
              class="duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors"
            >
              <p class="font-medium">Personal</p>
              <img src="@/assets/images/icon-check.svg" />
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors"
            >
              <p class="font-light">Mola Company</p>
            </a>
            <div class="flex items-center justify-between pt-3 px-4">
              <p class="font-semibold">Current Plan</p>
              <img src="@/assets/images/icon-workspace-settings.svg" />
            </div>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors"
            >
              <p class="font-light">Free Plan</p>
              <button
                class="bg-DPGREEN-500 bg-dplgreen-500 flex flex-row focus:outline-none items-center px-2 py-1 rounded-lg text-white text-xs"
              >
                Upgrade
              </button>
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center justify-between px-4 py-3 transform transition-colors"
            >
              <p class="font-light">Profile</p>
            </a>
            <a
              href="#"
              class="border-b border-gray-100 duration-200 flex hover:bg-DPGREY-50 hover:bg-opacity-20 items-center px-4 py-3 transform transition-colors"
            >
              <p class="font-light">Settings</p>
            </a>
          </div>
          <a
            href="#"
            class="bg-DPGREEN-500 block dark:bg-gray-700 hover:bg-DPGREEN-400 px-4 py-3 text-left white--text"
            target="_pg_blank"
            >Log Out</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HeaderComponent from "~/data_component/Dashboard/Header";

export default defineComponent({
  setup() {
    const {
      modalProfile,
      modalNotification,
      modalSearch,
      modalAdd,
      modalAddComponent
    } = HeaderComponent();

    return {
      modalProfile,

      modalNotification,
      modalSearch,
      modalAdd,
      modalAddComponent
    };
  }
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
