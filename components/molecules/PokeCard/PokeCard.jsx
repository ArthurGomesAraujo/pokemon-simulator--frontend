import { useState, useEffect } from "react";

import classes from "./PokeCard.module.css";

const PokeCard = ({ pokemon, onSelectPokeToAdd }) => {
  const [image, setImage] = useState("");
  const [pokedexNumber, setPokedexNumber] = useState("");
  const [bg, setBg] = useState("");
  const { card, header, pokeImage } = classes;
  const { name, url } = pokemon;

  const setBackgroundImage = () => {
    switch (bg.toUpperCase()) {
      case "WATER":
        return classes.bgWater;
      case "FIRE":
        return classes.bgFire;
      case "GRASS":
        return classes.bgGrass;
      case "DRAGON":
        return classes.bgDragon;
      case "ELECTRIC":
        return classes.bgEletric;
      case "FAIRY":
        return classes.bgFairy;
      case "FIGHTING":
        return classes.bgFight;
      case "GHOST":
        return classes.bgGhost;
      case "GROUND":
        return classes.bgGround;
      case "ICE":
        return classes.bgIce;
      case "ROCK":
        return classes.bgRock;
      case "NORMAL":
        return classes.bgNormal;
      case "FLYING":
        return classes.bgFlying;
      case "BUG":
        return classes.bgInsect;
      case "PSYCHIC":
        return classes.bgPsychic;
      case "POISON":
        return classes.bgPoison;
      default:
        return null;
    }
  };

  const addPokemonToTeam = () => {
    const pokeToAdd = { name, image };

    onSelectPokeToAdd(pokeToAdd);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokedexNumber(data.id);
        setImage(data.sprites.front_default);
        setBg(data.types[0].type.name);
      });
  }, [pokemon]);

  return (
    <div
      className={`${card} ${setBackgroundImage()}`}
      onClick={() => addPokemonToTeam()}
    >
      <p className={header}>{`#${pokedexNumber} - ${name}`}</p>
      <img src={image} alt="pokemon" className={pokeImage} />
    </div>
  );
};

export default PokeCard;
