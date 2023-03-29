import React from "react";

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const handleClick = (pokemone) => {
    console.log(pokemone.name);
    if (pokemone.name === "bulbasaur") {
      pokemonIndex = 0;
      setPokemonIndex(pokemonIndex);
    } else if (pokemone.name === "charmander") {
      pokemonIndex = 1;
      setPokemonIndex(1);
    } else if (pokemone.name === "squirtle") {
      pokemonIndex = 1;
      setPokemonIndex(2);
    } else if (pokemone.name === "pikachu") {
      setPokemonIndex(3);
    } else if (pokemone.name === "mew") {
      setPokemonIndex(4);
    }
  };
  return (
    <div>
      {pokemonList.map((pokemone) => (
        <button key={pokemone.name} onClick={() => handleClick(pokemone)}>
          {pokemone.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
