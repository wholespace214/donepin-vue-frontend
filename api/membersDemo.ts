import useAxios from "./axios";
const { axiosGet, axiosPost, axiosPatch, axiosDelete } = useAxios();

export default {
    getAllMembers(id: number) {
        console.log("called from actions >>>>>>>>>>")
        const response = axiosGet("/user/getTeamMembers", {
            params: {
                page: id
            }
        });
        return response;
    }
    // store(data) {
    //     return Api.post(END_POINT, data);
    // },

    // delete(id) {
    //     return Api.delete(`${END_POINT}/${id}`);
    // },

    // deleteAll() {
    //     return Api.delete(END_POINT);
    // }
}