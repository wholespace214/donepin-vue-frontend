import { ref } from "@vue/composition-api";

export default function SidebarPage() {
  const sidebarMenu = ref([
    {
      text: "Home",
      icon: "icon-sidebar-home.svg",
      url: "/members",
      roleAccess: "team"
    },
    {
      text: "Teams",
      icon: "icon-sidebar-team.svg",
      url: "/groups",
      roleAccess: "team"
    },
    {
      text: "Attendance",
      icon: "icon-sidebar-attendance.svg",
      url: "/attendance",
      roleAccess: "attendance"
    },
    {
      text: "Projects",
      icon: "icon-sidebar-work.svg",
      url: "/projects",
      roleAccess: "work"
    },
    {
      text: "Finance",
      icon: "icon-sidebar-work.svg",
      url: "/finance",
      roleAccess: "finance"
    },
    {
      text: "My Task",
      icon: "icon-sidebar-work.svg",
      url: "/mytask"
    },
    {
      text: "Notification",
      icon: "icon-sidebar-attendance.svg",
      url: "#performance"
    }
  ]);

  const favoriteProject = ref([
    {
      text: "Alpina Logo Design",
      buttonRoundColor: "#dea73b"
    },
    {
      text: "Marketing Manageme..",
      buttonRoundColor: "#70dfe7"
    },
    {
      text: "Theodor Litt School",
      buttonRoundColor: "#19ccf3"
    },
    {
      text: "Tucow Social Media",
      buttonRoundColor: "#f0f425"
    },
    {
      text: "New class design for ....",
      buttonRoundColor: "#e826b1"
    }
  ]);

  const sidebarMenuAdmin = ref([
    {
      text: "Home",
      icon: "icon-sidebar-home.svg",
      url: "/admin"
    },
    {
      text: "users",
      icon: "icon-sidebar-team.svg",
      url: "/admin/users"
    },
    {
      text: "payments",
      icon: "icon-sidebar-attendance.svg",
      url: "/admin/payments"
    },
    {
      text: "packages",
      icon: "icon-sidebar-work.svg",
      url: "/admin/packgs"
    }
  ]);

  return {
    sidebarMenu,
    favoriteProject,
    sidebarMenuAdmin
  };
}
