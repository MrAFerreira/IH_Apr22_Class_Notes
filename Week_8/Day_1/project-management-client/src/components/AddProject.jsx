import React, { useState } from 'react';
import axios from 'axios';

function AddProject(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };
    const getToken = localStorage.getItem('authToken');

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/projects`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setTitle('');
        setDescription('');
        props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>
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

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
