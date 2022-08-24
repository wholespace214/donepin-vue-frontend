import useMembersApi from "~/api/members";
import useRolesApi from "~/api/roles";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import TableRoles from "~/data_component/Roles/TableRoles";
import useAPI from "~/api";

import { get } from "lodash";

export default function useRolesSettings() {
  const { getUserList } = useAPI();

  const { getAllmember } = useMembersApi();

  const { getRoles } = useRolesApi();

  const { skeletonLoader } = useGeneralFeatures();

  const { allRoles } = TableRoles();

  const { allMember } = tableTeamMembers();

  // Should be run after firstSetting()
  const fetchRoles = () => {
    // skeletonLoader.value = !skeletonLoader.value;
    getRoles()
      .then((res: any) => {
        let getAllRoles: any = [];

        const { data } = res.data;

        data.forEach((element: any) => {
          element.isEdit = false;

          getAllRoles.push(element);
        });

        allRoles.value = getAllRoles;
      })
      .finally(() => {
        // skeletonLoader.value = !skeletonLoader.value;
      });
  };

  const getRoleMembers = () => {
    allRoles.value = allRoles.value.map((element: any) => {
      element.roleMembers = allMember.value.filter((member: any) => member.memberJobRole === element._id);
      element.totalMembers = element.roleMembers.length;
      return element;
    });
  };

  const getRoleByEmail = (email: string | null) => {
    const validRoles = allRoles.value.filter((role: any) => {
      // console.log(role , "roles")
      const validMembers = role.roleMembers?.filter((member: any) => member.email === email);
      return validMembers?.length === 0;
    });

    if (validRoles.length === 0) {
      return null;
    } else {
      return validRoles[0];
    }
  };

  // For role restriction
  const filterTableByRole = (table: any[], emailLocation: string, accessType: string) => {
    const email = localStorage.getItem("emailLogin");
    const role = getRoleByEmail(email);
    if (role === null) return [];

    const myAccess = role[accessType];
    if (!myAccess.isAccess) return [];
    else if (myAccess.isManage) return table;

    const filteredTable = table.filter((data: any) => {
      return email === get(data, emailLocation);
    });
    return filteredTable;
  };

  const filterTableByRoleInMembers = (table: any[], memberLocation: string, emailLocation: string, accessType: string) => {
    const email = localStorage.getItem("emailLogin");
    const role = getRoleByEmail(email);
    if (role === null) return [];

    const myAccess = role[accessType];
    if (!myAccess.isAccess) return [];
    else if (myAccess.isManage) return table;

    const filteredTable = table.filter((data: any) => {
      const members = get(data, memberLocation);
      const filteredMembers = members.filter((member: any) => {
        return email === get(member, emailLocation);
      });
      return filteredMembers.length > 0;
    });
    return filteredTable;
  };

  // Async function collection

  const getRoleMembersFromLocal = (allMember: any, localAllRoles: any) => {
    const newAllRoles = localAllRoles.map((element: any) => {
      element.roleMembers = allMember.filter((member: any) => member.memberJobRole?._id === element._id);
      element.totalMembers = element.roleMembers.length;
      return element;
    });
    return newAllRoles;
  };

  const asyncFetchRoles = async () => {
    const res = await getRoles();
    const { data: roles } = res.data;

    return roles.map((element: any) => {
      element.isEdit = false;
      return element;
    });
  };

  const asyncGetRoles = async () => {
    const promises = [] as any;
    promises.push(asyncFetchRoles());
    promises.push(getUserList());
    promises.push(getAllmember(1, ""));
    const [localAllRoles, allUserListResp, teamMemberResp]: any = await Promise.all(promises);

    const { data: allUserList } = allUserListResp.data;
    const { data: teamMember } = teamMemberResp.data;

    const teamMemberJoin = teamMember.membersId.map((element: any) => {
      const member = allUserList.find((user: any) => user.email === element.memberEmail);

      element.isEdit = false;
      element.memberName = `${member.firstName} ${member.lastName}`;
      const roleType: any = localAllRoles.find((role: any) => role._id === element.memberJobRole)?.role
      element.role = {
        roleType,
        rolId: element.memberJobRole
      };
      element.initial = `${member.firstName.charAt(0)}${member.lastName.charAt(0)} `;

      return element;
    });
    allRoles.value = getRoleMembersFromLocal(teamMemberJoin, localAllRoles);
    return allRoles.value;
  };

  return { fetchRoles, getRoleMembers, asyncGetRoles, getRoleByEmail, filterTableByRole, filterTableByRoleInMembers };
}
