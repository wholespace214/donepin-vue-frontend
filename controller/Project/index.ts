import useProjectsApi from '~/api/projects';
import useAPI from "~/api";
import TableProject from "~/data_component/Projects/TableProject";
import useGeneralFeatures from "../GeneralFeatures";

export default function useProject() {
  const { router } = useAPI();

  const { getProject, createProject } = useProjectsApi();

  const { generateSlug } = useGeneralFeatures();

  //Please use skeleton
  const { projectList } = TableProject();

  const redirect = (params: string) =>
    router.push(`projects/${generateSlug(params)}/overview`);

  const getAllMember = () => {};

  const sliceMember = () => {};

  return {
    redirect
  };
}
