import useClientApi from "~/api/client";
import Client from "~/data_component/Finance/Client";
import useGeneralFeatures from "../GeneralFeatures";

export default function useClientSettings() {
  const { skeletonLoader } = useGeneralFeatures();

  const { getClient } = useClientApi();

  const { allClient } = Client();

  const fetchClient = () => {
    return new Promise(resolve => {
      skeletonLoader.value = true;
      getClient()
        .then(res => {
          let client: any[] = [];

          const { data } = res.data.data;
          data.forEach((element: any) => {
            element.edit = false;

            client.push(element);
          });

          allClient.value = client;
        })
        .finally(() => {
          skeletonLoader.value = false;
        });
    });
  };

  return { fetchClient };
}
