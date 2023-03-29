import React from "react";

const PokemonCard = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  let displayPoke = (pokemon) => {
    return pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>...</p>;
  };
  let pokemon = pokemonList[0];
  return (
    <figure>
      {displayPoke(pokemon)}
      <figcaption>{pokemon.name}</figcaption>;
    </figure>
  );
};

export default PokemonCard;
