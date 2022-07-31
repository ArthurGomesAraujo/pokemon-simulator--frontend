import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import getConfig from 'next/config';

import PokemonCompEdit from "../../components/templates/PokemonCompEdit/PokemonCompEdit";

const UpdateCompById = (props) => {
  const router = useRouter();

  const compId = router.query.id;
  const { publicRuntimeConfig } = getConfig();
  const { pokemonBack } = publicRuntimeConfig;
  const { pokemonList } = props;
  const [userPokeList, setUserPokeList] = useState([]);
  const finalURL = `${pokemonBack.url}${pokemonBack.api}/${compId}`;

  useEffect(() => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => setUserPokeList(data.pokemons), []);
  });

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

    fetch(finalURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemons: userPokeList }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then(() => {
        alert("Composition updated successfully.");
        router.push("/teams");
      })
      .catch((err) => console.log(err));
  };

  return (
    <PokemonCompEdit
      removePokeFromList={removePokeFromList}
      submitComposition={submitComposition}
      addPokemonToSelection={addPokemonToSelection}
      userPokeList={userPokeList}
      pokeData={pokemonList}
    />
  );
};

export async function getStaticProps() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  const resultFromAPI = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);

  return {
    props: {
      backendURL: process.env.BACKEND_URL,
      apiURL: "/api/pokemon/team",
      pokemonList: resultFromAPI,
    },
  };
}

export async function getStaticPaths() {
  const url = `${process.env.BACKEND_URL}/api/pokemon/team`;
  const pokeData = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((team) => team.id))
    .catch((error) => console.log(error));

  const pathsWithParams = pokeData.map((id) => ({
    params: { id: id.toString() },
  }));

  console.log(pathsWithParams);

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default UpdateCompById;
