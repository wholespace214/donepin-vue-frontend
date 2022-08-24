import { ref } from "@vue/composition-api";

export default function TableWorkspace() {
  const tableHead = ref([
    {
      text: "plan",
      class: "w-24"
    },
    {
      text: "members",
      class: "w-32"
    },
    {
      text: "monthly",
      class: "w-32"
    },
    {
      text: "status",
      class: "w-24"
    }
  ]);

  const content = ref([
    {
      name: "private"
    }
  ]);

  return {
    tableHead
  };
}
