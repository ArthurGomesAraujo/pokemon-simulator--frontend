import React, { useEffect, useState } from "react";

import OptionsMenu from "../components/templates/OptionsMenu/OptionsMenu";
import PokemonCompEdit from "../components/templates/PokemonCompEdit/PokemonCompEdit";
import PokemonRegistration from "../components/templates/PokemonRegistration/PokemonRegistration";
import PokemonTeams from "../components/templates/PokemonTeams/PokemonTeams";

import { pokeURL } from "../utils/constants";

import "./HomePage.css";

const isLocalStorageNull = () => {
  return (
    localStorage.getItem("pokemon-list") === undefined ||
    localStorage.getItem("pokemon-list") === null
  );
};

const HomePage = () => {
  const [pokeData, setPokeData] = useState([]);
  const [route, setRoute] = useState('home');
  const [editId, setEditId] = useState('');

  console.log(process.env.REACT_APP_BACKEND_HOST);

  useEffect(() => {
    if (isLocalStorageNull()) {
      console.log("Fetching from api");
      fetch(`${pokeURL.pokeApi}/pokemon?limit=151&offset=0`)
        .then((response) => response.json())
        .then((data) => {
          setPokeData(data.results);
          localStorage.setItem("pokemon-list", JSON.stringify(data.results));
        });
    } else {
        console.log("Getting from local storage");
        setPokeData(JSON.parse(localStorage.getItem('pokemon-list')));
    }
  }, []);

  const onRouteChange = (route) => {
    setRoute(route);
  }

  switch (route) {
    case 'home': return <OptionsMenu onRouteChange={onRouteChange} />
    case 'create-team': return <PokemonRegistration onRouteChange={onRouteChange} pokemonData={pokeData} />
    case 'get-teams': return <PokemonTeams onRouteChange={onRouteChange} onSetEdit={setEditId}/>
    case 'update-team': return <PokemonCompEdit pokemonData={pokeData} teamId={editId} onRouteChange={onRouteChange}/> 
    default: return null;
  }
};

export default HomePage;
