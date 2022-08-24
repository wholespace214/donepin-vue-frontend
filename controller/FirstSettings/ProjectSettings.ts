import TableProject from '~/data_component/Projects/TableProject';
import useProjectsApi from '~/api/projects';

export default function useProjectSettings() {
  const { getProject } = useProjectsApi();

  const { allProjects } = TableProject();

  const asyncFetchProject = async () => {
    const res = await getProject();
    let allData: any[] = [];

    const { data } = res.data;

    // data.membersId.forEach((element: any) => {
    //   const member = findMember(element.memberEmail);

    data.forEach((element: any) => {
      element.edit = false;


      allData.push(element);
    });
    allProjects.value = allData;
    console.log("data in getProject", allProjects)

  };

  return { asyncFetchProject };
}
