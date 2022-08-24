import { ref, computed } from "@vue/composition-api";

export default function TablePlan() {
  const tableHead = ref([
    {
      text: "free plan",
      currentStatus: false,
      class: "w-32 justify-center"
    },
    {
      text: "freelancer",
      currentStatus: false,
      class: "w-32 flex justify-center"
    },
    {
      text: "starter",
      currentStatus: true,
      class: "w-32 justify-center"
    },
    {
      text: "medium",
      currentStatus: false,
      class: "w-32 justify-center"
    },
    {
      text: "max",
      currentStatus: false,
      class: "w-32 justify-center"
    },
    {
      text: "ultimate",
      currentStatus: false,
      class: "w-32 justify-center"
    },
    {
      text: "custom",
      currentStatus: false,
      class: "w-32 justify-center"
    }
  ]);

  const content = ref([
    {
      textTitle: {
        mainText: "monthly",
        secondary: "(paid yearly)"
      },
      freePlan: "free",
      freelancer: "29,00 EUR",
      starter: "29,00 EUR",
      medium: "29,00 EUR",
      max: "29,00 EUR",
      ultimate: "29,00 EUR",
      custom: "contact"
    },
    {
      textTitle: {
        mainText: "users",
        secondary: ""
      },
      freePlan: "3",
      freelancer: "5",
      starter: "5",
      medium: "10",
      max: "20",
      ultimate: "20",
      custom: "50+"
    },
    {
      textTitle: {
        mainText: "storage",
        secondary: ""
      },
      freePlan: "",
      freelancer: "1GB",
      starter: "5GB",
      medium: "10GB",
      max: "20GB",
      ultimate: "20GB",
      custom: "50GB+"
    },
    {
      textTitle: {
        mainText: "projects",
        secondary: ""
      },
      freePlan: "1",
      freelancer: "5",
      starter: "unlimited",
      medium: "unlimited",
      max: "unlimited",
      ultimate: "unlimited",
      custom: "unlimited"
    },
    {
      textTitle: {
        mainText: "invoces",
        secondary: ""
      },
      freePlan: "3",
      freelancer: "unlimited",
      starter: "unlimited",
      medium: "unlimited",
      max: "unlimited",
      ultimate: "unlimited",
      custom: "unlimited"
    },
    {
      textTitle: {
        mainText: "attendance",
        secondary: ""
      },
      freePlan: "",
      freelancer: "",
      starter: "icon",
      medium: "icon",
      max: "icon",
      ultimate: "icon",
      custom: "icon"
    },
    {
      textTitle: {
        mainText: "team",
        secondary: ""
      },
      freePlan: "",
      freelancer: "icon",
      starter: "icon",
      medium: "icon",
      max: "icon",
      ultimate: "icon",
      custom: "icon"
    },
    {
      textTitle: {
        mainText: "projects",
        secondary: ""
      },
      freePlan: "",
      freelancer: "icon",
      starter: "icon",
      medium: "icon",
      max: "icon",
      ultimate: "icon",
      custom: "icon"
    },
    {
      textTitle: {
        mainText: "finance",
        secondary: ""
      },
      freePlan: "",
      freelancer: "icon",
      starter: "icon",
      medium: "icon",
      max: "icon",
      ultimate: "icon",
      custom: "icon"
    }
  ]);

  const planButton = computed(() =>
    tableHead.value.map(element => element.currentStatus)
  );

  return {
    content,
    tableHead,
    planButton
  };
}
