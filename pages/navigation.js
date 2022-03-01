import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-list">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/PokemonList">Pokemon</Link>
        </li>
        <li>
          <Link href="/PokemonSSR">Mis pokémon SSR</Link>
        </li>
        <li>
          <Link href="/PokemonsSSG">Mis pokémon SSG</Link>
        </li>
        <li>
          <Link href="/PokemonsISR">Mis pokémon ISR</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
