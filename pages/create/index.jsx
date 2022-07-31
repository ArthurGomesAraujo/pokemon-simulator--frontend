import { useState } from "react";

import PokemonCompEdit from "../../components/templates/PokemonCompEdit/PokemonCompEdit";

const CreatePokemonComp = (props) => {
  const [userPokeList, setUserPokeList] = useState([]);
  const { pokemonList } = props;

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

    fetch("/api/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemons: userPokeList }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) =>
        alert("Composition saved successfully. Here's the ID: " + data.id)
      );
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
    .then(data => data.results);

  return {
    props: {
      pokemonList: resultFromAPI
    },
  };
}

export default CreatePokemonComp;
