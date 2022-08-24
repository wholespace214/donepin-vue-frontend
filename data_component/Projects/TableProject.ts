import { ref, computed, onMounted } from "@nuxtjs/composition-api";
import allMenu from "../Dashboard/AllMenu";

const project = ref();

const allProjects = ref();

const dummyProject = ref<any>([]);

const defaultLimitMember = ref(10);

const content = ref<any>([
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
    priority: "high",
    edit: false,
    memberTotal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
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
    priority: "medium",
    edit: false,
    memberTotal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14]
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
    priority: "medium",
    edit: false,
    memberTotal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
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
    priority: "",
    memberTotal: [1]
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
    priority: "medium",
    edit: false,
    memberTotal: [1, 2, 3, 4, 5, 6, 7]
  }
]);

const projectList = ref([]);

const addProject = ref(false);

export default function TableProject() {
  const { routePath, projectMenu } = allMenu();
  const tableHead = ref([
    {
      text: "members",
      class: "w-40"
    },
    {
      text: "deadline",
      class: "w-24"
    },
    {
      text: "time left",
      class: "w-52"
    },
    {
      text: "status",
      class: "w-36 justify-center"
    },
    {
      text: "priority",
      class: "w-36 justify-center"
    }
  ]);

  const priorityStyling = (value: string) => {
    switch (value) {
      case "low":
        return "border border-[#91C959] text-[#91C959]";
      case "medium":
        return "border border-[#EA8426] text-[#EA8426]";
      case "high":
        return "border border-[#F03D24] text-[#F03D24]";
      case "":
        return "border-0";
    }
  };

  const projectContent = computed(() => {
    if (routePath.value == projectMenu.value[1].link) {
      return content.value.filter((element: any) => element.favorite == true);
    }
    return content.value.filter((element: any) => element.favorite == false);
  });

  const chartData = computed(() => {
    return {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
      datasets: [
        {
          label: "Dataset 1",
          data: [20, 30, 50, 50, 100],
          backgroundColor: ["rgba(145, 201, 89,0.42)"]
        }
      ]
    };
  });

  // onMounted(() => {
  //   content.value.forEach((element: any) => {
  //     element.allMember = element.memberTotal.slice(0, 9);

  //     dummyProject.value.push(element);
  //   });
  // });

  const dataOptions = computed(() => {
    return {
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              padding: 20,
              pointStyle: "circle",
              usePointStyle: true
            }
          },
          title: {
            display: false
          }
        }
      }
    };
  });

  return {
    tableHead,
    project,
    allProjects,
    content,
    projectContent,
    chartData,
    dataOptions,
    projectList,
    dummyProject,
    priorityStyling,
    addProject,
    defaultLimitMember
  };
}
