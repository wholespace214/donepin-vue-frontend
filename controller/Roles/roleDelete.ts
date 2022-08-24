import useRolesApi from '~/api/roles';
import { ref, watch } from "@nuxtjs/composition-api";
import useMembersSettings from "../FirstSettings/MembersSettings";
import useGeneralFeatures from "../GeneralFeatures";

const idRole = ref("");

export default function useDeleteRole() {
  const { deleteRoles } = useRolesApi();

  const { fetchMembers } = useMembersSettings();

  const {
    snackbarProccess,
    openModalDeleted,
    toggleModalDeleted,
    confirmDeleted
  } = useGeneralFeatures();

  const processDelete = (roleId: string, dataRole: any) => {
    if (dataRole.members && dataRole.members.length === 0) {
      let msg = `Are you sure want to delete ${dataRole.role} role from database ?`;

      idRole.value = roleId;

      openModalDeleted(msg, "tableContentRole");
    } else {
      let msg = `Please remove all members in this role first before deleting this role`;

      snackbarProccess(msg, "snackbar");
    }
  };

  const successProcess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");

    fetchMembers("");
  };

  watch(confirmDeleted, value => {
    if (value.status) {
      if (value.fromComponent == "tableContentRole") {
        toggleModalDeleted();

        deleteRoles(idRole.value).then((res: any) => {
          confirmDeleted.fromComponent = "";
          confirmDeleted.status = false;

          successProcess(res.data.message);
        });
      }
    }
  });

  return { processDelete };
}
