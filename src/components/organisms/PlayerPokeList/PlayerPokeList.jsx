import React, { useEffect } from "react";

import ChosenPokeSquare from "../../atoms/ChosenPokeSquare/ChosenPokeSquare";

import './PlayerPokeList.css';

const PlayerPokeList = ({ playerPokeList, onRemoveFromList, onSubmitComp }) => {
  return (
    <>
    <div className="player-poke-list">
      {playerPokeList.map((poke, index) => {
        return <ChosenPokeSquare
          pokeImageURL={poke.image}
          onRemoveFromList={onRemoveFromList}
          playerListIndex={index}
          key={index}
          canBeRemoved={true}
        />;
      })}
    </div>
    <button className="poke-save-comp" onClick={() => onSubmitComp()}> Save </button>
    </>
  );
};

export default PlayerPokeList;
