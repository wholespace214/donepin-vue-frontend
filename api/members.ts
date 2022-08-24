import useAxios from "./axios";

export default function useMembersApi() {
  const { axiosGet, axiosPost, axiosPatch, axiosDelete } = useAxios();

  const getAllMembers = (id: number, params: any) => {

    const response = axiosGet("/user/getTeamMembers", {
      params: {
        page: id
      }
    });
    return response;
  }

  const getAllmember = (id: number, data: any) =>
    axiosGet("/user/getTeamMembers", {
      params: {
        page: id,
       ...data
        // groupId: params.groupId?.value,
        // roleId: params.roleId?.value,
        // status: params.status?.value
      }
    });

  const EditMember = (id: string, member_id: string, data: any) =>
    axiosPatch(`/user/editMember/${id}/${member_id}`, data)



  // const deleteMember = (teamId: string, memberId: string, credential: any) =>
  //   axiosDelete(`/removeTeamMember/teamId/memberId/${teamId}/${memberId}`, credential);

  const deletedMember = (teamId: string, memberId: string) =>
    axiosPatch(`/user/removeTeamMember/${teamId}/${memberId}`)



  const createMember = (credential: any) => axiosPost(`/user/addTeamMember/`, credential);

  return { getAllmember, createMember, EditMember, deletedMember, getAllMembers };
}





