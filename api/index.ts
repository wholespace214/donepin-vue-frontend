import { useContext, useRouter, useRoute } from "@nuxtjs/composition-api";
import { createTeam, createGroup } from "@/api/apiType.model";
import useAxios from "./axios";

export default function useAPI() {
  const { $axios, $storage } = useContext();

  const { axiosPatch, axiosDelete } = useAxios();

  const bearerToken = $storage.getLocalStorage("JWT");

  if (bearerToken) $axios.setToken(bearerToken, "Bearer");

  //Routing system
  const router = useRouter();

  const route = useRoute();

  const submitLogin = (credenial: any) => $axios.post("/user/login", credenial);

  const submitRegister = (credential: any) => $axios.post("user/register", credential);

  //Request re-send token register
  const resendRegisterToken = (credential: any) => $axios.post("/user/resend/verification/email", credential);

  //Request to reset password
  const forgotPassword = (credential: any) =>
    $axios.get("/user/reset/password", {
      params: credential
    });

  //Request to verification token reset
  const verificationTokenReset = (credential: any) =>
    $axios.get("/user/verify/resetPasswordToken", {
      params: credential
    });

  //Request to update new password
  const updatePassword = (credential: any) => $axios.patch("/user/resetPassword", credential);

  const verifyUsers = (credential: any) => $axios.patch("/user/verify", credential);

  //Team members page
  const createTeam = (credential: createTeam, id: any) => $axios.post(`/user/addTeamMember/${id}`, credential);

  //Gat all data team member
  const getAllTeamMember = (id: number,) =>
    $axios.get("/user/getTeamMembers", {
      params: {
        page: id
      }
    });

  const EditTeamMember = (id: string, memberId: string, params: any) => $axios.patch(`/user/editMember/${id}/${memberId}`, params)

  // const EditTeamMember = (id: string, memberId: string, params: any, credential: any) => $axios.patch(`/user/editMember/${id}/${memberId}`, credential);
  const updateProfile = (params: any) =>
    $axios.patch("user/updateProfile", {
      ...params
    });

  const getProfileData = () =>
    $axios.get(`user/getProfile`);

  //Gat all data team member (Pending endpoint does'nt exit )

  // const deletedMember = (id: number) => { };



  // const deletedMember = (teamId: string, memberId: string) =>
  //   axiosPatch(`/removeTeamMember/teamId/memberId/${teamId}/${memberId}`);
  const deletedMember = (teamId: string, memberId: string) =>
    axiosPatch(`/removeTeamMember/${teamId}/${memberId}`);


  //Get users list
  const getUserList = () => $axios.get("/user/getUsers");

  //Group part

  const createdGroup = (credential: createGroup) => $axios.post("/user/createGroup", credential);

  const getGroup = (page: number) =>
    $axios.get("user/getGroups", {
      params: {
        page: page
      }
    });

  const deleteMemberGroup = (groupId: number, credential: any) => $axios.patch(`user/removeGroupMember/${groupId}`, credential);

  const getGroupByid = (groupId: any) => $axios.get(`/user/getGroupById/${groupId}`);

  const groupEdit = (groupId: any, credential: any) => $axios.patch(`/user/editGroup/${groupId}`, credential);

  const deletedgroup = (groupId: number | undefined) => $axios.delete(`/user/deleteGroup/${groupId}`);

  const getAllMember = (credential: any) => $axios.get("user/getGroupMembers", credential);

  const addMemberGroup = (groupId: any | number, credential: any) => $axios.patch(`user/addGroupMember/${groupId}`, credential);

  //Finance Part
  const getInvoice = () => $axios.get("/user/getInvoice");

  const createdInvoice = (credential: any) => $axios.post("user/createInvoice/", credential);

  //Company Part
  const createdCompany = (teamId: any, credential: any) => $axios.post(`user/createCompany/${teamId}`, credential);

  // Client part
  const createdClient = (credential: any) => $axios.post("user/createClient", credential);

  const getClient = () => $axios.get("user/getClient");

  const getClientDetails = (clientId: any) => $axios.get(`user/getClientDetail/${clientId}`);

  const updateClient = (clientId: any, credential: any) => $axios.patch(`user/updateClient/${clientId}`, credential);

  //Settings part

  const updateSettings = (credential: any) => $axios.patch("user/updateSetting", credential);

  return {
    router,
    route,
    getInvoice,
    getAllMember,
    createdCompany,
    createdInvoice,
    deletedgroup,
    addMemberGroup,
    createdGroup,
    groupEdit,
    getGroupByid,
    deleteMemberGroup,
    submitLogin,
    submitRegister,
    forgotPassword,
    verifyUsers,
    updatePassword,
    verificationTokenReset,
    resendRegisterToken,
    EditTeamMember,
    createTeam,
    getClient,
    updateClient,
    getClientDetails,
    getUserList,
    getAllTeamMember,
    deletedMember,
    // deleteMember,
    getGroup,
    createdClient,
    updateSettings,
    updateProfile,
    getProfileData
  };
}
