<template>
  <div
    :class="profile ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-2/3
      xl:w-5/12
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
      z-10
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="edit-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex align-center justify-between mb-3" id="title">
        <p class="font-bold mb-0">Profile & Notification</p>
        <button @click="profile = !profile" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex w-full mt-5 space-x-5">
        <div class="relative">
          <v-avatar color="DPYELLOW" size="100" class="uppercase font-weight-medium text-h4 white--text capitalize">
            {{ initials }}
          </v-avatar>

          <div class="absolute cursor-pointer top-[16px] left-[44px] text-white">
            <img src="@/assets/images/icon-edit-white.svg" />
          </div>

          <div class="absolute top-[78px] left-[44px] cursor-pointer">
            <img src="@/assets/images/icon-delete.svg" />
          </div>
        </div>

        <div class="w-full flex flex-col justify-center px-4">
          <v-text-field color="rgba(145, 201, 89,1)" label="Full Name" class="text-lg" v-model="fullName" type="text"></v-text-field>
          <v-text-field color="rgba(145, 201, 89,1)" label="Role In This Workspace" type="text" v-model="userRole"></v-text-field>
        </div>
      </div>

      <div class="flex flex-col mt-4 space-y-10" id="select">
        <div class="grid mt-0 pt-5 grid-cols-2 gap-4">
          <v-text-field color="rgba(145, 201, 89,1)" label="Email" class="" v-model="email" type="email"></v-text-field>
          <v-text-field color="rgba(145, 201, 89,1)" class="capitalize" label="Phone" type="text" v-model="phone"></v-text-field>
        </div>

        <v-textarea color="rgba(145, 201, 89,1)" name="input-7-1" dense flat v-model="address" label="Address" rows="1"></v-textarea>

        <div class="flex justify-between mt-5" id="bottom">
          <button
            @click="changedPasword = !changedPasword"
            class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-sm"
            style="min-width: 110px"
          >
            Change Password
          </button>
          <button class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-sm" style="min-width: 110px">
            2FA Authentication
          </button>
        </div>

        <v-divider></v-divider>

        <p class="text-sm font-semibold text-[#515151]">Notifications</p>

        <div class="flex flex-col w-full">
          <div class="flex mb-5 justify-between" id="table-header">
            <div class="w-40 flex" v-for="(data, index) in tableHeader" :class="dynamicalClass(index)" :key="data">
              <p class="capitalize ml-0 mb-0 text-[#6A6A6A] font-medium text-semibold text-sm">
                {{ data }}
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between" id="body" v-for="(data, index) in tableBody" :key="index">
            <div class="w-40">
              <p class="capitalize ml-0 mb-0 text-[#6A6A6A] font-medium text-semibold text-[14px]">
                {{ data.text }}
              </p>
            </div>

            <div class="flex w-40 justify-center">
              <v-switch class="ml-0" inset v-model="data.emailNotifValue" color="rgba(145, 201, 89,1)"></v-switch>
            </div>
            <div class="flex w-40 justify-end">
              <v-switch class="ml-0" inset v-model="data.pushNotifValue" color="rgba(145, 201, 89,1)"></v-switch>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border text-DPGREY-400 font-semibold text-sm border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg"
        style="min-width: 110px"
        @click="profile != profile"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border font-semibold text-sm border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white"
        style="min-width: 110px"
        @click="submit"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync, watch } from "@nuxtjs/composition-api";
import useSetupProfile from "~/controller/Profile";
import members from "~/data_component/Members";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import profileDataComp from "~/data_component/Profile/Profile";

export default defineComponent({
  setup() {
    const { profile, changedPasword } = members();
    const { updateProfileData, getProfile } = useSetupProfile();

    useAsync(() => {
      getProfile();
    });
    const { allUserList } = tableTeamMembers();

    const { address, tableHeader, tableBody, email, fullName, phone, userRole, initials, profileData } = profileDataComp();

    const dynamicalClass = (index: number) => {
      if (index == 0) {
        return "justify-start";
      } else if (index === 2) {
        return "justify-end";
      } else if (index == 1) {
        return "justify-center";
      }
    };

    watch(profileData, () => {
      fullName.value = `${profileData.value.firstName} ${profileData.value.lastName}`;

      email.value = profileData.value.email;
      initials.value = `${profileData.value.firstName.charAt(0)}${profileData.value.lastName.charAt(0)}`;
    });

    const submit = () => {
      const param = { email: email.value, firstName: fullName.value.split(" ")[0], lastName: fullName.value.split(" ")[1], phone: phone.value, userRole: userRole.value, address: address.value };
      updateProfileData(param);
      profile.value != profile.value;
    };

    return {
      address,
      tableHeader,
      tableBody,
      allUserList,
      email,
      fullName,
      phone,
      userRole,
      profile,
      changedPasword,
      initials,
      dynamicalClass,
      // getProfileData,
      submit,
      profileData,
    };
  },
  // methods: {

  // },
  // created() {
  //   this.getProfileData();
  // },
});
</script>

<style scoped>
input {
  border-style: inset;
}
</style>
