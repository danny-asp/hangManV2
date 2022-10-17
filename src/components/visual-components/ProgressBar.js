import React, { useContext } from "react";
import classes from "./ProgressBar.module.css";
import GameContext from "../../store/game-context";
import { Progress } from "reactstrap";

const ProfressBar = () => {
  const gameCtx = useContext(GameContext);
  return (
    <div className={classes.wrapper}>
      <Progress
        className={classes.progress}
        value={(gameCtx.playerLifes * 100) / 6}
        color={gameCtx.playerLifes > 4 ? "success" : gameCtx.playerLifes > 2 ? "warning" : "danger"}
      >
        {gameCtx.playerLifes}
      </Progress>
    </div>
  );
};

export default ProfressBar;
