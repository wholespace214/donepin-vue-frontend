import { Ref, ref } from "@nuxtjs/composition-api";

const roles = ref();

const selectedRoles = ref();

const allRoles = ref();

const filteredAllRoles = ref();

const modalType = ref("");

const isRoleModalShown = ref(false);

const mainMenu: Ref<any> = ref({
  title: "",
  dataMembers: [],
  dataAccess: [{
    title: "team",
    valueSwitch: {
      access: false,
      manage: false,
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
      access: false,
      manage: false,
    }
  },
  {
    title: "finance",
    valueSwitch: {
      access: false,
      manage: false,
    }
  }],
});

export default function TableRoles() {
  const tableHead = ref([
    {
      text: "members",
      width: "w-40 lg:w-32 xl:w-40"
    }
  ]);

  return {
    allRoles,
    filteredAllRoles,
    isRoleModalShown,
    tableHead,
    modalType,
    roles,
    selectedRoles,
    mainMenu,
  };
}
