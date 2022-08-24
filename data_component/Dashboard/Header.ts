import { ref, reactive } from "@vue/composition-api";

export default function HeaderComponent() {
  const modalProfile = ref(false);

  const modalSupport = ref(false);

  const modalNotification = ref(false);

  const modalSearch = ref(false);

  const modalAdd = ref(false);

  const modalAddComponent = ref([
    {
      text: "Mark Attendance",
      url: "/"
    },
    {
      text: "Add new Task",
      url: "/"
    },
    {
      text: "Add new Project",
      url: "/"
    }
  ]);

  return {
    modalProfile,
    modalSupport,
    modalNotification,
    modalSearch,
    modalAdd,
    modalAddComponent
  };
}
