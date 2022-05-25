import React, { useState } from 'react';

function AddMovie(props) {
  const { addNewMovie } = props;

  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(false);

  //Handler functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };
    addNewMovie(newMovie);
    setTitle('');
    setDirector('');
    setIMDBRating(5);
    setHasOscars(false);
    alert(`title: ${title}`);
  };

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDirector = (e) => setDirector(e.target.value);
  const handleIMDBRating = (e) => setIMDBRating(e.target.value);
  const handleHasOscars = (e) => setHasOscars(e.target.checked);

  return (
    <div>
      <h4>Add Movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" value={director} onChange={handleDirector} />

        <label htmlFor="IMDBRating">IMDBRating</label>
        <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleIMDBRating} />

        <label htmlFor="hasOscars">Won an oscar?</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleHasOscars} />

        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
