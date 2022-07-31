import ChosenPokemonSquare from '../../atoms/ChosenPokemonSquare/ChosenPokemonSquare';

import classes from './PlayerPokeList.module.css';

const PlayerPokeList = ({ playerPokeListData, onRemoveFromList, onSubmitComp }) => {
  const { playerPokeList, pokeSaveComp } = classes;

  return (
    <>
    <div className={playerPokeList}>
      {playerPokeListData.map((poke, index) => {
        return <ChosenPokemonSquare
          pokeImageURL={poke.image}
          onRemoveFromList={onRemoveFromList}
          playerListIndex={index}
          key={index}
          canBeRemoved={true}
        />;
      })}
    </div>
    <button className={pokeSaveComp} onClick={() => onSubmitComp()}> Save </button>
    </>
  );
};

export default PlayerPokeList;
