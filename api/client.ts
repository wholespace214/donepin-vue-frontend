import useAxios from "./axios";

export default function useClientApi() {
  const { axiosGet, axiosDelete, axiosPatch, axiosPost } = useAxios();

  const createdClient = (credential: any) =>
    axiosPost("user/createClient", credential);

  const getClient = () => axiosGet("user/getClient");

  const getClientDetails = (clientId: any) =>
    axiosGet(`user/getClientDetail/${clientId}`);

  const updateClient = (clientId: any, credential: any) =>
    axiosPatch(`user/updateClient/${clientId}`, credential);

  return { createdClient, getClient, updateClient, getClientDetails };
}
