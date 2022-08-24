import useAxios from "./axios";

export default function useCalendarApi() {
    const { axiosPost } = useAxios();

    const getCalendar = (params: any) =>
        axiosPost("/user/getMonthlyAttendance", {
           ...params
        });

    //   const createMember = (credential: any) => axiosPost(`/user/addTeamMember/`, credential);

    return { getCalendar, };
}
