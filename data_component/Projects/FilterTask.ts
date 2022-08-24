import { ref, computed } from "@nuxtjs/composition-api";

export default function filterTask() {
  const filterDropdown = ref([
    {
      label: "project",
      value: [],
      allData: ["design", "web", "finance", "manage"],
      dataActive: null
    },
    {
      label: "assigned",
      value: [],
      allData: ["owner", "developer", "finance", "manage"],
      dataActive: null
    },
    {
      label: "deadline",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "status",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "priority",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "status",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "billable",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "milestone",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    },
    {
      label: "category",
      value: [],
      allData: ["active", "disabled"],
      dataActive: null
    }
  ]);
  return { filterDropdown };
}
