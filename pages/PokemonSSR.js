/* eslint-disable @next/next/no-img-element */
const PokemonSSR = ({ pokemonsList }) => {
  return (
    <>
      <ul>
        <li>
          {pokemonsList.map((pokemon) => {
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              height="100px"
              width="100px"
            />;
          })}
        </li>
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);
  const pokemons = await response.json();
  const images = pokemons.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const list = await response.json();
    return list;
  });

  const pokemonsList = await Promise.all(images);
  return { props: { pokemonsList } };
};

export default PokemonSSR;
