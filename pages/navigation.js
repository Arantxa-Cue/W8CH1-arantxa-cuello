import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/mis-pokemon-ssr">Mis pokémon SSR</Link>
        </li>
        <li>
          <Link href="/mis-pokemon-ssg">Mis pokémon SSG</Link>
        </li>
        <li>
          <Link href="/mis-pokemon-isr">Mis pokémon ISR</Link>
        </li>
      </ul>
    </>
  );
}
