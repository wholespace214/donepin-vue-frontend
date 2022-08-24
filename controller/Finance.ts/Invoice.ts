import { onMounted } from "@nuxtjs/composition-api";
import Finance from "~/data_component/Finance/finance";
import TableAddInvoice from "~/data_component/Finance/TableAddInvoice";

export default function useInvoice() {
  const { invoice, subTotal, amountTotal } = TableAddInvoice();

  const { itemProduct } = Finance();

  const totalAmount = () => {
    let getTotal: any;

    let reducer = (accumulator: any, a: any) => accumulator + a;

    invoice.forEach((element: any) => {
      let map = element.item.map((data: any) => data.amount);

      getTotal = map;
    });

    subTotal.value = getTotal.reduce(reducer, 0);
    calcalutateDiscount();
  };

  const calcalutateDiscount = () => {
    let price = subTotal.value;
    let discount = invoice[0].discount / 100;

    amountTotal.value = price - price * discount;
  };

  const addItemProduct = () => {
    invoice[0].item.push(itemProduct);
    totalAmount();
  };

  const deletedItemProduct = (index: number) => {
    invoice[0].item.splice(index, 1);
    totalAmount();
  };

  onMounted(() => totalAmount());

  return { totalAmount, addItemProduct, deletedItemProduct };
}
