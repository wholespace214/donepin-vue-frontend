import { reactive, ref, useAsync } from "@nuxtjs/composition-api";
import dataCurrency from "./currency";

const invoiceType = reactive([
  { text: "Standart invoice", data: "standardInvoice" },
  { text: "Time Log Invoice", data: "timeLogInvoice" },
  { text: "Recurring Invoice", data: "recurringInvoice" }
]);

const invoiceLanguage = reactive([
  { text: "English", data: "English" },
  { text: "German", data: "German" },
  { text: "French", data: "French" },
  { text: "Spanish", data: "Spanish" },
  { text: "Italian", data: "Italian" },
  { text: "Albanian", data: "Albanian" },
  { text: "Turkish", data: "Turkish" }
]);

const dummyCurrency = reactive([{ text: "USD", data: "USD" }]);

const allCurrency = reactive<any>([]);

const dummyBillyFrequently = reactive([
  {
    text: "yearly",
    data: "Yearly"
  },
  {
    text: "monthly",
    data: "Monthly"
  }
]);

const dummyCompany = reactive([
  {
    text: "Walmart",
    data: "2282828773"
  }
]);
const deleteIcon = ref(
  '<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.34749 3.69189C8.34749 3.69189 8.09133 6.86916 7.94272 8.20752C7.87196 8.84675 7.4771 9.22132 6.83033 9.23311C5.59952 9.25529 4.3673 9.2567 3.13697 9.23075C2.51473 9.21802 2.12647 8.83873 2.05712 8.21082C1.90758 6.86066 1.65283 3.69189 1.65283 3.69189" stroke="#91C959" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 2.16898H1" stroke="#91C959" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.45859 2.1689C7.08827 2.1689 6.76936 1.90707 6.69671 1.5443L6.58207 0.970643C6.51131 0.70599 6.27166 0.522949 5.99851 0.522949H4.00158C3.72844 0.522949 3.48879 0.70599 3.41802 0.970643L3.30339 1.5443C3.23074 1.90707 2.91183 2.1689 2.5415 2.1689" stroke="#91C959" stroke-linecap="round" stroke-linejoin="round"/></svg>'
);

const itemProduct = reactive({
  itemName: "logo",
  quantityHours: 12,
  unitPrice: 150,
  description: "test",
  amount: 150
});

export default function Finance() {
  const { currency } = dataCurrency();

  useAsync(() => {
    currency.forEach((element: any) => {
      element.display = `${element.value} - ${element.text}`;

      allCurrency.push(element);
    });
  });

  return {
    invoiceType,
    dummyBillyFrequently,
    dummyCompany,
    allCurrency,
    dummyCurrency,
    deleteIcon,
    invoiceLanguage,
    itemProduct
  };
}
