// export const mutations = {
//     SET_MEMBERS(state, members) {
//         state.members.push({...members})
//     },
//     NEW_MEMBER(state, members) {
//         state.member = state.member.unshift(task)
//     },
//     SET_MEMBER_BY_ID(state, updateMember) {
//         state.member = []
//     },
//     UPDATE_MEMBER(state, updateMember) {
//         state.member = []
//     },
// }

export const SET_MEMBERS = (state, members) => {
    state.members.push({...members})
}