import { ref, watch } from "@nuxtjs/composition-api";
import useGroupApi from "~/api/group";
import useFirstSetting from "../FirstSetting";
import useGeneralFeatures from "../GeneralFeatures";
const idGroup = ref<number>();

export default function useDeletedGroup() {
  const { deletedgroup } = useGroupApi();

  const { fetchGroup } = useFirstSetting();

  const {
    snackbarProccess,
    openModalDeleted,
    toggleModalDeleted,
    confirmDeleted
  } = useGeneralFeatures();

  const processDelete = (groupId: number, dataGroup: any) => {
    let msg = `are you sure want to deleted ${dataGroup.groupName} group from database ?`;

    idGroup.value = groupId;

    openModalDeleted(msg, "tableContentGroup");
  };

  const successProcess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");
    fetchGroup();
  };

  watch(confirmDeleted, value => {
    if (value.status) {
      if (value.fromComponent == "tableContentGroup") {
        toggleModalDeleted();

        deletedgroup(idGroup.value).then(res => {
          confirmDeleted.fromComponent = "";
          confirmDeleted.status = false;

          successProcess(res.data.message);
        });
      }
    }
  });

  return { processDelete };
}
