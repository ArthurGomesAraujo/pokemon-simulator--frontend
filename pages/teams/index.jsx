import { useState, useEffect } from "react";

import PokemonTeams from "../../components/templates/PokemonTeams/PokemonTeams";

const PokemonTeamList = (props) => {
  const [pokeTeams, setPokeTeams] = useState([]);
  const [hasDeletion, setHasDeletion] = useState(false);
  const { backendURL, apiURL } = props;
  const finalURL = `${backendURL}${apiURL}`;

  useEffect(() => {
    fetch(finalURL)
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
    fetch(`${finalURL}/${id}`, {
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

export async function getStaticProps() {
  return {
    props: {
      backendURL: process.env.BACKEND_URL,
      apiURL: "/api/pokemon/team",
    },
  };
}

export default PokemonTeamList;
