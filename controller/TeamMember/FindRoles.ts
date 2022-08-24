import TableRoles from "~/data_component/Roles/TableRoles";

export default function useFindRoles() {
  const { allRoles } = TableRoles();

  const findRoles = (index: number) => {
    let ro = allRoles.value.find((roles: any) => roles._id == index);

    if (ro) return ro.role;
  };

  return { findRoles };
}
