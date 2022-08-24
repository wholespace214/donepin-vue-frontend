export default function useWorkingTask() {
  const pushNewChecklist = (newChecklist: any, taskList: any) => {
    taskList.push(newChecklist);
  };

  const editTask = (task: any, index: number, input: any) => {
    input[index].focus();
    task[index].editable = !task[index].editable;
  };

  const checklistCompleted = (index: number, taskList: any) =>
    (taskList[index].completed = !taskList[index].completed);

  const deletedTask = (index: number, taskList: any) =>
    taskList.splice(index, 1);

  return {
    editTask,
    deletedTask,
    checklistCompleted,
    pushNewChecklist
  };
}
