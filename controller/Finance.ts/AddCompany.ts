import { onMounted } from "@nuxtjs/composition-api";
import Company from "~/data_component/Finance/Company";
import useCompanyAPI from "~/api/company";

export default function useAddCompany() {
  const { companyImage, previewImage, uploadStatus } = Company();

  const { createCompany } = useCompanyAPI();

  const submitCompany = () => {
    createCompany()
  };

  const uploadImageProcess = () => companyImage.value[0].click();

  const getImageFiles = () => displayImage(companyImage.value[0].files[0]);

  const displayImage = (file: any) => {
    const reader = new FileReader();

    reader.onload = (e: any) =>
      previewImage.value[0].setAttribute("src", e.target.result);

    reader.readAsDataURL(file);

    uploadStatus.value = true;
  };

  const removeImagePreview = () => {
    previewImage.value[0].removeAttribute("src");

    uploadStatus.value = false;
  };

  return {
    submitCompany,
    uploadImageProcess,
    getImageFiles,
    removeImagePreview
  };
}
