import { ref } from "@vue/composition-api";

export default function TableAdminUsers() {
  const tableHead = ref([
    {
      text: "admin workspace",
      class: "w-48"
    },
    {
      text: "registration",
      class: "w-32"
    },
    {
      text: "last login",
      class: "w-32"
    },
    {
      text: "IP",
      class: "w-32"
    },
    {
      text: "status",
      class: "w-24"
    }
  ]);

  return { tableHead };
}
