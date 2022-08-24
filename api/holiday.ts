import useAxios from "./axios";

export default function useHolidayAPI() {
    const { axiosPost, axiosGet, axiosPatch } = useAxios();

    const getHoliday = (params: any) =>
        axiosPost("/user/getAllHoliday", {
            ...params
        });

    const createHoliday = (params: any, teamId: any) =>
        axiosPost(`/user/createHoliday/${teamId}`, {
            ...params
        });

    const addDefaultHoliday = (params: any, teamId) =>
        axiosPost(`/user/createDefaultHoliday/${teamId}`, {

            ...params
        });

    const updateDefaultHolidayData = (params: any, date: any) =>
        axiosPost(`/user/updateHoliday?year=${date.year}&month=${date.month}`, {
            ...params
        });

    const getDefaultHoliday = (params: any) =>
        axiosGet("/user/getDefaultHoliday", {
            params: {
                ...params
            }
        });

    return {
        getHoliday,
        addDefaultHoliday,
        getDefaultHoliday,
        createHoliday,
        updateDefaultHolidayData
    };
}