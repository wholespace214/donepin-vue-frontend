import useAPI from "~/api";
import addTeamMembers from "~/data_component/Members/AddTeamMembers";
import tableTeamMembers from "~/data_component/Members/TableTeamMembers";
import useFirstSetting from "../FirstSetting";
import useMembersSettings from "../FirstSettings/MembersSettings";
import useGeneralFeatures from "../GeneralFeatures";
import useAddMemberToGroup from "./AddMemberToGroup";
export default function useAddTeamMember() {
  const { createTeam, EditTeamMember } = useAPI();

  const { addMemberToGroup } = useAddMemberToGroup();

  const { fetchMembers } = useMembersSettings();

  const { formNewMember, openModalAddMember, memberJobRoles, addMemberAttendance, hoursPerWeek, yearlyVacation, workingTime } = addTeamMembers();

  const { allUserList } = tableTeamMembers();

  const { snackbarProccess } = useGeneralFeatures();

  const toggleModal = () => {
    if (openModalAddMember.value == false) {
      formNewMember.value.push(
        {
          label: "Email address",
          formType: "email",
          value: "",
          rules: "required",
          autoComplete: true
        },
        {
          label: "Group",
          formType: "text",
          value: [],
          rules: "",
          autoComplete: true
        }
      );
    } else {
      setTimeout(() => {
        formNewMember.value = [];
      }, 500);
    }

    openModalAddMember.value = !openModalAddMember.value;
  };

  const getEmailById = (id: any) => allUserList.value.find((element: any) => element._id == id).email;

  const submit = () => {
    const email = getEmailById(formNewMember.value[0].value);

    let memberObject: any = {};

    if (memberJobRoles.value) {
      memberObject.memberEmail = email;
      memberObject.memberJobRole = memberJobRoles.value;
      memberObject.hoursPerWeek = hoursPerWeek.value;
      memberObject.yearlyVacation = yearlyVacation.value;
      memberObject.workingTime = workingTime.value;
      memberObject.addMemberAttendance = addMemberAttendance.value
    } else {
      memberObject.memberEmail = email;
    }
    console.log(formNewMember.value[0]);
    createTeam(memberObject, formNewMember.value[0].value)
      .then(response => {
        let allGroup = formNewMember.value[1].value;

        allGroup.length > 0 ? addMemberToGroup(response.data.data._id) : snackbarProccess(response.data.message, "snackbar-success");

        toggleModal();

        fetchMembers("");
      })
      .catch(err => {
        if (err.response) snackbarProccess(err.response.data.message, "snackbar-error");
      });
  };

  const removeGroup = (item: any) => {
    const index = formNewMember.value[1].value.indexOf(item.id);

    if (index >= 0) formNewMember.value[1].value.splice(index, 1);
  };

  const OnEdit = () => {
    const email = getEmailById(formNewMember.value[0].value);

    let memberObject: any = {};

    if (memberJobRoles.value) {
      memberObject.memberEmail = email;
      memberObject.memberJobRole = memberJobRoles.value;
    } else {
      memberObject.memberEmail = email;
    }
    console.log(memberObject, "memberIbhect");

  };

  return {
    removeGroup,
    submit,
    toggleModal,
    allUserList,
    OnEdit
  };
}
