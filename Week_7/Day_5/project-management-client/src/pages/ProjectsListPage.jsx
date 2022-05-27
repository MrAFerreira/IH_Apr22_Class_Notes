import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from '../components/AddProject';

function ProjectsListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      let response = await axios.get('http://localhost:5005/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />
      {projects.map((project) => {
        return (
          <div key={project._id} className="ProjectCard card">
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsListPage;
