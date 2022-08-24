import { ref } from "@nuxtjs/composition-api";

const invoices = ref();

export default function TableFinance() {
  const tableHead = ref([
    {
      text: "purchase order",
      class: "w-32"
    },
    {
      text: "project",
      class: "w-32"
    },
    {
      text: "client",
      class: "w-52"
    },
    {
      text: "date",
      class: "w-24"
    },
    {
      text: "type",
      class: "w-32"
    },
    {
      text: "status",
      class: "w-24"
    }
  ]);

  return {
    tableHead,
    invoices
  };
}
