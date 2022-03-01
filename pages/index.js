import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <div>
        <h3>Welcome to Pokemon</h3>
      </div>
      <div>
        <p>
          Los Pokémon son una clase de criaturas inspiradas en animales reales,
          insectos, objetos, plantas o criaturas mitológicas. Los jugadores
          toman el papel Entrenadores Pokémon y tienen tres objetivos generales:
          completar la Pokédex mediante la recopilación de todas las especies de
          Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon
          poderosos de aquellos que han atrapado para competir contra otros
          entrenadores. El objetivo final del juego es llegar a ganar la Liga
          Pokémon y convertirse en el campeón regional. La temática de
          coleccionar, entrenar y luchar están presentes en casi todas las
          versiones de la franquicia Pokémon, incluidos los videojuegos, las
          series de anime y manga, y el juego de cartas coleccionables Pokémon.
        </p>
      </div>
    </>
  );
}
