import PlayerCompsRegistered from "../../../../pokemon-simulator-frontend-test/src/components/organisms/PlayerCompsRegistered/PlayerCompsRegistered";
import NavBar from "../../../../pokemon-simulator-frontend-test/src/components/molecules/NavBar/NavBar";

import classes from "./PokemonTeams.module.css";

const PokemonTeams = (props) => {
  const { pokemonTeams, onDeletePokemonTeam } = props;
  const { poketeamsContainer, poketeamsTitle } = classes;

  return (
    <>
      <NavBar />
      <div className={poketeamsContainer}>
        <h1 className={poketeamsTitle}>Hello Trainer!</h1>
        <PlayerCompsRegistered
          pokemonList={pokemonTeams}
          onDeletePokemonTeam={onDeletePokemonTeam}
        />
      </div>
    </>
  );
};

export default PokemonTeams;
