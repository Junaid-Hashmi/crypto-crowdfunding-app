import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteProject from "../components/DeleteProject";
import ProjectBackers from "../components/ProjectBackers";
import ProjectDetails from "../components/ProjectDetails";
import UpdateProject from "../components/UpdateProject";
import { useGlobalState } from "../store";
import { loadProject } from "../services/blockchain";
import { getBackers } from "../services/blockchain";
import { backProject } from "../services/blockchain";
import BackProject from "../components/BackProject";

const Project = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [project] = useGlobalState("project");
  const [backers] = useGlobalState("backers");

  useEffect(async () => {
    await loadProject(id);
    await getBackers(id);
    setLoaded(true);
  }, []);
  return loaded ? (
    <>
      <ProjectDetails project={project} />
      <UpdateProject project={project} />
      <DeleteProject project={project} />
      <BackProject project={project} />
      <ProjectBackers backers={backers} />
    </>
  ) : null;
};

export default Project;
