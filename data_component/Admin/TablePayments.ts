import { ref } from "@vue/composition-api";

export default function TableAdminPayments() {
  const tableHead = ref([
    {
      text: "package",
      class: "w-20 justify-center"
    },
    {
      text: "invoice",
      class: "w-36"
    },
    {
      text: "transaction ID",
      class: "w-32 justify-center"
    },
    {
      text: "amount",
      class: "w-20 justify-center"
    },
    {
      text: "date",
      class: "w-20 justify-center"
    },

    {
      text: "next payment",
      class: "w-28 justify-center"
    },
    {
      text: "payment gateway",
      class: "w-36"
    },
    {
      text: "status",
      class: "w-20 justify-center"
    }
  ]);

  return { tableHead };
}
