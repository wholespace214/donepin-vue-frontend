import { computed, reactive, ref } from "@nuxtjs/composition-api";

const client: any[] = reactive([]);

const addClient = ref({
  name: "",
  email: "",
  companyName: "",
  phoneNo: "",
  address: "",
  clientNumber: "",
  clientType: ""
});

const allClient = ref();

const modalStatus = ref();

const openModal = ref(false);

const skeletonLoader = ref(false);

export default function Client() {
  return {
    client,
    openModal,
    modalStatus,
    allClient,
    addClient,
    skeletonLoader
  };
}
