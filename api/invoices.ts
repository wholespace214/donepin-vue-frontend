import useAxios from "./axios";

export default function useInvoicesApi() {
  const { axiosGet, axiosDelete, axiosPatch, axiosPost } = useAxios();

  const getInvoice = () => axiosGet("/user/getInvoice");

  const createdInvoice = (credential: any) =>
    axiosPost("user/createInvoice", credential);

  return { getInvoice, createdInvoice };
}
