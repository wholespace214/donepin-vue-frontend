import useAttendanceAPI from "~/api/attendance";
import TableAttendance from "~/data_component/Attendance/TableAttendance";
import useFirstSetting from "../FirstSetting";
import useGeneralFeatures from "../GeneralFeatures";
import markAttendance from "~/data_component/Attendance/MarkAttendance";



export default function useAttendanceSettings() {
  const { allAttendance, filteredAttendance } = TableAttendance();
  const { AttendanceModalStatus, shift } = markAttendance();


  const { getAttendace, editAttendance, getFilterAttendance, addAttendanceData } = useAttendanceAPI();

  const { toogleLoading, snackbarProccess } = useGeneralFeatures();


  const getAllAttendance = () =>
    new Promise(resolve => {
      getAttendace().then((res: any) => {
        let { data } = res.data;
        const allAttend: any = [];

        data.forEach((element: any) => {
          element.edit = false;
          allAttend.push(element);
        });
        allAttendance.value = allAttend;
        resolve(true);
      });
    });


  const addNewAttendance = () => {
    toogleLoading();
    console.log("shift..values", shift.values)

    addAttendanceData(shift)
      .then(res => {
        // successProcess(res.data.message);
      })
      .catch(err => {
        if (err.response)
          snackbarProccess(err.response.data.message, "snackbar-error");
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const editAttendanceData = (id, memberId, data) => {
    toogleLoading();
    editAttendance(id, memberId, data)
      .then(res => {
        // successProcess(res.data.message);
      })
      .catch(err => {
        if (err.response)
          snackbarProccess(err.response.data.message, "snackbar-error");
      })
      .finally(() => {
        toogleLoading();
      });
  };

  // const openModalAdd = () => {
  //   if (AttendanceModalStatus.value == "editClient") {
  //     skeletonLoader.value = !skeletonLoader.value;

  //     setTimeout(() => {
  //       client[0] = addClient.value;
  //       AttendanceModalStatus.value = "addClient";

  //       skeletonLoader.value = !skeletonLoader.value;
  //     }, 300);
  //   } else {
  //     client.push({
  //       name: "",
  //       email: "",
  //       companyName: "",
  //       phoneNo: "",
  //       address: "",
  //       clientNumber: "",
  //       clientType: ""
  //     });

  //     AttendanceModalStatus.value = "addClient";
  //     openModal.value = !openModal.value;

  //     if (openModal.value == false) {
  //       client[0] = [];

  //       AttendanceModalStatus.value = "";
  //     }
  //   }
  // };

  // const successProcess = (message: any) => {
  //   fetchClient();
  //   AttendanceModalStatus.value = !AttendanceModalStatus.value;
  //   setTimeout(() => {
  //     client[0] = [];
  //   }, 200);

  //   snackbarProccess(message, "snackbar-success");
  // };


  const getAttendanceFiltered = (params: any) =>
    new Promise(resolve => {
      getFilterAttendance(params).then((res: any) => {
        let { data } = res.data;
        // const allAttend: any = [];

        // data.forEach((element: any) => {
        //   element.edit = false;
        //   allAttend.push(element);
        // });
        filteredAttendance.value = data;
        resolve(true);
      });
    });


  return {
    getAllAttendance,
    // addNewAttendance,
    editAttendanceData,
    getAttendanceFiltered,
    addNewAttendance
    // submitEditAttendance
  };
}
