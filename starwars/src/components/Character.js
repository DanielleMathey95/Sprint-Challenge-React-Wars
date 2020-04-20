// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const Characters = _props => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
          setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Something went wrong!", error)
      });

  }, [])

  console.log(characters);

  return (
    <div className = "info">
      {characters.map(character => {
        return (
          <Cards 
            name = {character.name}
            image = {character.image} 
            origin = {character.origin.name}
            species = {character.species}
            type = {character.type}
        />)
      })}
    </div>
  );

};

export default Characters;