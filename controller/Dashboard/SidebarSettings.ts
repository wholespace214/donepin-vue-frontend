import { Ref } from '@nuxtjs/composition-api';
import useRolesSettings from "../FirstSettings/RolesSettings";

export default function useSidebarSettings() {

  const { asyncGetRoles, getRoleByEmail } = useRolesSettings();

  const filterSidebar = async (sidebarMenu: Ref) => {
    await asyncGetRoles();
    const myRole = getRoleByEmail(localStorage.getItem("emailLogin"));
    sidebarMenu.value = sidebarMenu.value.filter((menu: any) => {
      if (menu.roleAccess === undefined) {
        return true;
      } else {
        // return myRole[menu.roleAccess].isAccess; // Uncomment this if backend data is fixed
        return true;
      }
    });
  }
  return { filterSidebar }
}