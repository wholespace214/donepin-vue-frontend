import useAPI from "~/api";
import useGeneralFeatures from "~/controller/GeneralFeatures";
import registerForm from "~/data_component/LoginRegister/Register";

const {
  currentComponent,
  snackbarProccess,
  toogleLoading
} = useGeneralFeatures();

const { formRegister } = registerForm();

export default function useRegister() {
  const { submitRegister } = useAPI();
  const register = () => {
    toogleLoading();
    submitRegister({
      firstName: formRegister[0].value,
      lastName: formRegister[1].value,
      email: formRegister[2].value,
      password: formRegister[3].value,
      confirmPassword: formRegister[4].value
    })
      .then(res =>
        res.data.hasOwnProperty("error")
          ? snackbarProccess(res.data.error[0].msg, "snackbar-error")
          : successProcess(res)
      )
      .finally(() => {
        toogleLoading();
      });
  };

  const successProcess = (userData: any) => {
    const { email } = userData.data.data;

    const { emailVerificationToken } = userData.data.data;

    if (emailVerificationToken) {
      //Switch To OTP form
      currentComponent.value = "SignUpVerificationCode";

      setTimeout(() => {
        snackbarProccess(
          `Registration Successfull , please check your email ${email}`,
          "snackbar"
        );
      }, 800);

      localStorage.setItem("emailRegister", email);
    }
  };

  return { register };
}
