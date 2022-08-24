import { ref, watch } from "@nuxtjs/composition-api";
import useAPI from "~/api";
import useGroupApi from "~/api/group";
import dataGroupModal from "~/data_component/Group";
import useFirstSetting from "../FirstSetting";
import useGeneralFeatures from "../GeneralFeatures";

const memberIndex = ref();

const member = ref();

export default function useGroupUpdateMember() {
  const { group, modal, newMembers } = dataGroupModal();

  const { deleteMemberGroup } = useGroupApi();

  const {
    snackbarProccess,
    openModalDeleted,
    toggleModalDeleted,
    confirmDeleted
  } = useGeneralFeatures();
  const { fetchGroup } = useFirstSetting();

  const removeExistingMember = (index: number, dataMember: any) => {
    memberIndex.value = index;

    member.value = dataMember;
    let msg = `are you sure want to deleted ${dataMember.firstName} ${dataMember.lastName} from this group ?`;

    openModalDeleted(msg, "updateMemberGroup");
  };

  const deletedMember = () => {
    return new Promise(resolve => {
      deleteMemberGroup(group.value._id, {
        groupMemberId: member.value._id
      }).then(res => {
        resolve(true);

        successProccess(res.data.message);
      });
    });
  };

  const successProccess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");
  };

  const closeModal = () => {
    modal.value = !modal.value;

    // group.value = "";

    newMembers.value = [];
  };

  watch(confirmDeleted, value => {
    if (value.status) {
      if (value.fromComponent == "updateMemberGroup") {
        toggleModalDeleted();

        deletedMember().then(res => {
          group.value.allMember.splice(memberIndex, 1);

          confirmDeleted.fromComponent = "";
          confirmDeleted.status = false;

          closeModal();

          fetchGroup();
        });
      }
    }
  });

  return { removeExistingMember };
}
