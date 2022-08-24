import useAPI from "~/api";
import useGroupApi from "~/api/group";
import dataGroupModal from "~/data_component/Group";

export default function useGroupAddMemberController() {
  const { group, newMembers } = dataGroupModal();

  const { addMemberGroup } = useGroupApi();

  const addGroupMembers = () => {
    return new Promise(resolve => {
      let allMember: any[] | any = "";

      console.log("group in add group", group.value)
      if (group.value.hasOwnProperty("allMemberId")) {
        allMember = group.value.allMemberId;
        console.log("allMember in if", allMember)

      }
      else {
        console.log("else is run newMembers", newMembers)
        newMembers.value.forEach(element => {

          console.log("elementMember ", element.member)
          if (element.member) allMember.push(element.member);
        });
      }

      addMemberGroup(group.value._id, { groupMemberId: allMember }).then(
        res => {
          resolve(res.data);
        }
      );
    });
  };

  return { addGroupMembers };
}
