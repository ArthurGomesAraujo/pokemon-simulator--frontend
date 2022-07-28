import React from "react";

import "./ChosenPokeSquare.css";

const ChosenPokeSquare = ({
  pokeImageURL,
  playerListIndex,
  onRemoveFromList,
  canBeRemoved
}) => {
  return (
    <div className="pokesquare-container">
      {canBeRemoved ? <span
        className="remove-poke"
        onClick={() => onRemoveFromList(playerListIndex)}
      >
        X
      </span> : null}

      <img src={pokeImageURL} alt="" className="pokesquare-image" />
    </div>
  );
};

export default ChosenPokeSquare;
