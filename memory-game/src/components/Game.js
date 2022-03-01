import CardContainer from "./CardContainer";
import React, { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [cardsArray, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...cardsArray, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArray.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <>
      <h2>
        Score : {score} High Score: {highscore}
      </h2>
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        highscore={highscore}
      />
    </>
  );
}

export default Game;
