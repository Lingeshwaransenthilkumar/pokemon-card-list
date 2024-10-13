import { useState, useEffect } from "react";
import "./card.css";

// searched data from search bar
function Card({ searchField }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1025")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  // Filter the Pokémon based on the search query
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchField)
  );

  // Function to extract Pokémon ID from URL
  const getPokemonId = (url) => {
    const id = url.split("/").filter(Boolean).pop(); 
    return id;
  };

  return (
    <div className="card-container">
      {filteredPokemon.map((pokemon) => {
        const pokemonId = getPokemonId(pokemon.url); 
        return (
          <div key={pokemonId} className="card">
            <div className="number">
              <h3># {pokemonId}</h3>
            </div>
            <div className="card-image">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={pokemon.name}
              />
            </div>
            <div className="card-details">
              <div className="card-name">
                <h3>{pokemon.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
