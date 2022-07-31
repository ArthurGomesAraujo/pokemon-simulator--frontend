import NavBar from "../../molecules/NavBar/NavBar";
import PlayerPokeList from "../../organisms/PlayerPokeList/PlayerPokeList";
import PokeListPagination from "../../organisms/PokeListPagination/PokeListPagination";

import classes from "./PokemonCompEdit.module.css";

const PokemonCompEdit = (props) => {
  const {
    pokemonListSelectionContainer,
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
    <div className={pokemonListSelectionContainer}>
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
