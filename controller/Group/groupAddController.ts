import useGroupApi from "~/api/group";
import dataGroupModal from "~/data_component/Group";
import useGroupSettings from "../FirstSettings/GroupSettings";
import useGeneralFeatures from "../GeneralFeatures";
import useGroupAddMemberController from "./groupAddMember";

export default function useAddGroupController() {
  const { createdGroup } = useGroupApi();

  const { addGroupMembers } = useGroupAddMemberController();

  const { fetchGroup } = useGroupSettings();

  const { snackbarProccess, loading, closeSnackbar } = useGeneralFeatures();

  const { group, newMembers, addGroup, modal } = dataGroupModal();

  const addNewGroup = () => {
    loading.value = !loading.value;

    closeSnackbar();

    createdGroup({ groupName: group.value.name })
      .then(res => onSuccess(res.data))
      .catch(error => {
        // if (error.response)
        // snackbarProccess(error.response.data.message, "snackbar-error");
      })
      .finally(() => {
        loading.value = !loading.value;
      });
  };

  const addMemberProcess = () => {
    addGroupMembers().then(res => {
      if (res) {
        fetchGroup();
        closeModal();
      }
    });
  };

  const onSuccess = (response: any) => {
    group.value = response.data;

    if (newMembers.value.length > 0) {
      addMemberProcess();
    } else {
      fetchGroup();
      closeModal();
    }

    snackbarProccess(response.message, "snackbar-success");
  };

  const addMember = (data) => {
    newMembers.value.push({ member: data })
    console.log("newmmwbwewes", newMembers.value)
  };

  const removeMembers = (index: number) => newMembers.value.splice(index, 1);

  const closeModal = () => {
    modal.value = !modal.value;

    // group.value = "";

    newMembers.value = [];
  };

  return { addNewGroup, addMember, removeMembers };
}
