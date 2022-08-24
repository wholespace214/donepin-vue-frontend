import useAPI from "~/api";
import useGroupApi from "~/api/group";
import dataGroupModal from "~/data_component/Group";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useFirstSetting from "../FirstSetting";
import useGeneralFeatures from "../GeneralFeatures";
import useGroupAddMemberController from "./groupAddMember";

export default function useGroupEditController() {
  const { editGroup, group, newMembers, modal } = dataGroupModal();

  const { groupEdit } = useGroupApi();

  const { addGroupMembers } = useGroupAddMemberController();

  const { fetchGroup } = useFirstSetting();

  const { snackbarProccess } = useGeneralFeatures();

  const submitEditGroup = () => {
    if (newMembers.value.length > 0) {
      console.log("newMmeber in submitEditgroup", newMembers.value)
      newMembers.value.forEach((element: any) => {
        group.value.allMemberId.push(element.member);
      });

      addGroupMembers()
        .then(res => {
          if (res) runEdit();
        });
    } else {
      runEdit();
    }
  };

  const runEdit = () => {
    groupEdit(group.value._id, {
      groupName: group.value.name
    }).then(res => {
      onSuccess("Group Edited");
    });
  };

  const onSuccess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");

    editGroup.value = !editGroup.value;

    fetchGroup();

    closeModal();
  };

  const closeModal = () => {
    modal.value = !modal.value;

    // group.value = "";

    newMembers.value = [];
  };

  return { submitEditGroup };
}
