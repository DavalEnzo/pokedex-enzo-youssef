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
              <p className="text-center">HP</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.HP + '%'}}></span>
                  </div>
              </div>
              <p className="text-center">Attack</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.attack + '%', backgroundColor: "#cc4434"}}></span>
                  </div>
              </div>
              <p className="text-center">Defense</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.defense + '%', backgroundColor: "#353951"}}></span>
                  </div>
              </div>
              <p className="text-center">Special Attack</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.special_attack + '%', backgroundColor: "#bed6af"}}></span>
                  </div>
              </div>
              <p className="text-center">Special Defense</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.special_defense + '%', backgroundColor: "#54a666"}}></span>
                  </div>
              </div>
              <p className="text-center">Speed</p>
              <div className="wrapper">
                  <div className="progress-bar">
                      <span className="progress-bar-fill" style={{width: pokemon.stats.speed + '%', backgroundColor: "#2c9474"}}></span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default PokemonDetails;
