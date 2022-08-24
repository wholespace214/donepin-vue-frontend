<template>
  <div
    :class="isRoleModalShown ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-96
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
    id="edit-roles"
  >
    <div id="top" class="flex flex-col mb-5">
      <div class="flex justify-between mb-3" id="title">
        <p v-if="modalType === 'edit'" class="font-bold">Edit Role</p>
        <p v-else class="font-bold">Add Role</p>
        <button @click="isRoleModalShown = false" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>
      <ValidationObserver ref="form">
        <div class="flex flex-col space-y-10" id="select">
          <ValidationProvider rules="required" name="Role" v-slot="{ errors }">
            <v-text-field color="rgba(165, 210, 118, 1)" class="mt-0" label="Role" type="text" v-model="mainMenu.title" :error-messages="errors"></v-text-field>
          </ValidationProvider>
        </div>
        <div class="w-full mt-5">
          <div class="grid grid-cols-1 w-full mb-10 divide-gray-300 divide-y">
            <div :class="{ 'space-x-10': ipadUpSize }" class="flex justify-between py-3" id="menu">
              <span class="text-sm w-1/2 font-medium text-[#6A6A6A] capitalize"> Module </span>
              <span v-for="(data, index) in submenu" :key="index" class="text-sm w-1/2 flex justify-center font-medium text-[#6A6A6A] capitalize">
                {{ data }}
              </span>
            </div>

            <div v-for="(data, index) in mainMenu.dataAccess" :key="index" class="flex items-center justify-between" id="menu">
              <span class="text-xs m-0 mr-4 sm:mr-0 sm:text-sm w-1/2 p-0 pr-2 font-medium text-[#6A6A6A] capitalize">
                {{ data.title }}
              </span>
              <span
                v-for="(value, name, index) in data.valueSwitch"
                :key="index"
                :class="{ 'pl-20': laptopUpsize }"
                class="text-sm w-1/2 items-center flex justify-center font-medium text-[#6A6A6A] capitalize"
              >
                <v-switch
                  v-if="name === 'access'"
                  :disabled="data.title === 'work'"
                  color="rgba(145, 201, 89,1)"
                  inset
                  :dense="ipadUpSize == true ? false : true"
                  :value="data.valueSwitch['access']"
                  @click="data.valueSwitch['access'] = !data.valueSwitch['access']"
                >
                </v-switch>
                <v-switch
                  v-else
                  color="rgba(145, 201, 89,1)"
                  inset
                  :dense="ipadUpSize == true ? false : true"
                  :value="data.valueSwitch['manage']"
                  @click="data.valueSwitch['manage'] = !data.valueSwitch['manage']"
                ></v-switch>
              </span>
            </div>

            <div class="border-gray-300 border-solid border-t"></div>
          </div>

          <p v-if="modalType === 'edit'" class="text-sm mt-3 font-semibold text-[#6A6A6A]">Current members of this role</p>

          <div v-if="modalType === 'edit'" class="flex flex-col">
            <div v-for="(data, index) in selectedRoles.roleMembers" :key="index" class="flex wrapper-members justify-between items-center">
              <div id="members-info" class="flex items-center">
                <div class="relative">
                  <v-avatar :color="variantColorClass[index % 5]" class="capitalize font-weight-medium text-h6 white--text">
                    {{ data.initial }}
                  </v-avatar>

                  <div class="absolute top-[35px] left-[34px]">
                    <div class="h-3 w-3 bg-DPGREEN-500 ring-2 ring-white rounded-full"></div>
                  </div>
                </div>
                <v-list-item two-line>
                  <v-list-item-content class="pa-0">
                    <v-list-item-title class="DPGREY-600--text">
                      {{ data.memberName }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-body-2 DPGREY-600--text font-weight-regular">
                      {{ data.memberEmail }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="isRoleModalShown = false"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="submit"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import modalRoles from "~/data_component/Roles/ModalRoles";
import useResize from "~/controller/Resize";
import TableRoles from "~/data_component/Roles/TableRoles";
import useRole from "~/controller/Roles";
import useRolesSettings from "~/controller/FirstSettings/RolesSettings";
import useRoleEditController from "~/controller/Roles/roleModalController";
import useGeneralFeatures from "~/controller/GeneralFeatures";
export default defineComponent({
  setup() {
    const { submenu, variantColorClass } = modalRoles();
    const { isRoleModalShown, roles, selectedRoles, mainMenu, modalType } = TableRoles();
    const { asyncGetRoles } = useRolesSettings();
    const { validation } = useGeneralFeatures();
    const { submitEditRole } = useRoleEditController();
    const form = ref();

    const { laptopUpsize, ipadUpSize } = useResize();

    let roleRules = ref([]) as any;
    roleRules = [(v: any) => v.length >= 3 || "Minimum length is 3 characters"];

    useRole();

    function submit() {
      validation(form).then((res: Boolean) => {
        if (res) {
          submitEditRole();
          asyncGetRoles();
        }
      });
    }

    return {
      roles,
      variantColorClass,
      isRoleModalShown,
      submenu,
      mainMenu,
      ipadUpSize,
      laptopUpsize,
      selectedRoles,
      asyncGetRoles,
      submitEditRole,
      modalType,
      roleRules,
      submit,
      form,
    };
  },
  // methods: {
  //   submit() {
  //     // console.log("rolerules", roleRules);
  //     if (this.$refs.form as Vue & { validate: () => boolean }).validate()){
  //       this.submitEditRole();
  //     this.asyncGetRoles();
  //   },
  // },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
