<template>
  <Suspense>
    <div
      :class="openDefaultHolidays ? ' -translate-x-0' : 'translate-x-full'"
      class="
        bg-white
        w-full
        sm:w-1/3
        fixed
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
        z-30
        md:pb-4
        duration-500
        ease-in-out
        transform
        transition
      "
      id="add-new-members"
    >
      <div id="top" class="">
        <div class="flex justify-between mb-3" id="title">
          <p class="font-bold">Default Holidays</p>
          <button @click="$emit('closeDefaultHolidays')" class="focus:outline-none">
            <img src="@/assets/images/icon-close.svg" />
          </button>
        </div>

        <div class="mb-5" v-for="(value, index) in formatData" :key="index">
          <v-checkbox v-model="value[1]" class="capitalize mt-0 pt-0" :label="value[0]" color="rgba(165, 210, 118, 1)"></v-checkbox>
        </div>
      </div>

      <div class="flex justify-between mt-5" id="bottom">
        <button
          class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
          style="min-width: 110px"
          @click="$emit('closeDefaultHolidays')"
        >
          Cancel
        </button>
        <button
          class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
          style="min-width: 110px"
          @click="
            submit();
            $emit('closeDefaultHolidays');
          "
        >
          Done
        </button>
      </div>
    </div>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync, watch } from "@nuxtjs/composition-api";
import useHolidaySettings from "~/controller/FirstSettings/HolidaySettings";
import HolidayDataComponent from "~/data_component/Attendance/Holiday";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import { format } from "date-fns";

export default defineComponent({
  props: {
    openDefaultHolidays: Boolean,
  },
  setup() {
    const { setDefaultHoliday, getDefaultHolidays, updateDefaultHoliday } = useHolidaySettings();
    const { defaultHolidayData, defaultMonth } = HolidayDataComponent();
    const { allMember } = tableTeamMembers();
    const holidays = ref([]);
    let formatData = ref([]) as any;
    let id = ref();

    useAsync(() => {
      let param = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
      getDefaultHolidays(param);
    });

    watch(defaultHolidayData, () => {
      if (defaultHolidayData.value) {
        formatData.value = Object.entries(defaultHolidayData.value);
      }
    });

    watch(allMember, () => {
      id.value = allMember.value && allMember.value[0].teamId;
    });

    const submit = () => {
      const dayArr = formatData.value.reduce((accum, [k, v]) => {
        accum[k] = v;
        return accum;
      }, {});

      let params = { holiday: dayArr };

      let date = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
      if (date.month !== defaultMonth.value) {
        setDefaultHoliday(params, id.value);
      } else {
        updateDefaultHoliday(params, date);
      }
    };

    return { holidays, submit, defaultHolidayData, getDefaultHolidays, formatData };
  },

  async onBeforeMount() {
    let param = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
    await this.getDefaultHolidays(param);
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
