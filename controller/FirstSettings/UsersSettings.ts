import useUsersApi from "~/api/user";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useGeneralFeatures from "../GeneralFeatures";

export default function useUsersSettings() {
  const { getUsersList } = useUsersApi();

  const { allUserList } = tableTeamMembers();

  const { skeletonLoader } = useGeneralFeatures();

  const storeAllUsers = (userList: any[]) =>
    new Promise(resolve => {
      let allUser: any[] = [];

      userList.forEach((element: any) => {
        element.fullName = `${element.firstName} ${element.lastName}`;
        element.initials = `${element.firstName.charAt(
          0
        )}${element.lastName.charAt(0)}`;

        allUser.push(element);
      });

      allUserList.value = allUser;

      resolve(true);
    });

  const getUsers = () =>
    new Promise(resolve => {
      getUsersList().then(res => {
        storeAllUsers(res.data.data).then(res => {
          resolve(true);
        });
      });
    });

  return { getUsers };
}
