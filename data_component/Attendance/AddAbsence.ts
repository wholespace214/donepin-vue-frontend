import { ref, reactive } from "@vue/composition-api";
import TableAbsence from "~/data_component/Attendance/TableAbsence";

const { editAbsenceData } = TableAbsence();
const absence: any[] = reactive([]);

const addAbsenceInit = ref({
  // id: "",
  member: editAbsenceData.value?.memberId?._id || "",
  absenceType: editAbsenceData.value?.absenceType || "",
  duration: editAbsenceData.value?.duration || "",
  begin: editAbsenceData.value?.begin || new Date(),
  end: editAbsenceData.value?.end || new Date(),
  reason: editAbsenceData.value?.reason || "",
  status: editAbsenceData.value?.approvalStatus || ""
});

const openAddAbsence = ref(false);

const absenceModalStatus = ref();

const absenceLoader = ref(false)

const absenceType: any = ref([]);

const absenceDuration = ref([
  "SINGLE-DAY",
  "HALF-DAY",
  "MULTIPLE-DAYS",
]);

const absenceStatus = ref([
  "APPROVE",
  "DECLINE",
  "PENDING",
]);

export default function addNewAbsenceData() {

  return {
    addAbsenceInit, openAddAbsence,
    absenceModalStatus, absenceLoader,
    absence, absenceType, absenceDuration,
    absenceStatus
  };
}

