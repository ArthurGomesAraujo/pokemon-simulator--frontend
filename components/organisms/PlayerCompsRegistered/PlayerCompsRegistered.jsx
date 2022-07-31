import PokemonCompSideList from "../PokemonCompSideList/PokemonCompSideList";

import classes from "./PlayerCompsRegistered.module.css";

const PlayerCompsRegistered = ({ pokemonList, onDeletePokemonTeam, onUpdatePokemonTeam }) => {
  const { pokemonRegisteredList } = classes;

  return (
    <div className={pokemonRegisteredList}>
      {pokemonList.map((listItem, index) => (
        <PokemonCompSideList listItem={listItem} key={index} onDeletePokemonTeam={onDeletePokemonTeam} onUpdatePokemonTeam={onUpdatePokemonTeam}/>
      ))}
    </div>
  );
};

export default PlayerCompsRegistered;
