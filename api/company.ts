import useAxios from "./axios";

export default function useCompanyAPI() {
    const { axiosPost } = useAxios();
    const createCompany = () => axiosPost(`user/createCompany`);

    return { createCompany };
}



