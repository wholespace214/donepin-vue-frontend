import { ref } from "@nuxtjs/composition-api";
import useAPI from "~/api";
import useFirstSetting from "~/controller/FirstSetting";
import Client from "~/data_component/Finance/Client";
import useGeneralFeatures from "../../GeneralFeatures";

const clientId = ref();

export default function useUpdateClient() {
  const { fetchClient } = useFirstSetting();

  const { updateClient } = useAPI();

  const { client, allClient, openModal } = Client();

  const { toogleLoading, snackbarProccess } = useGeneralFeatures();

  const submitUpdateClient = () => {
    toogleLoading();

    updateClient(clientId.value, client[0])
      .then(res => {
        console.log(res.data.message);
        successProcess(res.data.message);
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const getClientByid = (id: number) => {
    clientId.value = id;

    let getClient = allClient.value.find((element: any) => element._id == id);

    let obj = {
      name: getClient.Name,
      email: getClient.email,
      companyName: getClient.companyName,
      phoneNo: getClient.phoneNo,
      address: getClient.address,
      clientNumber: getClient.clientNumber,
      clientType: getClient.clientType
    };

    client[0] = obj;
  };

  const successProcess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");
    fetchClient();

    closeModal();
  };

  const closeModal = () => {
    openModal.value = !openModal.value;

    if (openModal.value == false) {
      setTimeout(() => {
        client[0] = "";
      }, 200);
    }
  };

  return { submitUpdateClient, getClientByid };
}
