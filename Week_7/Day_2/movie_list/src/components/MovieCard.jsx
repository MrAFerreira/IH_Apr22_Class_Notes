import React from 'react';

function MovieCard(props) {
  const { movie, clickToDelete } = props;

  const generateLabel = (score) => {
    if (score > 9) {
      return <span className="green">9+</span>;
    } else if (score < 9 && score > 7) {
      return <span className="yellow">{score}</span>;
    } else {
      return <span className="red">{score}</span>;
    }
  };

  return (
    <div key={movie._id}>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateLabel(movie.IMDBRating)}</p>

      {/* {movie.hasOscars && <p>Won an Oscar!</p>}
      {!movie.hasOscars && <p>No Oscar for you!</p>} */}
      {movie.hasOscars ? <p>Won an Oscar</p> : <p>No Oscar for you!</p>}

      <button onClick={() => clickToDelete(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
