import { ref, computed } from "@vue/composition-api";

export default function TableTimeLogs() {
  const tableHead = ref([
    {
      text: "members",
      class: "w-40 pl-4"
    },
    {
      text: "start",
      class: "w-32"
    },
    {
      text: "end",
      class: "w-32"
    },
    {
      text: "hours",
      class: "w-32"
    }
  ]);

  const content = ref([
    {
      tasks: {
        tasks: "first draft",
        favoriteProject: "alpina logo design"
      },
      member: "tommy solos",
      start: {
        time: "08:15",
        date: "01.02.2021"
      },
      end: {
        time: "08:15",
        date: "01.02.2021"
      },
      edit: false,
      hours: "08:32"
    },
    {
      tasks: {
        tasks: "setup project",
        favoriteProject: "marketing management system"
      },
      member: "mathias goldbers",
      start: {
        time: "08:15",
        date: "01.02.2021"
      },
      end: {
        time: "08:15",
        date: "01.02.2021"
      },
      edit: false,
      hours: "00:12"
    },
    {
      tasks: {
        tasks: "meeting",
        favoriteProject: "thoedor litt school"
      },
      member: "tommy solos",
      start: {
        time: "08:15",
        date: "01.02.2021"
      },
      end: {
        time: "08:15",
        date: "01.02.2021"
      },
      edit: false,
      hours: "00:25"
    },
    {
      tasks: {
        tasks: "domain registration",
        favoriteProject: "tucows social media"
      },
      member: "tommy solos",
      start: {
        time: "08:15",
        date: "01.02.2021"
      },
      end: {
        time: "08:15",
        date: "01.02.2021"
      },
      edit: false,
      hours: "00:25"
    },
    {
      tasks: {
        tasks: "flutter setup",
        favoriteProject: "mobile development"
      },
      member: "alisa marks",
      start: {
        time: "08:15",
        date: "01.02.2021"
      },
      end: {
        time: "08:15",
        date: "01.02.2021"
      },
      edit: false,
      hours: "00:25"
    }
  ]);

  return { tableHead, content };
}
