import projectsData from '../assets/projects-data.json';
import { Link, useParams } from 'react-router-dom';

function ProjectDetailsPage() {
  const { projectId } = useParams();
  console.log(projectId);

  const foundProject = projectsData.find((project) => {
    return project._id === projectId;
  });

  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h2>No project found!</h2>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
        </>
      )}

      <Link to="/projects">Back</Link>
    </div>
  );
}

export default ProjectDetailsPage;
