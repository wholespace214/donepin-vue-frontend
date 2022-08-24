import { ref } from "@vue/composition-api";

const allAbsenceData = ref();

const editAbsenceData = ref();

export default function TableAbsence() {
  const tableHead = ref([
    {
      text: "leave date",
      width: "w-24"
    },
    {
      text: "return date",
      width: "w-24"
    },
    {
      text: "days",
      width: "w-24"
    },
    {
      text: "left",
      width: "w-24"
    },
    {
      text: "type",
      width: "w-24"
    },
    {
      text: "reason",
      width: "w-24"
    },
    {
      text: "status",
      width: "w-24"
    }
  ]);

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
      diferrence: ""
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
      diferrence: ""
    }
  ]);

  return {
    tableHead,
    content,
    allAbsenceData,
    editAbsenceData
  };
}
