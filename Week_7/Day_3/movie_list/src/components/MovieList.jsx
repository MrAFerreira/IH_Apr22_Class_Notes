import React, { useState } from 'react';
import moviesData from '../assets/movies-data.json';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import Searchbar from './Searchbar';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [searchMovies, setSearchMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const addNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

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

  const searchFilter = (search) => {
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie addNewMovie={addNewMovie} />
      <Searchbar searchFilter={searchFilter} />
      <button onClick={toggleShow}>{showMovies ? 'Hide' : 'Show'}</button>
      {showMovies &&
        searchMovies.map((element) => {
          return <MovieCard movie={element} clickToDelete={deleteMovie} />;
        })}
    </div>
  );
}

export default MovieList;
