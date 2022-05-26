import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div>
      {!pokemon && <p>No pokemon with the name {name} was found</p>}

      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}
    </div>
  );
}

export default Pokemon;
