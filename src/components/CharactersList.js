import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setCharacters((previousChararacters) => {
          return [...previousChararacters, ...apiData.results];
        });
        setTotalPages(apiData.info.pages);
      });
  }, [page]);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function onFilterStatus(FilterStatusInputValue) {
    if (FilterStatusInputValue === "all") {
      setFilter("all");
    } else if (FilterStatusInputValue === "Alive") {
      setFilter("Alive");
    } else if (FilterStatusInputValue === "Dead") {
      setFilter("Dead");
    } else if (FilterStatusInputValue === "unknown") {
      setFilter("unknown");
    }
  }

  function onFilterName(FilterNameInputValue) {
    setFilterName(FilterNameInputValue);
  }

  function renderCharacters() {
    return characters
      .filter((character) => {
        return character.status === filter || filter === "all";
      })
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(filterName.toLowerCase()) ||
          filterName === ""
        );
      })
      .map((character) => {
        const { id, name, image } = character;
        console.log(characters);

        return (
          <li key={id} className={`Character ${character.status}`}>
            <Link to={`/characters/${id}`}>
              <h3>{name}</h3>
            </Link>
            <img src={image} alt={name} className="CharacterImage" />
          </li>
        );
      });
  }

  return (
    <div className="CharacterList">
      <Filter onFilterName={onFilterName} onFilterStatus={onFilterStatus} />
      <ul>{renderCharacters()}</ul>
      {page < totalPages && (
        <button className="LoadButton" onClick={handleLoadMore}>
          Load more Character!
        </button>
      )}
    </div>
  );
}

export default CharactersList;
