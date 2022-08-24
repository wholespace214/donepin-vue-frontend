import useAPI from "~/api";

export default function useGetGroup() {
  const { getGroupByid, getGroup } = useAPI();

  const getDataGroup = (id: any) => {
    return new Promise(resolve => {
      getGroupByid(id).then(res => resolve(res.data));
    });
  };
  const getAllGroups = async (page: any) => {
    return new Promise(resolve => {
      getGroup(page).then(res => resolve(res.data));
    });
  };
  return { getDataGroup, getAllGroups };
}
