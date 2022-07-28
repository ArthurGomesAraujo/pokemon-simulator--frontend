import React, { useState } from "react";

import PokeListPagination from "../../organisms/PokeListPagination/PokeListPagination";
import PlayerPokeList from "../../organisms/PlayerPokeList/PlayerPokeList";

import NavBar from "../../molecules/NavBar/NavBar";

import { baseApi } from "../../../utils/constants";

import "./PokemonRegistration.css";

const PokemonRegistration = ({ pokemonData, onRouteChange }) => {
  const { baseUrl, api } = baseApi;
  const [userPokeList, setUserPokeList] = useState([]);

  const addPokemonToSelection = (pokemon) => {
    if (userPokeList.length === 6) return;

    const pokeList = [...userPokeList];

    pokeList.push(pokemon);

    setUserPokeList(pokeList);
  };

  const removePokeFromList = (index) => {
    if (index === userPokeList.length - 1) {
      setUserPokeList(userPokeList.slice(0, index));
    } else if (index === 0) {
      setUserPokeList(userPokeList.slice(1, userPokeList.length));
    } else {
      const pokeList1 = userPokeList.slice(0, index);
      const pokeList2 = userPokeList.slice(index + 1, userPokeList.length);

      setUserPokeList([...pokeList1, ...pokeList2]);
    }
  };

  const submitComposition = () => {
    if (userPokeList.length === 0) {
      alert("Please select at lease one pokémon");
      return;
    }

    fetch(`${baseUrl}${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemons: userPokeList}),
    })
      .then((response) => {
        if (response.status === 201) return response.json();
      })
      .then((data) =>
        alert("Composition saved successfully. Here's the ID: " + data.id)
      );
  };

  return (
    <div className="pokemon-list-selection-container">
      <NavBar onRouteChange={onRouteChange} />
      <div className="div-section">
        <div className="chosen-pokemons">
          <PlayerPokeList
            playerPokeList={userPokeList}
            onRemoveFromList={removePokeFromList}
            onSubmitComp={submitComposition}
          />
        </div>
        <div className="container-list">
          <div className="container-middle-section">
            <PokeListPagination
              pokemonList={pokemonData}
              onSelectPokeToAdd={addPokemonToSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonRegistration;
