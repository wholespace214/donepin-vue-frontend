import { ref } from "@vue/composition-api";

export default function TableAlpinaLogo() {
  // Should use file name Tasks
  const tableHead = ref([
    {
      text: "assignet to",
      class: "w-48"
    },
    {
      text: "dealine",
      class: "w-40"
    },
    {
      text: "Priority",
      class: "w-32"
    },
    {
      text: "Time Logs",
      class: "w-28"
    }
  ]);

  const content = ref([
    {
      tasks: "look for more mockups",
      private: true,
      unreadMessage: true,
      assignetTo: ["kt", "kt", "kt", "kt"],
      deadline: "tomorrow",
      priority: "high",
      timeLogs: "04:45",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "print all magazines",
      private: false,
      unreadMessage: false,
      assignetTo: [],
      deadline: "15.06.2021",
      priority: "medium",
      timeLogs: "04:45",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "delete important files",
      private: false,
      unreadMessage: false,
      assignetTo: [],
      deadline: "01.02.2021",
      priority: "",
      timeLogs: "",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "look for deleted files",
      private: true,
      unreadMessage: true,
      assignetTo: [],
      deadline: "",
      priority: "low",
      timeLogs: "",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "find deleted files",
      private: false,
      unreadMessage: false,
      assignetTo: [],
      deadline: "yesterday",
      priority: "",
      timeLogs: "",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "look backup HDD",
      private: true,
      unreadMessage: false,
      assignetTo: [],
      deadline: "15.05.2021",
      priority: "",
      timeLogs: "",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "find nothing",
      private: false,
      unreadMessage: false,
      assignetTo: [],
      deadline: "11.02.2021",
      priority: "",
      timeLogs: "",
      modalEdit: false,
      edit: false
    },
    {
      tasks: "close company",
      private: false,
      unreadMessage: false,
      assignetTo: [],
      deadline: "",
      priority: "",
      timeLogs: "",
      modalEdit: false,
      edit: false
    }
  ]);

  const boardContent = ref([
    {
      title: "new ideas",
      data: [
        {
          tasks: "look for more mockups",
          private: true,
          unreadMessage: true,
          assignetTo: ["kt", "kt", "kt", "kt"],
          deadline: "tomorrow",
          priority: "high",
          timeLogs: "04:45",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "print all magazines",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.06.2021",
          priority: "medium",
          timeLogs: "04:45",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "delete important files",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "01.02.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "look for deleted files",
          private: true,
          unreadMessage: true,
          assignetTo: [],
          deadline: "",
          priority: "low",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find deleted files",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "yesterday",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "look backup HDD",
          private: true,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.05.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find nothing",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "11.02.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "close company",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        }
      ]
    },
    {
      title: "working",
      data: [
        {
          tasks: "print all magazines",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.06.2021",
          priority: "medium",
          timeLogs: "04:45",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find deleted files",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "yesterday",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "look backup HDD",
          private: true,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.05.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find nothing",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "11.02.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        }
      ]
    },
    {
      title: "Done",
      data: [
        {
          tasks: "print all magazines",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.06.2021",
          priority: "medium",
          timeLogs: "04:45",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find deleted files",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "yesterday",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "look backup HDD",
          private: true,
          unreadMessage: false,
          assignetTo: [],
          deadline: "15.05.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        },
        {
          tasks: "find nothing",
          private: false,
          unreadMessage: false,
          assignetTo: [],
          deadline: "11.02.2021",
          priority: "",
          timeLogs: "",
          modalEdit: false,
          edit: false
        }
      ]
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

  const openModal = (index: number) => (content.value[index].modalEdit = true);

  return { tableHead, content, boardContent, priorityStyling, openModal };
}
