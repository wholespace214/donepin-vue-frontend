import { reactive, ref } from "@nuxtjs/composition-api";
import { format, addDays } from "date-fns"

const subTotal = ref();

const amountTotal = ref();


const invoiceResp = ref();
const invoice = reactive([
  {
    invoiceType: "",
    invoice: "",
    purchaseOrder: "AN-2021/09-5411221",
    InvoiceDate: format(new Date(), "yyyy-MM-dd"),
    dueDate: format(addDays(new Date(), 15), "yyyy-MM-dd"),
    projectId: "",
    clientId: "",
    currency: "USD",
    company: null,
    invoiceLanguage: "English",
    billingFrequently: "Yearly",
    billingCycle: 4,
    tax: null,
    item: [
      {
        itemName: "logo",
        quantityHours: 12,
        unitPrice: 150,
        description: "test",
        amount: 150
      },
      {
        itemName: "logo",
        quantityHours: 12,
        unitPrice: 150,
        description: "test",
        amount: 150
      }
    ],
    discount: 0,
    note: "testing note"
  }
]);

export default function TableAddInvoice() {
  return {
    invoice,
    subTotal,
    amountTotal,
    invoiceResp
  };
}
