import React from 'react';
import { useParams } from 'react-router-dom';
import pokemonData from '../data/pokemons.json';
import pokemonTypes from '../data/types.json';
import '../css/style.css'

function PokemonDetails() {
  const { id } = useParams();
  const pokemon = pokemonData.find((p) => p.id === Number(id));
  const pokemonType = pokemonTypes.find((t) => t.name === pokemon.apiTypes[0].name.toLowerCase());

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
      <div className="card">
          <div className="card-content">
              <img src={pokemon.image} alt={pokemon.name} />
              <h2 style={{textAlign: "center"}}>{pokemon.name}</h2>
              <h3 style={{textAlign: "center"}}>Stats</h3>
              <div style={{backgroundColor: pokemonType.color, borderRadius: "8px", textAlign: "center", padding: "5px"}}>{pokemon.apiTypes[0].name}</div>
              <p>HP</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.HP}}></span>
                  </div>
              </div>
              <ul>
                  <li>HP: {pokemon.stats.HP}</li>
                  <li>Attack: {pokemon.stats.attack}</li>
                  <li>Defense: {pokemon.stats.defense}</li>
                  <li>Special Attack: {pokemon.stats.special_attack}</li>
                  <li>Special Defense: {pokemon.stats.defense}</li>
                  <li>Speed: {pokemon.stats.speed}</li>
              </ul>
          </div>
      </div>
  );
}

export default PokemonDetails;
