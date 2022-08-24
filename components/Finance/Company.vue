<template>
  <Div id="content" class="p-5">
    <Div id="members-filters" class="flex flex-row items-center justify-between pb-5">
      <Div class="flex flex-row items-center justify-between pb-5 w-full" id="filter">
        <H1 class="text-lg font-bold">Company</H1>
        <Div class="flex">
          <!-- This is form search -->
          <Div class="flex flex-row" id="search">
            <Div class="hidden bg-white md:block md:mr-4 xl:mr-0 rounded-md">
              <Div class="focus-within:text-DPGREY-400 relative text-DPGREY-400">
                <Span class="absolute flex inset-y-0 items-center left-0 pl-1">
                  <Button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-6 text-DPGREY-200 w-4">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </Button>
                </Span>
                <Input type="text" class="dp-shadow w-52 focus:bg-white focus:outline-none focus:text-gray-900 pl-8 py-2 rounded-md text-DPGREY-500" placeholder="Search..." autocomplete="off" />
              </Div>
            </Div>

            <Button class="focus:outline-none block xl:hidden relative" @click="filterModal = !filterModal">
              <img src="@/assets/images/icon-settings.svg" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
    <ValidationObserver ref="form"> 
      <Div v-for="(data, index) in company" :key="index" class="w-full flex flex-col space-y-4">
        <Div class="flex space-x-5 justify-between">
          <ValidationProvider rules="required" name="Company Name" v-slot="{ errors }">
            <v-text-field v-model="data.companyName" color="rgba(165, 210, 118, 1)" label="Company Name" :error-messages="errors"></v-text-field>
          </ValidationProvider>

          <ValidationProvider rules="email" name="Email" v-slot="{ errors }">
            <v-text-field v-model="data.email" color="rgba(165, 210, 118, 1)" label="Email" :error-messages="errors"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="Phone" rules="number" v-slot="{ errors }">
            <v-text-field v-model="data.phoneNo" color="rgba(165, 210, 118, 1)" label="Phone" :error-messages="errors"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="Website" v-slot="{ errors }">
            <v-text-field v-model="data.website" color="rgba(165, 210, 118, 1)" label="Website" :error-messages="errors"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="CEO" rules="">
            <v-text-field color="rgba(165, 210, 118, 1)" label="CEO"></v-text-field>
          </ValidationProvider>
        </Div>
        <Div class="flex space-x-5 justify-between">
          <ValidationProvider name="Address">
            <v-text-field v-model="data.Address" color="rgba(165, 210, 118, 1)" label="Address"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="Company Registration">
            <v-text-field v-model="data.companyRegistration" color="rgba(165, 210, 118, 1)" label="Company Registration"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="Bank Name">
            <v-text-field v-model="data.BankName" color="rgba(165, 210, 118, 1)" label="Bank Name"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="IBAN">
            <v-text-field v-model="data.IBAN" color="rgba(165, 210, 118, 1)" label="IBAN"></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="BIC">
            <v-text-field color="rgba(165, 210, 118, 1)" label="BIC"></v-text-field>
          </ValidationProvider>
        </Div>

        <Div class="w-full">
          <div class="flex space-x-3 items-center">
            <span class="capitalize">logo</span>

            <div class="flex items-start">
              <input @change="getImageFiles" type="file" hidden ref="companyImage" />
              <img src="" ref="previewImage" alt="" />
            </div>

            <div class="flex flex-col">
              <Span @click="uploadImageProcess" class="cursor-pointer capitalize flex px-4 py-3 text-xs">
                <img src="@/assets/images/icon-edit.svg" class="mr-2" />
                {{ uploadStatus ? "Edit" : "Upload" }}
              </Span>
              <Span v-if="uploadStatus" @click="removeImagePreview" class="capitalize cursor-pointer flex flex-row items-center px-4 py-3 text-xs">
                <img src="@/assets/images/icon-delete.svg" class="mr-2" style="width: 12px; height: 20px" />
                Delete
              </Span>
            </div>
          </div>
        </Div>

        <Div class="w-full mt-5">
          <div class="flex justify-end mt-5" id="bottom">
            <button
              @click="submit"
              class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
              style="min-width: 110px"
            >
              Done
            </button>
          </div>
        </Div>
      </Div>
    </ValidationObserver>

    <!-- This is Modal -->
    <DashboardModalFilter @closeFilter="filterModal = !filterModal" :openFilter="filterModal" :dataFilter="projectFilter" />

    <ProjectModalAddProject :openAddProject="openAddProject" @closeAddProject="openAddProject = !openAddProject" />
  </Div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import useAddCompany from "~/controller/Finance.ts/AddCompany";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import allFilter from "~/data_component/Dashboard/AllFilter";
import Company from "~/data_component/Finance/Company";

export default defineComponent({
  setup() {
    const form = ref();

    const { validation } = useGeneralFeatures();

    const { submitCompany, getImageFiles, uploadImageProcess, removeImagePreview } = useAddCompany();

    const { company, companyImage, uploadStatus, previewImage } = Company();

    const filterModal = ref(false);

    const openAddProject = ref(false);

    const { projectFilter } = allFilter();

    const submit = () => {
      validation(form).then((res: Boolean) => {
        // Validation first
        if (res) submitCompany();
      });
    };

    return {
      submit,
      getImageFiles,
      uploadImageProcess,
      removeImagePreview,
      form,
      previewImage,
      uploadStatus,
      company,
      companyImage,
      openAddProject,
      filterModal,
      projectFilter,
    };
  },
});
</script>
