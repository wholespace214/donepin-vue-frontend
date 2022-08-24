import TableRoles from '~/data_component/Roles/TableRoles';
import useGeneralFeatures from "../GeneralFeatures";
import useRole from '.';
import useRolesSettings from '../FirstSettings/RolesSettings';
import useRolesApi from '~/api/roles';


export default function useRoleEditController() {
  const { isRoleModalShown, selectedRoles, mainMenu, modalType } = TableRoles();

  const { parseRoleAccessToBackend } = useRole();

  const { updateRoles, createRoles } = useRolesApi();

  const { asyncGetRoles } = useRolesSettings();

  const { snackbarProccess } = useGeneralFeatures();

  const submitEditRole = () => {
    if (mainMenu.value.title !== undefined) {
      if (modalType.value === 'edit') {
        updateRoles(selectedRoles.value._id, parseRoleAccessToBackend(mainMenu.value)).then(res => {
          onSuccess("Role Edited");
        });
      } else if (modalType.value === 'add') {
        createRoles(parseRoleAccessToBackend(mainMenu.value)).then(res => {
          onSuccess("Role Created");
        });
      }
    }
  };

  const onSuccess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");

    closeModal();

    asyncGetRoles();
  };

  const closeModal = () => {
    isRoleModalShown.value = !isRoleModalShown.value;
  };

  return { submitEditRole };
}
