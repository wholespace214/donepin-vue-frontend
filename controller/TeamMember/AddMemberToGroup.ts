import useAPI from "~/api";
import addTeamMembers from "~/data_component/Members/AddTeamMembers";

export default function useAddMemberToGroup() {
  const { addMemberGroup } = useAPI();

  const { formNewMember } = addTeamMembers();

  const addMemberToGroup = (memberId: any) => {
    formNewMember.value[1].value.forEach((groupId: string) => {
      addMemberGroup(groupId, { groupMemberId: [memberId] }).then(res => {
        console.log(res);
      });
    });

    // return new Promise(resolve => {});
  }; //i nedd to add member Id and send to api as a array and groupId

  return { addMemberToGroup };
}
