import React, { useEffect, useState } from "react";
import Card from "./Card";
import Beedrill from "../pictures/beedrill.png";
import Bulbasaur from "../pictures/bulbasaur.png";
import Caterpie from "../pictures/caterpie.png";
import Charmander from "../pictures/charmander.png";
import Charmeleon from "../pictures/charmeleon.png";
import Ivysaur from "../pictures/ivysaur.png";
import Venusaur from "../pictures/venusaur.png";
import Wartortle from "../pictures/wartortle.png";

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let data = [
    {
      src: Beedrill,
      title: "beedrill",
    },
    {
      src: Bulbasaur,
      title: "bulbasaur",
    },
    {
      src: Caterpie,
      title: "caterpie",
    },
    {
      src: Charmander,
      title: "charmander",
    },
    {
      src: Charmeleon,
      title: "charmeleon",
    },
    {
      src: Ivysaur,
      title: "ivysaur",
    },
    {
      src: Venusaur,
      title: "venusaur",
    },
    {
      src: Wartortle,
      title: "wartotle",
    },
  ];

  const [cards, setCards] = useState(data);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);

      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score, highScore]);

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}

export default CardContainer;
