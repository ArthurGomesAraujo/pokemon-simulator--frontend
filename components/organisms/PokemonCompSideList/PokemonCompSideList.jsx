import Link from 'next/link';

import CompSquare from "../../atoms/CompSquare/CompSquare";

import classes from "./PokemonCompSideList.module.css";

const PokemonCompSideList = ({ listItem, onDeletePokemonTeam }) => {
  const { id, pokemons } = listItem;
  const { compContainer, listContainer, buttonGroup, btnUpdate, btn, btnDelete } = classes;

  return (
    <div className={compContainer}>
      <div className={listContainer}>
        {pokemons.map((pokemon, index) => (
          <CompSquare image={pokemon.image} key={index} />
        ))}
      </div>
      <div className={buttonGroup}>
          <button className={`${btn} ${btnUpdate}`}><Link href={`/teams/${id}`}>Update</Link></button>
          <button className={`${btn} ${btnDelete}`} onClick={() => onDeletePokemonTeam(id)}>Delete</button>
        </div>
    </div>
  );
};

export default PokemonCompSideList;
