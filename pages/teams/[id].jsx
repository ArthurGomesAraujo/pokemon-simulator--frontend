import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PokemonCompEdit from "../../../pokemon-simulator-frontend-test/src/components/templates/PokemonCompEdit/PokemonCompEdit";

const UpdateCompById = (props) => {
  const router = useRouter();

  const compId = router.query.id;
  const { backendURL, apiURL } = props;
  const [userPokeList, setUserPokeList] = useState([]);
  const finalURL = `${backendURL}${apiURL}/${compId}`;

  const pokeData = useRef(
    setPokeData(JSON.parse(localStorage.getItem("pokemon-list")))
  );
  
  useEffect(() => {
    console.log(finalURL);

    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => setUserPokeList(data), []);
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
      pokeData={pokeData}
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

export default UpdateCompById;