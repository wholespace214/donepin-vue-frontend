import useAxios from "./axios";

export default function useAttendanceAPI() {
  const { axiosPost, axiosDelete, axiosGet, axiosPatch } = useAxios();

  const getAttendace = () => axiosGet("/user/getAllMemberAttendance");

  const addAttendanceData = (data: any) => axiosPost(`user/markAttendence`, {
    ...data
  });

  const editAttendance = (id: string, memberId: string, data: any) => axiosPatch(`user/editAttendance/${id}/${memberId}`);

  const getApproval = (id: any, memberId: any) => axiosGet(`user/approvalStatus/${id}/${memberId}`);

  const getAbsence = () => axiosGet(`/user/getPendingRequest`);

  const addNewAbsence = (data: any, memberId: any) => axiosPatch(`/user/addAbsentByMember/${memberId}`, {
    ...data
  });


  const addAbsenceType = (data: any) => axiosPost(`/user/createAbsentType`, {
    'absentType': data
  });

  const getAbsenceType = () => axiosGet(`/user/getAbsentType`);


  const updateAbsence = (credential: any, memberId: any) => axiosPatch(`/user/addAbsenceByMember/${memberId}`);

  const getFilterAttendance = (params: any) =>
    axiosPost("/user/getFilterAttendence", {
      ...params
    });

  const deleteAbsentType = (id: any, data: string) => axiosPatch(`user/deleteAbsentType/${id}`, {
    'absentType': data
  });

  const approveAbsentRequest = (id: any, data: any) => axiosPatch(`user/acceptPendingRequests/${id}`, {
    'approvalStatus': data
  });

  const declineAbsentRequest = (id: any, data: any) => axiosPatch(`user/deniedPendingRequests/${id}`, {
    ...data
  });


  return {
    approveAbsentRequest,
    declineAbsentRequest,
    deleteAbsentType,
    addAbsenceType,
    getAbsenceType,
    getAttendace,
    editAttendance,
    getApproval,
    getAbsence,
    addNewAbsence,
    updateAbsence,
    getFilterAttendance,
    addAttendanceData
  };
}
