import { ref } from "@vue/composition-api";

export default function TableAdminAdmins() {
  const tableHead = ref([
    {
      text: "registration",
      class: "w-32 justify-center"
    },
    {
      text: "last login",
      class: "w-36"
    },
    {
      text: "IP",
      class: "w-28 justify-center"
    }
  ]);

  return { tableHead };
}
