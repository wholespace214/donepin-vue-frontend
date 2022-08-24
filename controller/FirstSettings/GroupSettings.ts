import useGroupApi from "~/api/group";
import TableGroups from "~/data_component/Group/TableGroups";
import useGeneralFeatures from "../GeneralFeatures";

export default function useGroupSettings() {
  const { getGroup } = useGroupApi();

  const { skeletonLoader } = useGeneralFeatures();

  const { allGroup } = TableGroups();

  const fetchGroup = () => {
    skeletonLoader.value = true;
    getGroup()
      .then(res => {
        const { data } = res.data;

        let createdGroup: any[] = [];

        data.forEach((element: any) => {
          let group = {
            id: element._id,
            groupName: element.groupName,
            totalMembers: element.groupMemberId.length,
            groupMember: element.groupMemberId,
            edit: false
          };

          createdGroup.push(group);
        });

        allGroup.value = createdGroup;
      })
      .finally(() => {
        skeletonLoader.value = false;
      });
  };
  return { fetchGroup };
}
