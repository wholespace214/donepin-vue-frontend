import { ref } from "@vue/composition-api";

export default function TableFilter() {
  const tableHead = ref([
    {
      text: "assignet to",
      width: "w-48 lg:w-32 xl:w-48"
    },
    {
      text: "deadline",
      width: "w-40 lg:w-32 xl:w-40"
    },
    {
      text: "priority",
      width: "w-32 lg:w-28 xl:w-32"
    },
    {
      text: "time logs",
      width: "w-28 lg:w-20 xl:w-28"
    }
  ]);

  const task = ref([
    {
      taskName: "Look for more mockups",
      unreadMessage: true,
      deadline: "tomorrow",
      assignetTo: ["KT", "KT", "KT", "KT"],
      priority: "high",
      timeLogs: "04.45",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Print all magazine",
      unreadMessage: false,
      deadline: "15.06.2021",
      assignetTo: [],
      priority: "medium",
      timeLogs: "04.45",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Delete important files",
      unreadMessage: false,
      deadline: "01.02.2021",
      assignetTo: [],
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Look for deleted files",
      unreadMessage: false,
      deadline: "",
      assignetTo: [],
      priority: "low",
      timeLogs: "",
      modaEdit: false,
      secretTask: true
    },
    {
      taskName: "Find deleted files",
      unreadMessage: false,
      deadline: "yesterday",
      assignetTo: [],
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Look backup HDD",
      unreadMessage: false,
      deadline: "15.05.2021",
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },

    {
      taskName: "Close Company",
      unreadMessage: false,
      deadline: "11.02.2021",
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    }
  ]);

  const working = ref([
    {
      taskName: "Look foor more mockups",
      unreadMessage: true,
      deadline: "tomorrow",
      assignetTo: ["KT", "KT", "KT", "KT"],
      priority: "high",
      timeLogs: "04.45",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Print all magazine",
      unreadMessage: false,
      deadline: "15.06.2021",
      assignetTo: [],
      priority: "medium",
      timeLogs: "04.45",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Delete important files",
      unreadMessage: false,
      deadline: "01.02.2021",
      assignetTo: [],
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Look for deleted files",
      unreadMessage: false,
      deadline: "",
      assignetTo: [],
      priority: "low",
      timeLogs: "",
      modaEdit: false,
      secretTask: true
    },
    {
      taskName: "Find deleted files",
      unreadMessage: false,
      deadline: "yesterday",
      assignetTo: [],
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },
    {
      taskName: "Look backup HDD",
      unreadMessage: false,
      deadline: "15.05.2021",
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    },

    {
      taskName: "Close Company",
      unreadMessage: false,
      deadline: "11.02.2021",
      priority: "",
      timeLogs: "",
      modaEdit: false,
      secretTask: false
    }
  ]);

  const newWorking = {
    taskName: "Look foor more mockups",
    unreadMessage: true,
    deadline: "tomorrow",
    assignetTo: ["KT", "KT", "KT", "KT"],
    priority: "high",
    timeLogs: "04.45",
    modaEdit: false,
    secretTask: false
  };

  return {
    task,
    tableHead
  };
}
