import { useEffect } from "react";

import OptionsMenu from "../../pokemon-simulator-frontend-test/src/components/templates/OptionsMenu/OptionsMenu";

const HomePage = (props) => {
  const isLocalStorageNull = () => {
    return (
      localStorage.getItem("pokemon-list") === undefined ||
      localStorage.getItem("pokemon-list") === null
    );
  };

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

    if (isLocalStorageNull()) {
      console.log("Fetching from API");
      fetch(URL)
        .then((response) => response.json())
        .then((data) =>
          localStorage.setItem("pokemon-list", JSON.stringify(data.results))
        );
    }
  });

  console.log(props.backendURL);

  return <OptionsMenu />;
};

export default HomePage;
