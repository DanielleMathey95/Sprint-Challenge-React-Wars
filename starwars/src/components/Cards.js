import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: black;
  color: lightgrey;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10%;
`;

const Explanation = styled.p`
  font-size: 20px;
  color: #098496;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  background: -webkit-linear-gradient(left, #081a8c, #29d606,#58088c);
`;

const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
`

const Cards = props => {
  return (
    <Card>
      <Title>
        <h2>{props.name}</h2>
      </Title>
      
      <CharacterImage src = {props.image} alt = "Rick and Morty Character" />
      <Explanation>
        <p>{props.origin}</p>
        <p>{props.species}</p>
        <p>{props.type}</p>
      </Explanation>
     
    </Card>
     
  )
}

export default Cards;