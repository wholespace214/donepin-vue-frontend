import { reactive, ref } from "@nuxtjs/composition-api";
const settings = reactive([
  {
    language: "English",
    currency: "",
    dueAfter: "",
    invoicePrefix: "INV",
    numberDigits: 112882,
    invoice: "INV-3393992882",
    invoiceTerms: "",
    tax: [
      {
        taxName: "test",
        taxRate: "10"
      }
    ]
  }
]);

const taxTemplate = ref({
  taxName: "",
  taxRate: ""
});

export default function Settings() {
  return { settings, taxTemplate };
}
