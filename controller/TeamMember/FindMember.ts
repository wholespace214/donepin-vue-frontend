import tableTeamMembers from "~/data_component/Members/TableTeamMembers";

export default function useFindMember() {
  const { allUserList } = tableTeamMembers();

  const findMember = (email: string) =>
    allUserList.value?.find((element: any) => element.email == email);

  return { findMember };
}
