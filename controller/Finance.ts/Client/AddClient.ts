import useAPI from "~/api";
import useFirstSetting from "~/controller/FirstSetting";
import Client from "~/data_component/Finance/Client";
import useGeneralFeatures from "../../GeneralFeatures";

export default function useAddClient() {
  const { createdClient } = useAPI();

  const { fetchClient } = useFirstSetting();

  const {
    openModal,
    modalStatus,
    addClient,
    client,
    skeletonLoader
  } = Client();

  const { toogleLoading, snackbarProccess } = useGeneralFeatures();

  const addNewClient = () => {
    toogleLoading();
    console.log("clientdljdsf", client[0])
    createdClient(client[0])
      .then(res => {
        successProcess(res.data.message);
      })
      .catch(err => {
        if (err.response)
          snackbarProccess(err.response.data.message, "snackbar-error");
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const openModalAdd = () => {
    if (modalStatus.value == "editClient") {
      console.log("is is run in client")
      skeletonLoader.value = !skeletonLoader.value;

      setTimeout(() => {
        client[0] = addClient.value;
        modalStatus.value = "addClient";

        skeletonLoader.value = !skeletonLoader.value;
      }, 300);
    } else {
      console.log("else is run in client")

      client.push({
        name: "",
        email: "",
        companyName: "",
        phoneNo: "",
        address: "",
        clientNumber: "",
        clientType: ""
      });

      modalStatus.value = "addClient";
      openModal.value = !openModal.value;

      if (openModal.value == false) {
        client[0] = [];

        modalStatus.value = "";
      }
    }
  };

  const successProcess = (message: any) => {
    fetchClient();
    modalStatus.value = !modalStatus.value;
    setTimeout(() => {
      client[0] = [];
    }, 200);

    snackbarProccess(message, "snackbar-success");
  };

  return { addNewClient, openModalAdd };
}
