import { ref, useRoute, computed, reactive } from "@nuxtjs/composition-api";
interface addNewChecklist {
  text: String;
  completed: Boolean;
  editable: Boolean;
}

export default function workingTask() {
  const route = useRoute();
  const storageModal = ref(false);

  const params = computed(() => route.value.params.slug);

  const addChecklist = reactive({
    text: "",
    completed: false,
    editable: false
  }) as addNewChecklist;

  const projectInformation = ref([
    {
      projectName: "theodor litt schule",
      dependent: "logo design",
      priority: "medium",
      assigned_to: ["kt", "kt", "kt", "kt"],
      startDate: "12.01.2022",
      dueDate: "12.01.2022"
    }
  ]);

  const description = ref(
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna ligula, tristique eu elit et, finibus lacinia lacus. Ut tincidunt, dolor sed rhoncus scelerisque, ipsum nunc tempor tortor, sed volutpat turpis turpis sed quam. Proin non sagittis ex. Ut rutrum, est eu commodo rutrum, justo nibh imperdiet libero, sed venenatis erat leo a mauris. Nunc eget euismod nulla. Pellentesque luctus turpis eu quam lacinia varius fringilla feugiat tellus. Sed in fringilla dui, in gravida est. Nullam ut diam in magna sodales laoreet. Nulla facilisi."
  );

  const checklist = reactive([
    {
      text: "this is the first checklist",
      completed: false,
      editable: false
    },
    {
      text: "it can be deleted with backspace",
      completed: false,
      editable: false
    },
    {
      text: "when selected, check green",
      completed: true,
      editable: false
    },
    {
      text: "and text grey",
      completed: true,
      editable: false
    },
    {
      text: "can be deleted with hover to the bin",
      completed: false,
      editable: false
    }
  ]) as addNewChecklist[];

  const menu = ref([
    {
      text: "overview",
      target: ""
    },
    {
      text: "files",
      target: ""
    },
    {
      text: "history",
      target: ""
    },
    {
      text: "discussion",
      target: ""
    },
    {
      text: "time logs",
      target: ""
    }
  ]);

  const storageAsset = ref([
    {
      text: "from pc",
      icon: "mdi-monitor",
      target: ""
    },
    {
      text: "dropbox",
      icon: "mdi-dropbox",
      target: ""
    },
    {
      text: "google drive",
      icon: "mdi-google-drive",
      target: ""
    },
    {
      text: "OneDrive",
      icon: "mdi-microsoft-onedrive",
      target: ""
    }
  ]);

  const history = ref([
    {
      text: "Marta Luis has uploaded a new file.",
      date: "12 day ago"
    }
  ]);

  const timeLogs = ref([
    {
      user: "luisa maria",
      time: "04:45"
    },
    {
      user: "tome haward",
      time: "01:45"
    }
  ]);

  const discussion = ref([
    {
      user: "tom haward",
      date: "12 days ago",
      message:
        "@Luisa Maria, please upload the new file here using dropbox and send me an Email when you are done with the report.",
      files: false
    },
    {
      user: "luisa maria",
      date: "12 days ago",
      message:
        "@Tom Haward, did you receive the new Email? Please find attached the picture of the new draft.",
      files: true
    }
  ]);

  return {
    menu,
    storageModal,
    storageAsset,
    history,
    timeLogs,
    discussion,
    projectInformation,
    checklist,
    description,
    params,
    addChecklist
  };
}
