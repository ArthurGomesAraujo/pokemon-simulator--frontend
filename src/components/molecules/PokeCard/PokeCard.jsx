import React, { useState, useEffect } from "react";

import "./PokeCard.css";

const PokeCard = ({ pokemon, onSelectPokeToAdd }) => {
  const [image, setImage] = useState("");
  const [pokedexNumber, setPokedexNumber] = useState("");
  const [bg, setBg] = useState("");
  const { name, url } = pokemon;

  const setBackgroundImage = () => {
    switch (bg.toUpperCase()) {
      case "WATER":
        return "bg-water";
      case "FIRE":
        return "bg-fire";
      case "GRASS":
        return "bg-grass";
      case "DRAGON":
        return "bg-dragon";
      case "ELECTRIC":
        return "bg-eletric";
      case "FAIRY":
        return "bg-fairy";
      case "FIGHTING":
        return "bg-fight";
      case "GHOST":
        return "bg-ghost";
      case "GROUND":
        return "bg-ground";
      case "ICE":
        return "bg-ice";
      case "ROCK":
        return "bg-rock";
      case "NORMAL":
        return "bg-normal";
      case "FLYING":
        return "bg-flying";
      case "BUG":
        return "bg-insect";
      case "PSYCHIC":
        return "bg-psychic";
      case "POISON":
        return "bg-poison";
      default:
        return "";
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
      className={`card ${setBackgroundImage()}`}
      onClick={() => addPokemonToTeam()}
    >
      <p className="header">{`#${pokedexNumber} - ${name}`}</p>
      <img src={image} alt="pokemon" className="poke-image" />
    </div>
  );
};

export default PokeCard;
