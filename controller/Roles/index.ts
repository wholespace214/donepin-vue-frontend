import { watch } from '@nuxtjs/composition-api';
import TableRoles from '~/data_component/Roles/TableRoles';
import useRolesSettings from '../FirstSettings/RolesSettings';

const generateValueSwitch = (data: any) => {
  return {
    access: data["isAccess"],
    manage: data["isManage"]
  }
}

const parseRoleRequest = (data: any) => {
  console.log("data in parse roleReq", data)
  return {
    isAccess: data.valueSwitch.access,
    isManage: data.valueSwitch.manage
  }
}

const parseRoleAccessFromBackend = (role: any) => {
  console.log("role is acces from backemd function", role)
  return {
    title: role["role"],
    dataMembers: role["roleMembers"],
    dataAccess: [{
      title: "finance",
      valueSwitch: generateValueSwitch(role["finance"])
    }, {
      title: "work",
      valueSwitch: generateValueSwitch(role["work"])
    }, {
      title: "attendance",
      valueSwitch: generateValueSwitch(role["attendance"])
    }, {
      title: "team",
      valueSwitch: generateValueSwitch(role["team"])
    }],
  }
}

const parseRoleAccessToBackend = (role: any) => {
  console.log("role is access to backemd function", role)
  return {
    role: role.title,
    finance: parseRoleRequest(role.dataAccess.filter((data: any) => data.title === 'finance')[0]),
    work: parseRoleRequest(role.dataAccess.filter((data: any) => data.title === 'work')[0]),
    attendance: parseRoleRequest(role.dataAccess.filter((data: any) => data.title === 'attendance')[0]),
    team: parseRoleRequest(role.dataAccess.filter((data: any) => data.title === 'team')[0])
  }
}

export default function useRole() {
  const { selectedRoles, mainMenu, allRoles, filteredAllRoles } = TableRoles();
  const { filterTableByRoleInMembers } = useRolesSettings();

  watch(selectedRoles, () => {
    if (selectedRoles.value !== undefined) {
      mainMenu.value = parseRoleAccessFromBackend(selectedRoles.value)
    } else {
      mainMenu.value = {
        title: "",
        dataMembers: [],
        dataAccess: [{
          title: "team",
          valueSwitch: {
            access: true,
            manage: true,
          }
        },
        {
          title: "attendance",
          valueSwitch: {
            access: false,
            manage: false,
          }
        },
        {
          title: "work",
          valueSwitch: {
            access: true,
            manage: true,
          }
        },
        {
          title: "finance",
          valueSwitch: {
            access: true,
            manage: true,
          }
        }],
      }
    }
  })

  watch(allRoles, () => {
    if (allRoles.value !== undefined) {
      filteredAllRoles.value = filterTableByRoleInMembers(allRoles.value, "roleMembers", "memberEmail", "team")
    } else {
      return [];
    }
  })

  return { parseRoleAccessFromBackend, parseRoleAccessToBackend };
}
