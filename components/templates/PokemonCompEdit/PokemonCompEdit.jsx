import NavBar from "../../../../pokemon-simulator-frontend-test/src/components/molecules/NavBar/NavBar";
import PlayerPokeList from "../../../../pokemon-simulator-frontend-test/src/components/organisms/PlayerPokeList/PlayerPokeList";
import PokeListPagination from "../../../../pokemon-simulator-frontend-test/src/components/organisms/PokeListPagination/PokeListPagination";

import classes from "./PokemonCompEdit.module.css";

const PokemonCompEdit = (props) => {
  const {
    pokemonListSectionContainer,
    divSection,
    chosenPokemons,
    containerList,
    containerMiddleSection,
  } = classes;
  const {
    removePokeFromList,
    submitComposition,
    addPokemonToSelection,
    userPokeList,
    pokeData,
  } = props;

  return (
    <div className={pokemonListSectionContainer}>
      <NavBar />
      <div className={divSection}>
        <div className={chosenPokemons}>
          <PlayerPokeList
            playerPokeListData={userPokeList}
            onRemoveFromList={removePokeFromList}
            onSubmitComp={submitComposition}
          />
        </div>
        <div className={containerList}>
          <div className={containerMiddleSection}>
            <PokeListPagination
              pokemonList={pokeData}
              onSelectPokeToAdd={addPokemonToSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCompEdit;
