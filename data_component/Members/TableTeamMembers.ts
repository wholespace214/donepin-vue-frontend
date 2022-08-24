import { ref } from "@nuxtjs/composition-api";

const content = ref();

const allMember = ref();

const allUserList = ref();
const selectedMember = ref();
const team = ref();

export default function tableTeamMembers() {
  const tableHead = ref([
    {
      text: "groups",
      class: "w-48"
    },
    {
      text: "role",
      class: "w-32"
    },
    {
      text: "status",
      class: "w-28"
    }
  ]);

  return {
    tableHead,
    content,
    allMember,
    allUserList,
    selectedMember,
    team
  };
}
