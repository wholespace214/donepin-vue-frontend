import useAPI from "~/api";
import resetPassword from "~/data_component/LoginRegister/ResetPassword";
import useGeneralFeatures from "../GeneralFeatures";

const { snackbarProccess, toogleLoading } = useGeneralFeatures();

export default function useForgotPasword() {
  const { forgotPassword, verificationTokenReset, router } = useAPI();

  const {
    resetRequest,
    email,
    otpVerification,
    formResetPassword
  } = resetPassword();

  const requestResetPassword = () => {
    toogleLoading();
    forgotPassword({ email: email.value })
      .then(res => {
        res.data.hasOwnProperty("error")
          ? snackbarProccess(res.data.error[0].msg, "snackbar-error")
          : successProcess();
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const inputOTP = () => {
    toogleLoading();

    verificationTokenReset({ resetPasswordToken: otpVerification.value })
      .then(res => {
        res.data.hasOwnProperty("error")
          ? snackbarProccess(res.data.error[0].msg, "snackbar-error")
          : redirectResetPassword();
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const reSendOTP = () => {
    let getEmail = localStorage.getItem("email");

    toogleLoading();

    forgotPassword({ email: getEmail })
      .then(res => {
        res.data.hasOwnProperty("error")
          ? snackbarProccess(res.data.error[0].msg, "snackbar-error")
          : successProcess();
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const successProcess = () => {
    localStorage.setItem("email", email.value);

    setTimeout(() => {
      snackbarProccess(`Please check your email ${email.value}`, "snackbar");
    }, 700);

    resetRequest.value = false;
  };

  //to redirect reset password page
  const redirectResetPassword = () => {
    localStorage.removeItem("email");

    //localStorage.setItem("tokenVerification", otpVerification.value);
    formResetPassword[0].value = otpVerification.value;

    router.push("/Resetpassword");

    setTimeout(() => {
      snackbarProccess("Please input your new password", "snackbar");
    }, 800);
  };

  return { requestResetPassword, inputOTP, reSendOTP };
}
