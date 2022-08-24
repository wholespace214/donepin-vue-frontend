import useHolidayAPI from "~/api/holiday";
import holidayDataComponent from "~/data_component/Attendance/Holiday";
import useGeneralFeatures from "../GeneralFeatures";
import { format } from "date-fns";

export default function useHolidaySettings() {
    const { HolidayData, defaultHolidayData, defaultMonth } = holidayDataComponent();

    const { toogleLoading, snackbarProccess, skeletonLoader } = useGeneralFeatures();

    const { getHoliday, addDefaultHoliday, getDefaultHoliday, createHoliday, updateDefaultHolidayData } = useHolidayAPI();

    // const successProcess = (message: any) => {
    //     // fetchClient();
    //     absenceModalStatus.value = !absenceModalStatus.value;
    //     setTimeout(() => {
    //         absence[0] = [];
    //     }, 200);

    //     snackbarProccess(message, "snackbar-success");
    // };

    const getHolidayData = (param: any) =>
        new Promise(resolve => {
            getHoliday(param).then((res: any) => {
                // let fullMonth: any[] = [];
                let { data } = res.data;

                HolidayData.value = data

                resolve(true);
            });
        });

    const setHoliday = (params: any, id: any) => {
        toogleLoading();
        createHoliday(params, id)
            .then(res => {
                // successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                // getAllAbsenceTypes()

            });
    };


    const setDefaultHoliday = (params: any, id: any) => {
        toogleLoading();
        addDefaultHoliday(params, id)
            .then(res => {
                // successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                // getAllAbsenceTypes()
                let param = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
                getDefaultHolidays(param);

            });
    };

    const updateDefaultHoliday = (params: any, id: any) => {
        toogleLoading();
        updateDefaultHolidayData(params, id)
            .then(res => {
                // successProcess(res.data.message);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
                // getAllAbsenceTypes()
                let param = { year: format(new Date(), "yyyy"), month: format(new Date(), "MM") };
                getDefaultHolidays(param);

            });
    };

    const getDefaultHolidays = async (params: any) =>
        new Promise(resolve => {
            toogleLoading()
            getDefaultHoliday(params).then((res: any) => {
                // let fullMonth: any[] = [];
                let { data } = res.data;

                defaultHolidayData.value = data && data.holiday
                defaultMonth.value = data && data.month

                resolve(true);
            }).catch(error => {
                console.log('error', error);
            })
        }).finally(() => {
            toogleLoading()
        });


    return { getHolidayData, setDefaultHoliday, getDefaultHolidays, setHoliday, updateDefaultHoliday };
}
