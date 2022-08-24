import { ref } from "@vue/composition-api";

export default function TableAdminPlans() {
  const tableHead = ref([
    {
      text: "monthly price",
      class: "w-32"
    },
    {
      text: "anual price",
      class: "w-24"
    },
    {
      text: "members",
      class: "w-24 justify-center"
    },
    {
      text: "storage",
      class: "w-24 justify-center"
    },
    {
      text: "modules",
      class: "w-48"
    },
    {
      text: "status",
      class: "w-24 justify-center"
    }
  ]);

  return { tableHead };
}
