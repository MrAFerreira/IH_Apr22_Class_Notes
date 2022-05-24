import React, { useState } from 'react';
import moviesData from '../assets/movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const toggleShow = () => {
    console.log(showMovies);
    setShowMovies(!showMovies);
  };

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toggleShow}>{showMovies ? 'Hide' : 'Show'}</button>
      {showMovies &&
        movies.map((element) => {
          return <MovieCard movie={element} clickToDelete={deleteMovie} />;
        })}
    </div>
  );
}

export default MovieList;
