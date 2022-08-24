<template>
  <div id="content" class="p-5  min-h-screen">
    <div
      id="members-filters"
      class="flex flex-row items-center justify-between pb-5"
    >
      <div class="flex justify-end flex-row items-center pb-5 w-full" id="head">
        <div class="flex">
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

            <button class="focus:outline-none block xl:hidden relative">
              <img src="@/assets/images/icon-settings.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <ProjectDetailDiscussionContent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
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
