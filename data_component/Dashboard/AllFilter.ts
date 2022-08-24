import { reactive, ref } from "@nuxtjs/composition-api";
import { format, subYears } from 'date-fns';

const currentYear = format(new Date(), 'yyyy')
const lastYear = format(subYears(new Date(), 1,), 'yyyy')

const teamMembersFilter = reactive([
  {
    label: "group",
    value: [],
    allData: [
    ],
    dataActive: null,
    id: null
  },
  {
    label: "role",
    value: [],
    allData: [

    ],
    dataActive: null,
    id: null
  },
  {
    label: "status",
    value: [],
    allData: [
      {
        label: "ACTIVE",
        value: "ACTIVE"
      },
      {
        label: "DISABLED",
        value: "DISABLED"
      }
    ],
    dataActive: null
  }
]);

const absenceFilter = reactive([
  {
    label: "member",
    value: [],
    allData: [] as any,
    dataActive: null,
    id: null
  },
]);


const calendarFilter = reactive([
  {
    label: "member",
    value: [],
    allData: [
    ],
    dataActive: null,
    id: null

  },
  {
    label: "select month",
    value: [],
    allData: [
      { label: "January", value: "JANUARY" },
      { label: "February", value: "FEBRUARY" },
      { label: "March", value: "MARCH" },
      { label: "April", value: "APRIL" },
      { label: "May", value: "MAY" },
      { label: "June", value: "JUNE" },
      { label: "July", value: "JULY" },
      { label: "August", value: "AUGUST" },
      { label: "September", value: "SEPTEMBER" },
      { label: "October", value: "OCTOBER" },
      { label: "November", value: "NOVEMBER" },
      { label: "December", value: "DECEMBER" },
    ],
    dataActive: null,
    id: null

  },
  {
    label: "select year",
    value: [],
    allData: [
      { label: `${currentYear}`, value: `${currentYear}` },
      { label: `${lastYear}`, value: `${lastYear}` },
      { label: "2020", value: "2020" },
      { label: "2019", value: "2019" },
      { label: "2018", value: "2018" },
      { label: "2017", value: "2017" },
      { label: "2015", value: "2015" },
    ],
    dataActive: null,
    id: null

  }
]);

const projectFilter = reactive([
  {
    label: "project",
    value: [],
    allData: ["design", "web", "finance", "manage"],
    dataActive: null
  },
  {
    label: "members",
    value: [],
    allData: ["design", "web", "finance", "manage"],
    dataActive: null
  },
  {
    label: "deadline",
    value: [],
    allData: ["owner", "developer", "finance", "manage"],
    dataActive: null
  },
  {
    label: "status",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "priority",
    value: [],
    allData: ["design", "web", "finance", "manage"],
    dataActive: null
  }
]);

const projectDetailsTimelogsFilter = reactive([
  {
    label: "project",
    value: [],
    allData: ["design", "web", "finance", "manage"],
    dataActive: null
  },
  {
    label: "task",
    value: [],
    allData: ["owner", "developer", "finance", "manage"],
    dataActive: null
  },
  {
    label: "member",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "date",
    value: [],
    allData: ["ACTIVE", "DISABLED"],
    dataActive: null
  }
]);

const projectDetailsTasksFilter = reactive([
  {
    label: "project",
    value: [],
    allData: ["design", "web", "finance", "manage"],
    dataActive: null
  },
  {
    label: "deadline",
    value: [],
    allData: ["owner", "developer", "finance", "manage"],
    dataActive: null
  },
  {
    label: "status",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "priority",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "status",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "billable",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "milestone",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  },
  {
    label: "category",
    value: [],
    allData: ["active", "disabled"],
    dataActive: null
  }
]);


const attendanceFilter = reactive([
  {
    label: "member",
    value: [],
    allData: [
      {
        label: "design",
        value: "87277226363"
      },
      {
        label: "web",
        value: "8727722sss6363"
      },
      {
        label: "finance",
        value: "8727ss6363"
      },
      {
        label: "manager",
        value: "872ddd7722sss6363"
      }
    ],
    dataActive: null,
    id: null
  },
  {
    label: "projects",
    value: [],
    allData: [
      {
        label: "design",
        value: "87277226363"
      },
      {
        label: "web",
        value: "8727722sss6363"
      },
      {
        label: "finance",
        value: "8727ss6363"
      },
      {
        label: "manager",
        value: "872ddd7722sss6363"
      }
    ],
    dataActive: null,
    id: null
  },
]);

export default function allFilter() {
  const toCapitalized = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  return {
    toCapitalized,
    projectFilter,
    calendarFilter,
    teamMembersFilter,
    projectDetailsTasksFilter,
    projectDetailsTimelogsFilter,
    absenceFilter,
    attendanceFilter
  };
}
