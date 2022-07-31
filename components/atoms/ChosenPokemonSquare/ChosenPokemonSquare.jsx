import classes from "./ChosenPokemonSquare.module.css";

const ChosenPokemonSquare = ({
  pokeImageURL,
  playerListIndex,
  onRemoveFromList,
  canBeRemoved
}) => {
  const { pokesquareContainer, removePoke, pokesquareImage } = classes;

  return (
    <div className={pokesquareContainer}>
      {canBeRemoved ? <span
        className={removePoke}
        onClick={() => onRemoveFromList(playerListIndex)}
      >
        X
      </span> : null}

      <img src={pokeImageURL} alt="" className={pokesquareImage} />
    </div>
  );
};

export default ChosenPokemonSquare;
