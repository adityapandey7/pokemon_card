import React, { useState, useEffect } from "react";
import "./App.css";
import Row from "./Component/Row";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [load, setLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  async function getPokemonDetail() {
    const res = await fetch(load);
    const data = await res.json();
    setLoad(data.next);

    function createPokemonDetail(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        console.log(data);
        setAllPokemon((prevState) => [...prevState, data]);
      });
    }
    createPokemonDetail(data.results);
  }
  useEffect(() => {
    getPokemonDetail();
    console.log("hello");
  }, []);

  console.log("checking", allPokemon);
  return (
    <div className="container">
      <h1>Pokemon Card</h1>
      <div className="pokemon_container">
        {allPokemon.map((pokemon, index) => (
          <Row
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            height={pokemon.height}
            weight={pokemon.weight}
            key={index}
            stat1={pokemon.stats[0].stat.name}
            stat2={pokemon.stats[1].stat.name}
            stat3={pokemon.stats[2].stat.name}
            stat4={pokemon.stats[3].stat.name}
            stat5={pokemon.stats[4].stat.name}
            stat6={pokemon.stats[5].stat.name}
            bs1={pokemon.stats[0].base_stat}
            bs2={pokemon.stats[1].base_stat}
            bs3={pokemon.stats[2].base_stat}
            bs4={pokemon.stats[3].base_stat}
            bs5={pokemon.stats[4].base_stat}
            bs6={pokemon.stats[5].base_stat}
          />
        ))}
      </div>
      <button className="load_more" onClick={getPokemonDetail}>
        Load More
      </button>
    </div>
  );
}

export default App;
