import useAPI from "~/api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import Settings from "~/data_component/Finance/Settings";

export default function useUpdateSettings() {
  const { updateSettings } = useAPI();

  const { snackbarProccess } = useGeneralFeatures();

  const { settings } = Settings();

  const submitUpdateSettings = () => {
    updateSettings(settings).then(res => {
      snackbarProccess(res.data.message, "snackbar-success");
    });
  };

  return { submitUpdateSettings };
}
