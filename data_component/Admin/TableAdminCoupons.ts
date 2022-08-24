import { ref } from "@vue/composition-api";

export default function TableAdminCoupons() {
  const tableHead = ref([
    {
      text: "code",
      class: "w-28"
    },
    {
      text: "assign",
      class: "w-48"
    },
    {
      text: "min order",
      class: "w-24 justify-center"
    },
    {
      text: "type",
      class: "w-24 justify-center"
    },
    {
      text: "discount",
      class: "w-20 justify-center"
    },
    {
      text: "usage",
      class: "w-20 justify-center"
    },
    {
      text: "users",
      class: "w-24 justify-center"
    }
    // {
    //   text: "status",
    //   class: "w-24 justify-center"
    // }
  ]);

  return { tableHead };
}
