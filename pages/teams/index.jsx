import { useState } from "react";

import PokemonTeams from "../../../pokemon-simulator-frontend-test/src/components/templates/PokemonTeams/PokemonTeams";

const PokemonTeamList = (props) => {
  const [pokeTeams, setPokeTeams] = useState([]);
  const { backendURL, apiURL } = props;
  const finalURL = `${backendURL}${apiURL}`;

  useEffect(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => setPokeTeams);
  }, [pokeTeams]);

  const onDeletePokemonTeam = (id) => {
    fetch(`${finalURL}/${id}`, {
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
