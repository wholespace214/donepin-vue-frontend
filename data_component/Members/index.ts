import { ref } from "@nuxtjs/composition-api";

const filterModal = ref(false);

const addNewMember = ref(false);

const editMember = ref(false);

const profile = ref(false);

const changedPasword = ref(false);

export default function members() {
  return {
    filterModal,
    addNewMember,
    editMember,
    profile,
    changedPasword
  };
}
