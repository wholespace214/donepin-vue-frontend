import useAxios from "./axios";

export default function useProjectsApi() {
  const { axiosGet, axiosPost, axiosPatch, axiosDelete } = useAxios();

  //Project part
  const getProject = () => axiosGet("user/getProject");

  const createProject = (data: any) => axiosPost("user/createWorkProject")

  return { getProject, createProject };
}
