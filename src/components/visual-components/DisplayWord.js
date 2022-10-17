import React, { useContext } from "react";
import classes from "./DisplayWord.module.css";
import GameContext from "../../store/game-context";

const DisplayWord = () => {
  const gameCtx = useContext(GameContext);
  const currentWord = gameCtx.currentWord.split("");
  return currentWord.map((element) => {
    if (gameCtx.correctLetters.includes(element)) {
      return (
        <div className={classes.letterWrapper} key={Math.random()}>
          <p className={classes.letter}>{element}</p>
        </div>
      );
    } else {
      return (
        <div className={classes.letterWrapper} key={Math.random()}>
          <p className={classes.letter}></p>
        </div>
      );
    }
  });
};

export default DisplayWord;
