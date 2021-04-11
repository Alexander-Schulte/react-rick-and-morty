import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndividualCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (apiData) => {
          setCharacter(apiData);
        },
        [id]
      );
  });

  return (
    <article className={`IndividualCharacter ${character.status}`}>
      <h4>{character.name}</h4>
      <div className="IndividualCharacterBox">
        <img
          alt={character.name}
          src={character.image}
          className="CharacterImage"
        />
        <ul className="Description">
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
        </ul>
      </div>
    </article>
  );
}
