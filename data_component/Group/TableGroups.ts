import { ref } from "@nuxtjs/composition-api";

const defaultGroup: any = ref([
  {
    groupName: "finance",
    totalMembers: 0,
    edit: false
  },
  {
    groupName: "web development",
    totalMembers: 2,
    edit: false
  },
  {
    groupName: "IT",
    totalMembers: 9,
    edit: false
  },
  {
    groupName: "marketing",
    totalMembers: 1,
    edit: false
  },
  {
    groupName: "management",
    totalMembers: 1,
    edit: false
  }
]);

const apiGroup: any = ref();

const allGroup = ref();

export default function TableGroups() {
  const tableHead = ref([
    {
      text: "members",
      width: "w-40 lg:w-32 xl:w-40"
    }
  ]);

  return {
    tableHead,
    defaultGroup,
    apiGroup,
    allGroup
  };
}
