import useAPI from "~/api";
import useGeneralFeatures from "../GeneralFeatures";
import resetPassword from "~/data_component/LoginRegister/ResetPassword";
import { onMounted } from "@nuxtjs/composition-api";

//Note please add conditional when local storage empty token redirect to request first

const { snackbarProccess, toogleLoading } = useGeneralFeatures();

export default function useResetPassword() {
  const { updatePassword, router } = useAPI();
  const { formResetPassword } = resetPassword();

  const requestUpdatePassword = () => {
    toogleLoading();

    updatePassword({
      resetPasswordToken: formResetPassword[0].value,
      newPassword: formResetPassword[1].value,
      confirmPassword: formResetPassword[2].value
    })
      .then(res => {
        onSuccess();
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const onSuccess = () => {
    resetForm();

    router.push("/login");

    snackbarProccess("Password reset successfully", "snackbar");
  };

  const resetForm = () => {
    localStorage.removeItem("tokenVerification");
    formResetPassword.forEach(element => {
      element.value = "";
    });
  };

  onMounted(() => {
    formResetPassword[0].value = localStorage.getItem("tokenVerification");
  });

  return { requestUpdatePassword };
}
