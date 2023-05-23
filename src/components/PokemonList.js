import React from 'react';
import { Link } from 'react-router-dom';
import pokemonData from '../data/pokemons.json';

function PokemonList() {
  return (
    <div>
      <h1>Pokédex - Première génération</h1>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              {pokemon.name} - {pokemon.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
