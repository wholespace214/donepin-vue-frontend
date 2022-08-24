import { ref } from "@vue/composition-api";

export default function TableAdminWorkspaces() {
  const tableHead = ref([
    {
      text: "admin",
      class: "w-40"
    },
    {
      text: "package",
      class: "w-32 justify-center"
    },
    {
      text: "users",
      class: "w-24 justify-center"
    },
    {
      text: "activation",
      class: "w-32 justify-center"
    },
    {
      text: "last activation",
      class: "w-32 justify-center"
    },

    {
      text: "status",
      class: "w-24 justify-center"
    }
  ]);

  return { tableHead };
}
