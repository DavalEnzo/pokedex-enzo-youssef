import React from 'react';
import { useParams } from 'react-router-dom';
import pokemonData from './pokemons.json';


function PokemonDetails() {
  const { id } = useParams();
  const pokemon = pokemonData.find((p) => p.id === Number(id));

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <h3>Stats</h3>
      <ul>
        <li>HP: {pokemon.stats.hp}</li>
        <li>Attack: {pokemon.stats.attack}</li>
        <li>Defense: {pokemon.stats.defense}</li>
        <li>Special Attack: {pokemon.stats.spAtk}</li>
        <li>Special Defense: {pokemon.stats.spDef}</li>
        <li>Speed: {pokemon.stats.speed}</li>
      </ul>
    </div>
  );
}

export default PokemonDetails;
