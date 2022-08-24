import { ref, } from "@vue/composition-api";
const absenceTypeData= ref([]);


const absenceModalStatus = ref();

const absenceTypeLoader = ref(false)



export default function AbsenceTypeData() {

  return {
    absenceModalStatus, absenceTypeLoader,
    absenceTypeData,
   
  };
}

