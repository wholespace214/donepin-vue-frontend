import useRolesApi from "~/api/roles";

export default function useGetRoles() {
  const { getRoles } = useRolesApi();

  const getDataRoles = () => {
    return new Promise(resolve => {
      getRoles().then(res => resolve(res.data));
    });
  };

  return { getDataRoles };
}
