import { ref } from "@nuxtjs/composition-api";
import useAttendanceAPI from "~/api/attendance";
import TableAbsence from "~/data_component/Attendance/TableAbsence";
// import useFirstSetting from "../FirstSetting";
import useGeneralFeatures from "../GeneralFeatures";
import addNewAbsenceData from "~/data_component/Attendance/AddAbsence";
import AbsenceTypeData from "~/data_component/Attendance/AbsenceType";


const absenceId = ref();

export default function useAbsenceSettings() {
    const { allAbsenceData } = TableAbsence();
    const { absence, absenceLoader, absenceModalStatus, addAbsenceInit, openAddAbsence } = addNewAbsenceData();

    const { snackbarProccess, toogleLoading, } = useGeneralFeatures();
    const { absenceTypeData } = AbsenceTypeData()

    const {
        getAbsence,
        addNewAbsence,
        updateAbsence,
        getAbsenceType,
        addAbsenceType,
        deleteAbsentType,
        declineAbsentRequest,
        approveAbsentRequest } = useAttendanceAPI();

    const getAllAbsence = () =>
        new Promise(resolve => {
            getAbsence().then((res: any) => {
                let { data } = res.data;
                const allAbsen: any = [];

                data.forEach((element: any) => {
                    element.edit = false;
                    allAbsen.push(element);
                });
                allAbsenceData.value = allAbsen;
                resolve(true);
            });
        });


    const addAbsence = () => {
        toogleLoading();
        addNewAbsence(addAbsenceInit, addAbsenceInit.value.member,)
            .then(res => {
                successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                getAllAbsenceTypes()

            });
    };


    const openModalAdd = () => {
        if (absenceModalStatus.value == "editClient") {
            absenceLoader.value = !absenceLoader.value;
            console.log("openmodal if is caleed")
            setTimeout(() => {
                absence[0] = addAbsenceInit.value;
                absenceModalStatus.value = "addClient";
                absenceLoader.value = !absenceLoader.value;
            }, 300);
        } else {
            console.log("openmodal else is caleed")

            // absence.push({
            //     member: "",
            //     absenceType: "",
            //     duration: "",
            //     begin: "",
            //     end: "",
            //     reason: "",
            //     status: ""
            // });

            absenceModalStatus.value = "addClient";
            openAddAbsence.value = !openAddAbsence.value;

            if (openAddAbsence.value == false) {
                absence[0] = [];

                absenceModalStatus.value = "";
            }
        }
    };

    const successProcess = (message: any) => {
        // fetchClient();
        absenceModalStatus.value = !absenceModalStatus.value;
        setTimeout(() => {
            absence[0] = [];
        }, 200);

        snackbarProccess(message, "snackbar-success");
    };

    const submitUpdateAbsence = () => {
        toogleLoading();

        updateAbsence(absenceId.value, absence[0])
            .then(res => {
                console.log(res.data.message);
                successProcess(res.data.message);
            })
            .finally(() => {
                toogleLoading();
            });
    };

    const getClientByid = (id: number) => {
        absenceId.value = id;

        let getAbsence = absenceId.value.find((element: any) => element._id == id);

        let obj = {
            member: getAbsence.member,
            absenceType: getAbsence.absenceType,
            duration: getAbsence.duration,
            begin: getAbsence.begin,
            end: getAbsence.end,
            reason: getAbsence.reason,
            status: getAbsence.status
        };

        absence[0] = obj;
    };




    const editAbsence = () =>
        new Promise(resolve => {
            getAbsence().then((res: any) => {
                let { data } = res.data;
                const allAttend: any = [];

                data.forEach((element: any) => {
                    element.edit = false;
                    allAttend.push(element);
                });
                allAbsenceData.value = allAttend;
                resolve(true);
            });
        });

    const getAllAbsenceTypes = () =>
        new Promise(resolve => {
            getAbsenceType().then((res: any) => {
                let { data } = res.data;
                absenceTypeData.value = data;
                resolve(true);
            });
        });


    const deleteAbsentTypeById = (id: any, data: any) => {
        toogleLoading();
        deleteAbsentType(id, data)
            .then(res => {
                successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                getAllAbsenceTypes()
            });
    };

    const addAbsenceTypes = (data: any) => {
        toogleLoading();
        addAbsenceType(data)
            .then(res => {
                successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                getAllAbsenceTypes()
            });
    };

    const declineAbsence = (params) => {
        toogleLoading();
        declineAbsentRequest(params.id, params.Absent,)
            .then(res => {
                successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                getAllAbsenceTypes()

            });
    };

    const approveAbsence = (id: any, status: any) => {
        toogleLoading();
        approveAbsentRequest(id, status)
            .then(res => {
                successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                getAllAbsenceTypes()

            });
    };



    return {
        getAllAbsence,
        addAbsence,
        editAbsence,
        openModalAdd,
        getClientByid,
        submitUpdateAbsence,
        getAllAbsenceTypes,
        deleteAbsentTypeById,
        addAbsenceTypes,
        approveAbsence,
        declineAbsence
    };
}
