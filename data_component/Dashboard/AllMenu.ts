import { ref, computed, useRoute, onMounted } from "@nuxtjs/composition-api";

export default function allMenu() {
  const hamMenu = ref(true);
  const route = useRoute();

  const routePath = computed(() => route.value.path);

  const params = computed(() => route.value.params.slug);

  const teamMenu = ref([
    { text: "members", link: "/members" },
    { text: "Groups", link: "/groups" },
    { text: "roles", link: "/roles" }
  ]);

  const attendanceMenu = ref([
    {
      text: "Time Clock",
      link: "/attendance"
    },
    {
      text: "Calendar",

      link: "/calendar"
    },
    { text: "Absence", link: "/absence" },
    { text: "holidays", link: "/holidays" },
    { text: "approvals", link: "/approvals" }
  ]);

  const projectDetailMenu = ref([
    { text: "overview", link: `/projects/${params.value}/overview` },
    { text: "tasks", link: `/projects/${params.value}/tasks` },
    { text: "timeline", link: `/projects/${params.value}/timeline` },
    { text: "files", link: `/projects/${params.value}/files` },
    { text: "time logs", link: `/projects/${params.value}/time-logs` },
    { text: "discussion", link: `/projects/${params.value}/discussion` }
  ]);

  const projectMenu = ref([
    { text: "all projects", link: "/projects" },
    { text: "favorite", link: "/projects/favorite" }
  ]);

  const myTask = ref([
    { text: "list", link: "/" },
    { text: "timeline", link: "/" }
  ]);

  const financeMenu = ref([
    {
      text: "invoices",
      linkactive: false,
      link: "/finance"
    },
    {
      text: "company",
      linkactive: false,
      link: "/finance/company"
    },
    {
      text: "clients",
      linkactive: false,
      link: "/finance/clients"
    },
    {
      text: "settings",
      linkactive: false,
      link: "/finance/settings"
    }
  ]);

  const invoiceMenu = ref([
    {
      text: "invoices",
      linkactive: false,
      link: "/"
    },
    {
      text: "invoice client",
      linkactive: false,
      link: "/"
    },
    {
      text: "settings",
      linkactive: false,
      link: "/"
    }
  ]);

  const settingsMenu = ref([
    {
      text: "workspace settings",
      linkactive: false,
      link: "/settings"
    },
    {
      text: "modules",
      linkactive: false,
      link: "/settings/modules"
    },
    {
      text: "subscription & billing",
      linkactive: false,
      link: "/settings/subscription-billing"
    },
    {
      text: "workspace",
      linkactive: false,
      link: "/settings/workspace"
    }
  ]);

  const adminMenu = ref([
    {
      text: "home",
      linkactive: false,
      link: "/admin"
    },
    {
      text: "users",
      linkactive: false,
      link: "/admin/users"
    },
    {
      text: "workspaces",
      linkactive: false,
      link: "/admin/workspaces"
    },
    {
      text: "payments",
      linkactive: false,
      link: "/admin/payments"
    },
    {
      text: "plans",
      linkactive: false,
      link: "/admin/plans"
    },
    {
      text: "coupons",
      linkactive: false,
      link: "/admin/coupons"
    },
    {
      text: "admins",
      linkactive: false,
      link: "/admin/admins"
    },
    {
      text: "settings",
      linkactive: false,
      link: "/admin/settings"
    }
  ]);

  const dashboardMenu = ref([
    {
      text: "activity",
      linkactive: false,
      link: "/"
    },
    {
      text: "profile",
      linkactive: false,
      link: "/admin/users"
    },
    {
      text: "projects",
      linkactive: false,
      link: "/"
    },
    {
      text: "tasks",
      linkactive: false,
      link: "/"
    },
    {
      text: "leaves",
      linkactive: false,
      link: "/admin/plans"
    },
    {
      text: "time logs",
      linkactive: false,
      link: "/"
    }
  ]);

  return {
    adminMenu,
    myTask,
    financeMenu,
    teamMenu,
    invoiceMenu,
    attendanceMenu,
    settingsMenu,
    routePath,
    projectMenu,
    projectDetailMenu,
    dashboardMenu,
    hamMenu
  };
}
