import { useContext } from "@nuxtjs/composition-api";
import useAPI from "~/api";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useSetupProfile from "./Profile";
import useFindMember from "./TeamMember/FindMember";
import TableGroups from "~/data_component/Group/TableGroups";
import Client from "~/data_component/Finance/Client";
import useGeneralFeatures from "./GeneralFeatures";
import TableProject from "~/data_component/Projects/TableProject";
import useGetGroup from "./Group/getGroup";
import useFindRoles from "./TeamMember/FindRoles";
import TableFinance from "~/data_component/Finance/TableFinance";
import useRolesSettings from "./FirstSettings/RolesSettings";
import useProjectsApi from "~/api/projects";

export default function useFirstSetting() {
  const {
    getUserList,
    getAllTeamMember,
    getGroup,
    getClient,
    getAllMember,
    getInvoice
  } = useAPI();

  const { getProject } = useProjectsApi();

  const { getDataGroup } = useGetGroup();

  const { allMember, allUserList } = tableTeamMembers();

  const { allProjects } = TableProject();

  const { allClient } = Client();

  const { skeletonLoader } = useGeneralFeatures();

  const { defaultGroup, apiGroup, allGroup } = TableGroups();

  const { invoices } = TableFinance();

  const { fetchRoles, getRoleMembers } = useRolesSettings();

  const { $storage } = useContext();

  const { createdProfile } = useSetupProfile();

  const { findMember } = useFindMember();

  const { findRoles } = useFindRoles();

  const storeAllUser = (userList: any[]) => {
    let allUser: any[] = [];
    userList.forEach((element: any) => {
      element.fullName = `${element.firstName} ${element.lastName}`;
      element.initials = `${element.firstName.charAt(
        0
      )}${element.lastName.charAt(0)}`;

      allUser.push(element);
    });
    allUserList.value = allUser;
  };

  const fetchProject = () => {
    skeletonLoader.value = !skeletonLoader.value;
    getProject()
      .then(res => {
        let allData: any[] = [];

        res.data.data.forEach((element: any) => {
          element.edit = false;

          allData.push(element);
        });

        allProjects.value = allData;
      })
      .finally(() => {
        skeletonLoader.value = !skeletonLoader.value;
      });

    //don't forget make slice member
  };

  // const firstSetting = () => {
  //   //get all user and setup member
  //   fetchRoles();
  //   getUserList().then(res => {
  //     storeAllUser(res.data.data);

  //     if (res.status == 200) {
  //       getAllTeamMember(1).then(response => {
  //         let allTeam: any[] = [];

  //         const { data } = response.data;

  //         data.forEach((element: any) => {
  //           const member = findMember(element.memberEmail);

  //           const allGroup: any = [];

  //           if (element.groupId.length > 0) {
  //             const getGroup = element.groupId;

  //             getGroup.forEach((element: any) => {
  //               getDataGroup(element).then((res: any) => {
  //                 allGroup.push(res.data.groupName);
  //               });
  //             });
  //           }

  //           element.isEdit = false;
  //           element.group = allGroup;
  //           element.memberName = `${member.firstName} ${member.lastName}`;
  //           element.role = {
  //             roleType: findRoles(element.memberJobRole),
  //             rolId: element.memberJobRole
  //           };
  //           element.initial = `${member.firstName.charAt(
  //             0
  //           )}${member.lastName.charAt(0)} `;

  //           allTeam.push(element);
  //         });

  //         createdProfile($storage.getLocalStorage("emailLogin"));

  //         allMember.value = allTeam;

  //         getRoleMembers();
  //       });
  //     }
  //   });

  //   fetchGroup();
  // };

  const fetchGroup = () => {
    skeletonLoader.value = !skeletonLoader.value;
    getGroup(1)
      .then(res => {
        const { data } = res.data;

        let createdGroup: any[] = [];

        data.forEach((element: any) => {
          //for allmember please use like this object [{id , name, email , initial}]
          let group = {
            id: element._id,
            groupName: element.groupName,
            totalMembers: element.groupMemberId.length,
            groupMember: element.groupMemberId,
            edit: false
          };

          createdGroup.push(group);
        });

        apiGroup.value = createdGroup;

        // allGroup.value = defaultGroup.value.concat(apiGroup.value);

        allGroup.value = apiGroup.value;
      })
      .finally(() => {
        skeletonLoader.value = !skeletonLoader.value;
      });
  };

  const fetchAllMemberGroup = (groupName: any) => {
    getAllMember(groupName).then(res => {
      console.log(res);
    });
  };

  const fetchClient = () => {
    skeletonLoader.value = !skeletonLoader.value;
    getClient()
      .then(res => {
        let client: any[] = [];

        const { data } = res.data;

        data.forEach((element: any) => {
          element.edit = false;

          client.push(element);
        });

        allClient.value = client;
      })
      .finally(() => {
        skeletonLoader.value = !skeletonLoader.value;
      });
  };

  const fetchInvoices = () => {
    skeletonLoader.value = !skeletonLoader.value;
    getInvoice()
      .then(res => {
        const { data } = res.data;

        const allInvoices: any[] = [];

        data.forEach((element: any) => {
          element.isEdit = false;

          allInvoices.push(element);
        });

        invoices.value = allInvoices;
      })
      .finally(() => {
        skeletonLoader.value = !skeletonLoader.value;
      });
  };

  return {
    // firstSetting,
    // fetchAllMemberGroup,
    fetchGroup,
    fetchClient,
    fetchProject,
    fetchRoles,
    fetchInvoices
  };
}
