import PokemonCard from "../components/pokemonCard";

const PokemonSSG = ({ pokemons }) => {
  return (
    <>
      <h2>Pokemon SSG List</h2>
      <ul className="container">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);

  const pokeAPI = await response.json();
  const pokemons = pokeAPI.results;
  return { props: { pokemons } };
};

export default PokemonSSG;
