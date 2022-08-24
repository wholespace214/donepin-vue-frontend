import useAPI from "~/api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import loginForm from "~/data_component/LoginRegister/Login";
import useVerify from "./Verify";

export default function useLogin() {
  const { submitLogin, router } = useAPI();

  const {
    snackbarProccess,
    currentComponent,
    message,
    toogleLoading
  } = useGeneralFeatures();

  const { formLogin, alertActivated } = loginForm();

  const { resendToken } = useVerify();

  const login = () => {
    toogleLoading();

    submitLogin({
      email: formLogin[0].value,
      password: formLogin[1].value
    })
      .then(res => {
        res.data.hasOwnProperty("error")
          ? errorProcess(res.data.error[0].msg)
          : checkAccountStatus(res);
      })
      .catch(err => {
        if (err.response)
          snackbarProccess(err.response.data.message, "snackbar-error");
      })
      .finally(() => {
        toogleLoading();
      });
  };

  const resendTokenRegister = () => {
    currentComponent.value = "SignUpVerificationCode";

    router.push("/sign-up");

    snackbarProccess(
      "Please check your email and use token for verification first",
      "snackbar-success"
    );

    // Call API resendRegisterToken
    resendToken();
  };

  const successProcess = (userData: any) => {
    const { token } = userData.data.data;

    const { email } = userData.data.data.user;

    localStorage.setItem("emailLogin", email);

    localStorage.setItem("JWT", token);

    router.push("/members");
  };

  const errorProcess = (errorMsg: string) =>
    snackbarProccess(errorMsg, "snackbar-error");

  const checkAccountStatus = (userAccount: any) => {
    const { isEmailVerified } = userAccount.data.data.user;
    const { email } = userAccount.data.data.user;

    if (isEmailVerified == false) {
      localStorage.setItem("emailRegister", email);

      alertActivated.value = true;

      message.value = `We will re-send OTP account in your email ${email}`;
    } else {
      successProcess(userAccount);
    }
  };

  return { login, resendTokenRegister };
}
