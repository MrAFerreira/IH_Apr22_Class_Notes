import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = async () => {
    try {
      let response = await axios.get(`http://localhost:5005/api/projects/${projectId}`);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks.map((task) => {
          return (
            <li key={task._id} className="TaskCard card">
              <h3>{task.title}</h3>
              <h4>Description:</h4>
              <p>{task.description}</p>
            </li>
          );
        })}
      {project && (
        <Link to={`/projects/edit/${project._id}`}>
          <button>Edit Project</button>
        </Link>
      )}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
