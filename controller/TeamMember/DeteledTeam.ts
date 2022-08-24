import { onMounted } from "@nuxtjs/composition-api";
import useAPI from "~/api";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";

export default function useDeletedMembers() {
  const { deletedMember } = useAPI();
  // const { removeTeamMember } = useAPI();
  return {};
}
