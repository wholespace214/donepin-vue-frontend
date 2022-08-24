import useAxios from "./axios";
import { createGroup } from "@/api/apiType.model";

export default function useGroupApi() {
  const { axiosGet, axiosPost, axiosDelete, axiosPatch } = useAxios();

  const getGroup = () => axiosGet("user/getGroups");

  const createdGroup = (credential: createGroup) =>
    axiosPost("/user/createGroup", credential);

  const getGroupByid = (groupId: any) =>
    axiosGet(`/user/getGroupById/${groupId}`);

  // const groupEdit = (credential: any , roleId: string, id: string) =>
  //   axiosPatch(`user/editGroup/${id}/${roleId}`, credential);

  const groupEdit = (groupId: any, credential: any) =>
    axiosPatch(`/user/editGroup/${groupId}`, credential);

  // const groupEdit = (groupId: any,id: string, credential: any) =>
  //   axiosPatch(`/user/editGroup/${groupId}/${id}`, credential);

  const deletedgroup = (groupId: number | undefined) =>
    axiosDelete(`/user/deleteGroup/${groupId}`);

  const addMemberGroup = (groupId: any | number, credential: any) =>
    axiosPatch(`user/addGroupMember/${groupId}`, credential);

  const deleteMemberGroup = (groupId: number, credential: any) =>
    axiosPatch(`user/removeGroupMember/${groupId}`, credential);

  return {
    getGroup,
    createdGroup,
    groupEdit,
    deletedgroup,
    getGroupByid,
    addMemberGroup,
    deleteMemberGroup
  };
}
