<template>
  <div
    :class="openAddHolidays ? ' -translate-x-0' : 'translate-x-full'"
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
        <p class="font-bold">Holiday</p>
        <button @click="$emit('closeAddHolidays')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col mb-5">
        <div class="grid pt-5 grid-cols-2 gap-4">
          <span v-for="(data, index) in holidayField" :key="index">
            <ValidationObserver ref="form">
              <ValidationProvider rules="required" name="" v-slot="{ errors }">
                <v-select
                  v-if="data.type == 'select'"
                  class="capitalize"
                  color="rgba(145, 201, 89,1)"
                  item-color="DPGREEN-500"
                  clearable
                  v-model="data.value"
                  :label="data.label"
                  dense
                  :error-messages="errors"
                  required
                ></v-select>

                <v-text-field
                  v-else
                  color="rgba(165, 210, 118, 1)"
                  class="mt-0 pa-0 capitalize"
                  v-model="data.value"
                  :label="data.label"
                  :type="data.type"
                  :error-messages="errors"
                  required
                ></v-text-field>
              </ValidationProvider>
            </ValidationObserver>
          </span>
        </div>
      </div>

      <!-- <div class="w-full">
        <div @click="addMore" class="flex w-24 items-center cursor-pointer">
          <v-icon color="rgba(165, 210, 118, 1)"> mdi-plus </v-icon>
          <p class="mb-0 text-DPGREEN-400 font-semibold text-sm">Add more</p>
        </div>
      </div> -->
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('closeAddHolidays')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="
          submit();
          $emit('closeAddHolidays');
        "
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref } from "@nuxtjs/composition-api";
import useHolidaySettings from "~/controller/FirstSettings/HolidaySettings";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  props: {
    openAddHolidays: Boolean,
    closeAddHolidays: Function,
  },
  setup() {
    const { setHoliday } = useHolidaySettings();
    const { allMember } = tableTeamMembers();
    let id = ref();
    const { validation } = useGeneralFeatures();
    const form = ref();

    let holidayField = reactive([
      {
        label: "begin",
        value: "",
        type: "date",
      },
      {
        label: "end",
        value: "",
        type: "date",
      },
      {
        label: "holiday type",
        value: "",
        type: "text",
      },
      {
        label: "occasion",
        value: "",
        type: "text",
      },
    ]);

    const addMore = () => {
      holidayField.push(
        {
          label: "begin",
          value: "",
          type: "date",
        },
        {
          label: "end",
          value: "",
          type: "date",
        },
        {
          label: "holiday type",
          value: "",
          type: "text",
        },
        {
          label: "occasion",
          value: "",
          type: "text",
        }
      );
    };

    watch(allMember, () => {
      id.value = allMember.value && allMember.value[0].teamId;
    });

    const submit = () => {
      validation(form).then((res: any) => {
        if (res) {
          const arr = [] as any;
          let beginDate;
          let endDate;
          let holidayType;
          let occasion;
          holidayField.forEach((i, n) => {
            if (i.label === "begin") {
              beginDate = i.value;
            } else if (i.label === "end") {
              endDate = i.value;
            } else if (i.label === "holiday type") {
              holidayType = i.value;
            } else if (i.label === "occasion") {
              occasion = i.value;
            }
            arr.push({
              beginDate,
              endDate,
              holidayType,
              occasion,
              form,
            });
          });
          if (id) {
            setHoliday(arr[arr.length - 1], id.value);
          }
        }
      });
    };

    return { holidayField, addMore, submit };
  },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
