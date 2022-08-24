import { reactive, ref } from "@nuxtjs/composition-api";

const formNewMember = ref<any>([]);

const hoursPerWeek = ref<number>(40);

const yearlyVacation = ref<number>(34);

const workingTimeOptions = ref([
  {
    label: "working time",
    allData: [{ name: "Full time", id: "FULL TIME" }, { name: "Part time", id: "PART TIME" }],
  },
]);

const workingTime = ref({
  name: "Full time", id: "FULL TIME"
},
);


const memberJobRoles = ref();

const memberStatus = ref("active");

const statusValue = ref(["ACTIVE", "DISABLED"]);

const addMemberAttendance = ref(false);

const addVacationReset = ref(false);

const openModalAddMember = ref(false);

export default function addTeamMembers() {
  const month = ref([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December"
  ]);
  return {
    month,
    statusValue,
    memberJobRoles,
    memberStatus,
    openModalAddMember,
    formNewMember,
    addMemberAttendance,
    addVacationReset,
    hoursPerWeek,
    yearlyVacation,
    workingTime,
    workingTimeOptions
  };
}
