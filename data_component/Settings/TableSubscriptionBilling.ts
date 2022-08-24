import { ref } from "@vue/composition-api";

export default function TableSubscriptionBilling() {
  const tableHeadSubscription = ref([
    {
      text: "Monthly price",
      class: "w-32"
    },
    {
      text: "user",
      class: "w-24 flex justify-center"
    },
    {
      text: "storage",
      class: "w-32 justify-center"
    },
    {
      text: "projects",
      class: "w-24 justify-center"
    },
    {
      text: "invoices",
      class: "w-24 justify-center"
    },
    {
      text: "modules",
      class: "w-40 justify-center"
    },
    {
      text: "status",
      class: "w-24 justify-center"
    }
  ]);

  const tableHeadBilling = ref([
    {
      text: "Invoice",
      class: "w-36"
    },
    {
      text: "date",
      class: "w-24"
    },
    {
      text: "payment",
      class: "w-24"
    },
    {
      text: "total",
      class: "w-24"
    },
    {
      text: "status",
      class: "w-24"
    }
  ]);

  return {
    tableHeadSubscription,
    tableHeadBilling
  };
}
