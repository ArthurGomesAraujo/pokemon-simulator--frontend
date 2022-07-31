import classes from "./ChosenPokeSquare.module.css";

const ChosenPokeSquare = ({
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

export default ChosenPokeSquare;
