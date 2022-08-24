import { ref } from "@nuxtjs/composition-api";

const Status = ref([
  { id: "NOT STARTED", name: "Not Started" },
  { id: "WORKING", name: "Working" },
  { id: "FINISHED", name: "Finished" },
  { id: "ON HOLD", name: "On Hold" },
  { id: "CANCELED", name: "Cancelled" },
  { id: "UNDER REVIEW", name: "Under Review" },

]);

const Priority = ref([
  { id: "LOW", name: "Low" },
  { id: "MEDIUM", name: "Medium" },
  { id: "HIGH", name: "High" },
]);

const editProject = ref(false);

export default function addNewProject() {
  const newProject = ref({
    projectName: {
      label: "project name",
      value: ""
    },
    startDate: {
      label: "start date",
      // type: "date",
      value: new Date()
    },
    deadline: {
      label: "deadline",
      value: new Date()
    },
    members: {
      label: "members",
      value: []
    },
    teams: {
      label: "teams",
      value: []
    },
    status: {
      label: "status",
      value: Status.value[0].id
    },
    priority: {
      label: "priority",
      value: Priority.value[0].id
    },
    projectDesc: {
      label: "project description",
      value: []
    }
  });

  const allColor = ref([
    "#D4BE45",
    "#CE2EE9",
    "#19CCF3",
    "#F0F425",
    "#C9E22B",
    "#D4BE45",
    "#CE2EE9",
    "#19CCF3",
    "#F0F425",
    "#C9E22B",
    "#D4BE45",
    "#CE2EE9",
    "#19CCF3"
  ]);

  return { newProject, allColor, editProject, Status, Priority };
}
