import useAxios from "./axios";

export default function useRolesApi() {
  const { axiosGet, axiosPost, axiosPatch, axiosDelete } = useAxios();

  //Role part
  const getRoles = () => axiosGet("user/getRoles");

  const createRoles = (credential: any) =>
    axiosPost("user/createRole", credential);

  // const updateRoles = (credential: any , roleId: string, id: string) =>
  //   axiosPatch(`user/editRole/${id}/${roleId}`, credential);

  // original part
  const updateRoles = (roleId: string, credential: any) =>
    axiosPatch(`user/editRole/${roleId}`, credential);


  // const updateRoles = (id: string,  data: any) =>
  //  axiosPatch(`/user/editRole/${id}`, data);

  const deleteRoles = (roleId: string) =>
    axiosDelete(`/user/deleteRole/${roleId}`);

  return { getRoles, createRoles, updateRoles, deleteRoles };
}
