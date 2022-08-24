// import useMembersApi from "~/api/members"
// import { AxiosOptions } from "@nuxtjs/axios";
import axios from 'axios';
import axiosNew from '~/api/axiosNew';


// const { getAllMembers } = useMembersApi();

const getMembers =async({ commit }) => {
    try {
        const response = await axiosNew.get('user/getTeamMembers?page=1')
        console.log("<<<<<<<<response>>>>",response)
        commit('SET_MEMBERS', response.data)
        return response.data
    }
    catch (error) {
        console.log("error>>>",error)
    }
}

// const addMember = async ({ comit }, member) => {
//     try {
//         const response = axios.post('http')
//         comit('NEW_MEMBER', response.data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// const getMemberById = async ({ comit }, member) => {
//     try {
//         const response = axios.get(`http${member.id}`)
//         comit('SET_MEMBER_BY_ID', response.data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// const updateMember = async ({ comit }, member) => {
//     try {
//         const response = axios.put(`http${member.id}`)
//         comit('UPDATE_MEMBER', response.data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export {
    getMembers
}