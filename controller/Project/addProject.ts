import useProjectsApi from "~/api/projects";
import useFirstSetting from "~/controller/FirstSetting";
import AddProjects from "~/data_component/Projects/AddNewProject";
import useGeneralFeatures from "../GeneralFeatures";

export default function useAddProject() {
    const { createProject } = useProjectsApi();

    const { fetchClient } = useFirstSetting();

    const {
        newProject,
        allColor,
        editProject
        // openModal,
        // modalStatus,
        // addClient,
        // client,
        // skeletonLoader
    } = AddProjects();

    const { toogleLoading, snackbarProccess } = useGeneralFeatures();

    const addNewProjects = () => {
        console.log("adddNeweww", newProject)
        toogleLoading();
        createProject(newProject[0])
            .then(res => {
                // successProcess(res.data.message);
                console.log("addnewProject", res);
            })
            .catch(err => {
                if (err.response)
                    snackbarProccess(err.response.data.message, "snackbar-error");
            })
            .finally(() => {
                toogleLoading();
            });
    };

    // const openModalAdd = () => {
    //     if (modalStatus.value == "editClient") {
    //         skeletonLoader.value = !skeletonLoader.value;

    //         setTimeout(() => {
    //             client[0] = addClient.value;
    //             modalStatus.value = "addClient";

    //             skeletonLoader.value = !skeletonLoader.value;
    //         }, 300);
    //     } else {
    //         client.push({
    //             name: "",
    //             email: "",
    //             companyName: "",
    //             phoneNo: "",
    //             address: "",
    //             clientNumber: "",
    //             clientType: ""
    //         });

    //         modalStatus.value = "addClient";
    //         openModal.value = !openModal.value;

    //         if (openModal.value == false) {
    //             client[0] = [];

    //             modalStatus.value = "";
    //         }
    //     }
    // };

    // const successProcess = (message: any) => {
    //     fetchClient();
    //     modalStatus.value = !modalStatus.value;
    //     setTimeout(() => {
    //         client[0] = [];
    //     }, 200);

    // snackbarProccess(message, "snackbar-success");
    // };

    return {
        addNewProjects,
        // openModalAdd
    };
}
