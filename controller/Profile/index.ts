import profile from "~/data_component/Profile/Profile";
import useFindMember from "~/controller/TeamMember/FindMember";
import useGeneralFeatures from "../GeneralFeatures";
import useApi from "~/api/index";

export default function useSetupProfile() {
  const { findMember } = useFindMember();

  const { updateProfile, getProfileData } = useApi();

  const { snackbarProccess, toogleLoading } = useGeneralFeatures();

  const successProcess = (msg: string) => {
    snackbarProccess(msg, "snackbar-success");
    // fetchClient();

    // closeModal();

  };


  const { fullName, userRole, email, initials, profileData } = profile();

  const createdProfile = (userEmail: string) => {
    const user = findMember(userEmail);
    initials.value = user.initials;
    fullName.value = user.fullName;
    userRole.value = user.role;
    email.value = user.email;

    if (localStorage.getItem("isLogin") == null) {
      snackbarProccess(`Welcome ${user.firstName}`, "snackbar-success");
    }
  };

  const getProfile = () => {
    new Promise(resolve => {
      getProfileData().then((res: any) => {
        let { data } = res.data;
        profileData.value = data;
        resolve(true);
      });
    });
  }

  const updateProfileData = (params) => {


    toogleLoading();

    updateProfile(params)
      .then(res => {
        console.log(res.data.message);
        successProcess(res.data.message);
      })
      .finally(() => {
        toogleLoading();
      });
  }

  return { createdProfile, updateProfileData, getProfile };
}
