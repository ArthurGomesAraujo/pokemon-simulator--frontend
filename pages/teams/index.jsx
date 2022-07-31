import { useState, useEffect } from "react";

import PokemonTeams from "../../components/templates/PokemonTeams/PokemonTeams";

const PokemonTeamList = (props) => {
  const [pokeTeams, setPokeTeams] = useState(props.userList);
  const [hasDeletion, setHasDeletion] = useState(false);

  useEffect(() => {
    fetch("/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokeTeams(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        setPokeTeams(data);
        setHasDeletion(false);
      })
      .catch((err) => console.log(err));
  }, [hasDeletion === true]);

  const onDeletePokemonTeam = (id) => {
    fetch("/api/pokemon", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          setHasDeletion(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <PokemonTeams
      pokemonTeams={pokeTeams}
      onDeletePokemonTeam={onDeletePokemonTeam}
    />
  );
};

export default PokemonTeamList;
