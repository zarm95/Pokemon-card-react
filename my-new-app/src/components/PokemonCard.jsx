import React from "react";

const PokemonCard = ({ poke }) => {
  let displayPoke = (pokemon) => {
    return pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>...</p>;
  };

  return (
    <figure>
      {displayPoke(poke)}
      <figcaption>{poke.name}</figcaption>;
    </figure>
  );
};

export default PokemonCard;
