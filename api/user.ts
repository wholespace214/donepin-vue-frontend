import useAxios from "./axios";

export default function useUsersApi() {
  const { axiosGet } = useAxios();

  const getUsersList = () => axiosGet("/user/getUsers");

  return { getUsersList };
}
