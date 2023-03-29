import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonIndex, setPokemonInex] = useState(0);

  let pokemon = pokemonList[pokemonIndex];

  const hendleSuivant = () => {
    if (pokemonIndex >= pokemonList.length - 1) {
      alert("index superieur");
    } else {
      setPokemonInex(pokemonIndex + 1);
    }
  };
  const hendlePrecedent = () => {
    if (pokemonIndex <= 0) {
      alert("index inferieur");
    } else {
      setPokemonInex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <button onClick={hendleSuivant}>suivant</button>
      <button onClick={hendlePrecedent}>precedent </button>
      <PokemonCard poke={pokemon} />;
    </div>
  );
}

export default App;
