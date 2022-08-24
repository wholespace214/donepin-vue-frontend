import { ref } from "@nuxtjs/composition-api";

const content = ref([
  {
    date: {
      date: "01.02.2021",
      day: "monday"
    },
    start: "09.30",
    end: "19.07",
    break: " 30min",
    project: "30min",
    hours: "08.00",
    diferrence: "",
    edit: false
  },
  {
    date: {
      date: "01.02.2021",
      day: "monday"
    },
    start: "09.30",
    end: "19.07",
    break: " 30min",
    project: "30min",
    hours: "08.00",
    diferrence: "",
    edit: false
  }
]);

const allAttendance = ref();

const filteredAttendance = ref();

export default function TableAttendance() {
  const tableHead = ref([
    {
      text: "date",
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
      text: "Difference",
      width: "w-24"
    },
    {
      text: "Comment",
      width: "w-24"
    }
  ]);

  return {
    allAttendance,
    filteredAttendance,
    tableHead,
    content
  };
}
