import { useState, useEffect } from "react";

import PokeCard from "../../molecules/PokeCard/PokeCard";

import classes from "./PokeListPagination.module.css";

const PokeListPagination = ({ pokemonList, onSelectPokeToAdd }) => {
  const [paginatedList, setPaginatedList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { container, pagination, paginationList, pageNumber } = classes;

  useEffect(() => {
    const size = pokemonList.length;
    setPaginatedList(pokemonList.slice(0, 15));
    setTotalPages(Math.ceil(size / 15));
  }, []);

  const setCurrentPage = (page) => {
    if (page === currentIndex) return;

    if (page < 11) {
      setPaginatedList(pokemonList.slice((page - 1) * 15, page * 15));
    } else {
      setPaginatedList(
        pokemonList.slice(pokemonList.length - 2, pokemonList.length - 1)
      );
    }

    setCurrentIndex(page);
  };

  const setSelected = (current) => {
    return currentIndex === current ? "selected" : "";
  };

  return (
    <>
      <div className={container}>
        {paginatedList.map((pokemon, index) => (
          <PokeCard pokemon={pokemon} onSelectPokeToAdd={onSelectPokeToAdd} key={index} />
        ))}
      </div>
      <div className={pagination}>
        <ul className={paginationList}>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              className={`${pageNumber} ${setSelected(i + 1)}`}
              onClick={() => setCurrentPage(i + 1)}
              key={i}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PokeListPagination;
