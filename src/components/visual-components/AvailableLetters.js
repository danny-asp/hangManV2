import React, { useContext } from "react";

import LetterCard from "../../UI/LetterCard";
import GameContext from "../../store/game-context";

const AvailableLetters = () => {
  const gameCtx = useContext(GameContext);
  const availableLett = gameCtx.availableLetters;

  const onLetterPick = (event) => {
    if (gameCtx.currentWord.includes(event.target.textContent)) {
      gameCtx.updateCorrectLetters(event.target.textContent);
    } else {
      gameCtx.updateIncorrectLetters(event.target.textContent);
    }
    // gameCtx.updateGameObject(gameCtx);
  };

  return availableLett.map((element) => {
    return (
      <LetterCard
        name={element}
        key={Math.random()}
        disableBtn={gameCtx.correctLetters.includes(element) || gameCtx.incorrectLetters.includes(element)}
        onClick={onLetterPick}
      />
    );
  });
};

export default AvailableLetters;
