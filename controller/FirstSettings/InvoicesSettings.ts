import useInvoicesApi from "~/api/invoices";
import TableFinance from "~/data_component/Finance/TableFinance";
import useGeneralFeatures from "../GeneralFeatures";

export default function useInvoicesSettings() {
  const { skeletonLoader } = useGeneralFeatures();

  const { getInvoice } = useInvoicesApi();

  const { invoices } = TableFinance();

  const fetchInvoices = () => {
    return new Promise(resolve => {
      skeletonLoader.value = true;
      getInvoice().then(res => {
        const { data } = res.data;
        console.log("invoicealll", data)

        const allInvoices: any[] = [];

        data.forEach((element: any) => {
          element.isEdit = false;

          allInvoices.push(element);
        });

        invoices.value = allInvoices;
      });
    }).finally(() => {
      skeletonLoader.value = false;
    });
  };

  return { fetchInvoices };
}
