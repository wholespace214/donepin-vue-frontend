import { ref } from "@nuxtjs/composition-api";

const fullName = ref();

const userRole = ref();

const firstName = ref()

const email = ref();

const phone = ref();

const address = ref();

const profileData = ref();

const initials = ref()

const tableBody = ref([
  {
    text: "team",
    emailNotifValue: false,
    pushNotifValue: true
  },
  {
    text: "attendance",
    emailNotifValue: false,
    pushNotifValue: true
  },
  {
    text: "work",
    emailNotifValue: false,
    pushNotifValue: true
  },
  {
    text: "finance",
    emailNotifValue: false,
    pushNotifValue: true
  }
]);

export default function profile() {
  const tableHeader = ref([
    "module",
    "Email notification",
    "push notification"
  ]);

  return {
    fullName,
    userRole,
    email,
    phone,
    address,
    tableBody,
    tableHeader,
    initials,
    firstName,
    profileData
  };
}
