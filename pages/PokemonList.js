/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "../components/pokemonCard";

const PokemonList = () => {
  const [pokemonsData, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_URL);
      const { results: pokemons } = await response.json();

      setPokemon(
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))
      );
    })();
  }, []);

  return (
    <>
      <h2>Pokemon List</h2>
      <ul className="container">{pokemonsData}</ul>
    </>
  );
};

export default PokemonList;
