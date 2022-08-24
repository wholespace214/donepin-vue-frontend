import { ref } from "@nuxtjs/composition-api";

const addGroup = ref(false);

const filterModal = ref(false);

const modal = ref<boolean>(false);

const groupCurrent = ref<number | any>(); //Should use groupCurrent

const editGroup = ref(false);

const group = ref<any>();

const newMembers = ref<any[]>([]);

const modalTitle = ref();

const modalStatus = ref();

const variantColorClass = ref([
  "DPYELLOW",
  "DPPINK",
  "DPBLUE",
  "DPPURPLE",
  "DPYELLOW"
]);

export default function dataGroupModal() {
  return {
    addGroup,
    filterModal,
    modalTitle,
    modalStatus,
    modal,
    editGroup,
    group,
    newMembers,
    groupCurrent,
    variantColorClass
  };
}
