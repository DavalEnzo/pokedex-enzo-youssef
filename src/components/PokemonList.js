import React from 'react';
import { Link } from 'react-router-dom';
import pokemonData from './pokemons.json';
import css from '../css/style.css';

function PokemonList() {
  return (
    <div className='container'>
      <h1>Pokédex - Première génération</h1>

      <ul>
      <div className='container-box'>
        {pokemonData.map((pokemon) => (
          <li className='list btn' key={pokemon.id}>
           
            <Link to={`/pokemon/${pokemon.id}`}>
            <img src={pokemon.image} alt={pokemon.name} />
              {pokemon.name} - {pokemon.apiTypes[0].name}
            </Link>
          </li>
        ))}
        </div>
      </ul>
      
    </div>
  );
}

export default PokemonList;
