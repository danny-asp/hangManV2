import React, { useContext } from "react";
import classes from "./Header.module.css";
import GameContext from "../store/game-context";

const Header = () => {
  const gameCtx = useContext(GameContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.left}>HangMan 2.0</div>
        <div className={classes.middle}>
          <div>{gameCtx.currentWord}</div>
          <div>{gameCtx.currentWordDesciption}</div>
        </div>
        <div className={classes.right}>
          <button className={classes.btnNewGame} onClick={gameCtx.onNewGame}>
            NEW GAME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
