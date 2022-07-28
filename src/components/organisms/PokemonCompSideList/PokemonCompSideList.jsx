import React from "react";

import CompSquare from "../../atoms/CompSquare/CompSquare";

import "./PokemonCompSideList.css";

const PokemonCompSideList = ({ listItem, onDeletePokemonTeam, onUpdatePokemonTeam }) => {
  const { id, pokemons } = listItem;

  return (
    <div className="comp-container">
      <div className="list-container">
        {pokemons.map((pokemon, index) => (
          <CompSquare image={pokemon.image} key={index} />
        ))}
      </div>
      <div className="button-group">
          <button className="btn btn-update" onClick={() => onUpdatePokemonTeam(id)}>Update</button>
          <button className="btn btn-delete" onClick={() => onDeletePokemonTeam(id)}>Delete</button>
        </div>
    </div>
  );
};

export default PokemonCompSideList;
