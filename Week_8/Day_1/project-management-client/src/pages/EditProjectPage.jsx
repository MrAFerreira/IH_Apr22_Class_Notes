import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { projectId } = useParams();
  const navigate = useNavigate();

  const getProject = async () => {
    try {
      let response = await axios.get(`http://localhost:5005/api/projects/${projectId}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async () => {
    try {
      await axios.delete(`http://localhost:5005/api/projects/${projectId}`);
      navigate('/projects');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    axios
      .put(`http://localhost:5005/api/projects/${projectId}`, body)
      .then(() => {
        setTitle('');
        setDescription('');
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <button type="submit">Edit</button>
      </form>
      <button onClick={deleteProject}>Delete</button>
    </div>
  );
}

export default EditProjectPage;
