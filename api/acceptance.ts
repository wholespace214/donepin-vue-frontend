import useAxios from "./axios";
export default function useAcceptanceApi() {
    const { axiosPatch } = useAxios();
    const getAcceptance = (accId: any) => axiosPatch(`/user/AcceptMemberRequest/${accId}`);
    return { getAcceptance };
}
