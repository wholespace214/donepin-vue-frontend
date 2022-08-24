import { reactive, ref } from "@nuxtjs/composition-api";
import { modalDelete } from "@/api/apiType.model";
import { Chart, registerables } from "chart.js";

const currentComponent = ref("SignUpForm");

const snackbarStatus = ref<"error" | "success" | string>("");

const deletedModal = ref(false);

const deletedMessageModal = ref<string>();

const confirmDeleted = reactive<modalDelete>({
  status: false,
  fromComponent: ""
});

const deletedFunc = ref<any>();

const visibleAlert = ref(false);

const openSnackbar = ref(false);

const loading = ref(false);

const message = ref<string>("");

const skeletonLoader = ref(false);

const validation = (form: any) => form.value.validate();

export default function useGeneralFeatures() {
  const generateSlug = (url: string) =>
    url
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const chartInit = (target: any, type: any, data: any, options: any) => {
    Chart.register(...registerables);
    return new Chart(target, {
      type: type,
      data: data,
      options: options
    });
  };

  const openAlert = (msg: string) => {
    visibleAlert.value = true;
    message.value = msg;
  };

  const openSnackbarAlertProcess = (
    msg: string,
    status: "error" | "success" | ""
  ) => {
    snackbarStatus.value = status;
    openSnackbar.value = true;
    message.value = msg;
  };

  const closeAlert = () => {
    if (visibleAlert.value) visibleAlert.value = false;
  };

  const closeSnackbar = () => {
    if (openSnackbar.value) openSnackbar.value = false;
  };

  //Snackbar process
  const snackbarProccess = (
    message: string,
    component: "alert" | "snackbar" | "snackbar-error" | "snackbar-success"
  ) => {
    switch (component) {
      case "alert":
        openAlert(message);
        break;
      case "snackbar":
        openSnackbarAlertProcess(message, "");
        break;
      case "snackbar-error":
        openSnackbarAlertProcess(message, "error");
        break;
      case "snackbar-success":
        openSnackbarAlertProcess(message, "success");
        break;
    }
  };

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-DPGREEN-500 bg-DPGREEN-100";
      case "paid":
        return "text-DPGREEN-500 bg-DPGREEN-100";
      case "disabled":
        return "text-[#EA8426] bg-[#EA8426]";
    }
  };


  const statusColorMember = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-DPGREEN-500 bg-DPGREEN-100";
      case "pending":
        return "text-DPORANGE-500 bg-DPORANGE-400 ";
      case "disabled":
        return "text-[#F68E81] bg-[#F9ADA2]";
    }
  };

  const toogleLoading = () => (loading.value = !loading.value);

  const toggleModalDeleted = () => (deletedModal.value = !deletedModal.value);

  const openModalDeleted = (msg: string, fromComponent: string) => {
    deletedModal.value = true;

    confirmDeleted.fromComponent = fromComponent;

    deletedMessageModal.value = msg;
  };

  const sortData = (data, key: any) => {
    console.log("data,key", data, key)
    const sorted = data.value?.sort(function (a: any, b: any) {
      var nameA = a.key?.toLowerCase(),
        nameB = b.key?.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    return sorted;
  }

  const confirmDelete = (value: boolean) => (confirmDeleted.status = value);

  return {
    generateSlug,
    chartInit,
    validation,
    openAlert,
    closeAlert,
    closeSnackbar,
    snackbarProccess,
    statusColor,
    toogleLoading,
    openModalDeleted,
    toggleModalDeleted,
    confirmDelete,
    confirmDeleted,
    deletedFunc,
    deletedModal,
    deletedMessageModal,
    currentComponent,
    visibleAlert,
    message,
    openSnackbar,
    snackbarStatus,
    loading,
    skeletonLoader,
    statusColorMember,
    sortData
  };
}
