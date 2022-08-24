import useMembersApi from "~/api/members";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useGeneralFeatures from "../GeneralFeatures";
import useGetGroup from "../Group/getGroup";
import useFindMember from "../TeamMember/FindMember";
import useUsersSettings from "./UsersSettings";
import useRolesSettings from "./RolesSettings";
import useFindRoles from "../TeamMember/FindRoles";
import allFilter from "~/data_component/Dashboard/AllFilter";

export default function useMembersSettings() {
  const { getAllmember } = useMembersApi();
  const {
    calendarFilter,
    attendanceFilter,
    absenceFilter,
    toCapitalized
  } = allFilter();

  const { fetchRoles } = useRolesSettings();

  const { getUsers } = useUsersSettings();

  const { findMember } = useFindMember();

  const { findRoles } = useFindRoles();

  const { skeletonLoader } = useGeneralFeatures();

  const { allMember, team } = tableTeamMembers();

  const { getDataGroup } = useGetGroup();

  const fetchMembers = (params: any) =>
    new Promise(resolve => {
      // skeletonLoader.value = !skeletonLoader.value;
      fetchRoles();
      getUsers().then(res => {
        getAllmember(1, params).then(res => {
          let allTeam: any[] = [];
          const { data } = res.data;

          data.membersId.forEach((element: any) => {
            const member = findMember(element.memberEmail);
            const allGroup: any = [];

            // if (element.groupId.length > 0) {
            //   const group = element.groupId;

            //   group.forEach((element: any) => {
            //     getDataGroup(element).then(res => {
            //       console.log(res);
            //     });
            //   });
            // } else {
            //   return;
            // }
            element.isEdit = false;
            element.group = allGroup;
            element.memberName = `${member.firstName} ${member.lastName}`;
            element.initial = `${member.firstName.charAt(0)}${member.lastName.charAt(0)} `;
            element.role = {
              roleType: findRoles(element.memberJobRole),
              rolId: element.memberJobRole
            };
            element.label = `${member.firstName} ${member.lastName}`;
            element.id = member.memberId


            allTeam.push(element);
          });

          allMember.value = allTeam;
          calendarFilter[0].allData = allTeam;
          attendanceFilter[0].allData = allTeam;
          absenceFilter[0].allData = allTeam;

          team.value = data;
          resolve(true);
        });
      });
      // .finally(() => {
      //   skeletonLoader.value = !skeletonLoader.value;
      // });
    });

  return { fetchMembers };
}
