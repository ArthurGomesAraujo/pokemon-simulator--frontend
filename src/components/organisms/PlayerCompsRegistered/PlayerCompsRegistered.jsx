import React from "react";

import PokemonCompSideList from "../PokemonCompSideList/PokemonCompSideList";

import "./PlayerCompsRegistered.css";

const PlayerCompsRegistered = ({ pokemonList, onDeletePokemonTeam, onUpdatePokemonTeam }) => {
  return (
    <div className="pokemon-registered-list">
      {pokemonList.map((listItem, index) => (
        <PokemonCompSideList listItem={listItem} key={index} onDeletePokemonTeam={onDeletePokemonTeam} onUpdatePokemonTeam={onUpdatePokemonTeam}/>
      ))}
    </div>
  );
};

export default PlayerCompsRegistered;
