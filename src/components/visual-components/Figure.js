import React, { useContext } from "react";
import classes from "./Figure.module.css";
import GameCotext from "../../store/game-context";

const Figure = () => {
  const gameCtx = useContext(GameCotext);
  return (
    <React.Fragment>
      <svg height="250" width="200" className={classes.figureContainer}>
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* Head */}
        {gameCtx.playerLifes < 6 && <circle cx="140" cy="70" r="20" />}
        {/* Body */}
        {gameCtx.playerLifes < 5 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* Arms*/}
        {gameCtx.playerLifes < 4 && <line x1="140" y1="120" x2="120" y2="100" />}
        {gameCtx.playerLifes < 3 && <line x1="140" y1="120" x2="160" y2="100" />}
        {/* Legs */}
        {gameCtx.playerLifes < 2 && <line x1="140" y1="150" x2="120" y2="180" />}
        {gameCtx.playerLifes < 1 && <line x1="140" y1="150" x2="160" y2="180" />}
      </svg>
    </React.Fragment>
  );
};

export default Figure;
