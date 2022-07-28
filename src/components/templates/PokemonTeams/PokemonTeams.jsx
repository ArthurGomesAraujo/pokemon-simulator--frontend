import React, { useState, useEffect } from "react";

import PlayerCompsRegistered from "../../organisms/PlayerCompsRegistered/PlayerCompsRegistered";
import NavBar from "../../molecules/NavBar/NavBar";

import { baseApi } from "../../../utils/constants";

import "./PokemonTeams.css";

const PokemonTeams = ({ onRouteChange, onSetEdit }) => {
  const [pokemonTeams, setPokemonTeams] = useState([]);

  const { baseUrl, api } = baseApi;

  useEffect(() => {
    fetch(`${baseUrl}${api}`)
      .then((response) => response.json())
      .then((data) => setPokemonTeams(data));
  }, [pokemonTeams]);

  const onDeletePokemonTeam = (id) => {
    fetch(`${baseUrl}${api}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status == 200) {
        setPokemonTeams([]);
      }
    });
  };

  const onUpdatePokemonTeam = (id) => {
    onSetEdit(id);
    onRouteChange("update-team");
  };

  return (
    <>
      <NavBar onRouteChange={onRouteChange} />
      <div className="poketeams-container">
        <h1 className="poketeams-title">Hello Trainer!</h1>
        <PlayerCompsRegistered
          pokemonList={pokemonTeams}
          onDeletePokemonTeam={onDeletePokemonTeam}
          onUpdatePokemonTeam={onUpdatePokemonTeam}
        />
      </div>
    </>
  );
};

export default PokemonTeams;
