import React from "react";

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const hendleSuivant = () => {
    if (pokemonIndex >= pokemonList.length - 1) {
      alert("index superieur");
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const hendlePrecedent = () => {
    if (pokemonIndex <= 0) {
      alert("index inferieur");
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <button onClick={hendleSuivant}>suivant</button>
      <button onClick={hendlePrecedent}>precedent </button>
    </div>
  );
};

export default NavBar;
