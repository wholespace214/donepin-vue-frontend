import { onMounted } from "@nuxtjs/composition-api";
import useAPI from "~/api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import verificationUser from "~/data_component/LoginRegister/VerificationUser";

const { snackbarProccess, toogleLoading } = useGeneralFeatures();

export default function useVerify() {
  const { verifyUsers, router, resendRegisterToken } = useAPI();

  const { formVerify } = verificationUser();

  const submitVerification = () => {
    toogleLoading();
    verifyUsers({
      email: formVerify[0].email,
      verificationToken: formVerify[0].verificationCode
    })
      .then(res => {
        res.data.hasOwnProperty("error") ? onError() : onSuccess();
      })
      .catch(err => {
        if (err.response) onError();
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const resendToken = () => {
    let getEmail = localStorage.getItem("emailRegister");
    toogleLoading();
    resendRegisterToken({ email: getEmail })
      .then(res => {
        snackbarProccess(`Please check your email ${getEmail}`, "snackbar");
      })
      .then(() => {
        toogleLoading();
      });
  };

  const onSuccess = () => {
    localStorage.removeItem("emailRegister");

    router.push("/login");

    snackbarProccess("Your account has activated", "snackbar-success");
  };

  const onError = () =>
    snackbarProccess("Your OTP token is wrong !", "snackbar-error");

  onMounted(() => {
    formVerify[0].email = localStorage.getItem("emailRegister");
  });

  return { verifyUsers, submitVerification, resendToken };
}
