import { ref } from "@vue/composition-api";

export default function TableClient() {
  const tableHead = ref([
    {
      text: "company",
      class: "w-32"
    },
    {
      text: "type",
      class: "w-32"
    },
    {
      text: "location",
      class: "w-36"
    },
    {
      text: "client number",
      class: "w-32"
    },
    {
      text: "email",
      class: "w-40"
    },
    {
      text: "phone",
      class: "w-40"
    },
    {
      text: "member",
      class: "w-32 justify-center"
    }
  ]);

  const content = ref([
    {
      project: {
        projectName: "alpina logo design",
        tasks: "12 tasks"
      },
      members: ["kt", "kt", "kt", "kt", "kt", "kt", "kt", "kt", "kt"],
      deadLine: "15.06.2021",
      timeLeft: "30 days",
      status: "working",
      favorite: true,
      priority: "high"
    },
    {
      project: {
        projectName: "marketing management system",
        tasks: "2 tasks"
      },
      members: ["kt", "kt", "kt", "kt"],
      deadLine: "",
      timeLeft: "",
      status: "done",
      favorite: false,
      priority: "medium"
    },
    {
      project: {
        projectName: "theodor litt school",
        tasks: "5 tasks"
      },
      members: ["t", "t", "t", "t", "t", "t", "t", "t", "t"],
      deadLine: "",
      timeLeft: "25%",
      status: "on hold",
      favorite: false,
      priority: "medium"
    },
    {
      project: {
        projectName: "tucow social media",
        tasks: "7 taks"
      },
      members: ["t", "t", "t", "t"],
      deadLine: "today",
      timeLeft: "1 day",
      status: "canceled",
      favorite: false,
      priority: ""
    },
    {
      project: {
        projectName: "mobile development",
        tasks: "5 tasks"
      },
      members: ["t", "t", "t"],
      deadLine: "01.12.2020",
      timeLeft: "overdue",
      status: "",
      favorite: false,
      priority: "medium"
    }
  ]);

  return {
    tableHead,
    content
  };
}
