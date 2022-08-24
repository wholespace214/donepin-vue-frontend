import { reactive, ref } from "@nuxtjs/composition-api";

const company = reactive([
  {
    //logo store as files
    companyName: "",
    email: "",
    phoneNo: "",
    website: "",
    ceoName: "",
    Address: "",
    companyRegistration: "",
    BankName: "",
    IBAN: "",
    BIC: ""
  }
]);

const companyImage = ref();

const uploadStatus = ref(false);

const previewImage = ref();

export default function Company() {
  return { company, companyImage, uploadStatus, previewImage };
}
