import React from "react";
import PropTypes from "prop-types";
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
PokemonCard.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
