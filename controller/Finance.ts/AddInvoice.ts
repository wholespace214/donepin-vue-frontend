import useInvoicesApi from "~/api/invoices";
import TableAddInvoice from "~/data_component/Finance/TableAddInvoice";
import useFirstSetting from "~/controller/FirstSetting";

import useGeneralFeatures from "../GeneralFeatures";

export default function useAddInvoice() {
  const { createdInvoice } = useInvoicesApi();

  const { fetchInvoices } = useFirstSetting();

  const { snackbarProccess } = useGeneralFeatures();

  const { invoice, invoiceResp } = TableAddInvoice();

  const submitNewInvoice = () => {
    createdInvoice(invoice[0])
      .then(res => {
        const { message } = res.data;

        snackbarProccess(message, "snackbar-success");
        fetchInvoices()
        invoiceResp.value = res.data
      })
      .catch(err => {
        if (err.response)
          snackbarProccess(err.response.data.message, "snackbar-error");
      });
  };

  return { submitNewInvoice };
}
