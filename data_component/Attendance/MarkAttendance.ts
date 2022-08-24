import { reactive, ref } from "@vue/composition-api";

const AttendanceType = ref([{ id: "NON PROJECT", name: "Non Project" }, { id: "PROJECT BASED", name: "Project" }]);

// const Absent = ref([{ id: "PENDING", name: "Pending" }, { id: "NOT-APPROVED", name: "Not-Approved" }, { id: "APPROVED", name: "Approved" }])

const AttendanceModalStatus = ref("addAttendance");
const selectedData = ref();

export default function markAttendance() {
  const shift = reactive([
    {
      title: "shift 1",
      shiftManagement: [
        {
          label: "select date",
          value: "",
          type: "date"
        },
        {
          label: "attendance type",
          value: "",
          type: "select",
          items: AttendanceType.value
        },
        {
          label: "select project",
          value: "",
          type: "select",
          items: []
        },
        {
          label: "select task",
          value: "",
          type: "select",
          items: []
        },
        {
          label: "check in",
          value: "",
          type: "date"
        },
        {
          label: "check out",
          value: "",
          type: "date"
        },
        {
          label: "break",
          value: "",
          type: "time"
        },
        {
          label: "comment",
          value: "",
          type: "text"
        }
      ]
    },
  ]);

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
    "Novermber",
    "Desember"
  ]);


  const addMore = () => {
    shift.push({
      title: "shift " + (shift.length + 1),
      shiftManagement: [
        {
          label: "select date",
          value: "",
          type: "date"
        },
        {
          label: "attendance type",
          value: "",
          type: "select",
          items: AttendanceType.value
        },
        {
          label: "select project",
          value: "",
          type: "select",
          items: []
        },
        {
          label: "select task",
          value: "",
          type: "select",
          items: []
        },
        {
          label: "check in",
          value: "",
          type: "date"
        },
        {
          label: "check out",
          value: "",
          type: "date"
        },
        {
          label: "break",
          value: "",
          type: "time"
        },
        {
          label: "comment",
          value: "",
          type: "text"
        }
      ]
    });
  };



  return { shift, addMore, month, AttendanceType, AttendanceModalStatus, selectedData };
}
