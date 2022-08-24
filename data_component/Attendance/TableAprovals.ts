import { ref } from "@vue/composition-api";

export default function TableAprovals() {
  const tableHead = ref([
    {
      text: "Difference",
      width: "w-24"
    },

    {
      text: "Start",
      width: "w-24"
    },
    {
      text: "end",
      width: "w-24"
    },
    {
      text: "break",
      width: "w-24"
    },
    {
      text: "Project",
      width: "w-24"
    },
    {
      text: "Hours",
      width: "w-24"
    },
    {
      text: "status",
      width: "w-24"
    }
  ]);

  const content = ref([
    {
      difference: "before",
      start: "",
      end: "",
      break: "",
      project: "",
      hours: "",
      status: "",
      edit: false
    },
    {
      difference: "after",
      start: "09.30",
      end: "09.30",
      break: "00.00",
      project: "marketing management",
      hours: "08:12",
      status: "pending",
      edit: false
    }
  ]);

  return {
    tableHead,
    content
  };
}
