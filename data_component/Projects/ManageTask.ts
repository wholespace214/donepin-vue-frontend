import { ref } from "@nuxtjs/composition-api";

export default function manageTask() {
  const newTask = ref([
    {
      taskName: "",
      taskDescription: "",
      assignetTo: [],
      section: "",
      startDate: "",
      deadline: "",
      status: "",
      priority: ""
    }
  ]);

  const addTask = () =>
    newTask.value.push({
      taskName: "",
      taskDescription: "",
      assignetTo: [],
      section: "",
      startDate: "",
      deadline: "",
      status: "",
      priority: ""
    });

  const isDepentTask = ref(false);

  const depentTask = ref("");

  const removeTask = (index: number) => newTask.value.splice(index, 1);

  return { newTask, isDepentTask, addTask, removeTask, depentTask };
}
