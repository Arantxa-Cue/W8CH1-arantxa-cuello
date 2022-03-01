import Image from "next/image";
import { useEffect, useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [pokeData, setPokeData] = useState({});

  useEffect(
    () =>
      (async () => {
        const response = await fetch(pokemon.url);
        const info = await response.json();
        setPokeData(info);
      })(),
    [pokemon.url]
  );
  return (
    <>
      <li className="list">
        <h3>{pokemon.name}</h3>
        {pokeData.sprites && (
          <>
            <Image
              width="100"
              height="100"
              src={pokeData.sprites.other.home.front_default}
              alt={pokemon.name}
            />
          </>
        )}
      </li>
    </>
  );
};
export default PokemonCard;
