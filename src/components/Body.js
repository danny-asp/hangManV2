import React, { useContext } from "react";
import classes from "./Body.module.css";
import Header from "./Header";
import Figure from "./visual-components/Figure";
import ProfressBar from "./visual-components/ProgressBar";
import DisplayWord from "./visual-components/DisplayWord";
import AvailableLetters from "./visual-components/AvailableLetters";
import GameContext from "../store/game-context";
import Modal from "../UI/Modal";

const Body = (props) => {
  const gameCtx = useContext(GameContext);
  const currentWordSortedLength = [...new Set(gameCtx.currentWord)].sort().length;
  const correctLettersLength = gameCtx.correctLetters.sort().length;
  return (
    <div className={classes.wrapper}>
      {gameCtx.playerLifes === 0 && (
        <Modal OnNewGame={gameCtx.onNewGame}>
          <div>Sorry you lost</div>
          <Figure />
          <div>The right answer was: {gameCtx.currentWord}</div>
        </Modal>
      )}
      {currentWordSortedLength === correctLettersLength && (
        <Modal OnNewGame={gameCtx.onNewGame}>
          <div>Conrats !!!</div>
        </Modal>
      )}
      <Header />
      <div className={classes.main}>
        <div className={classes.figure}>
          <Figure />
        </div>
        <div className={classes.letters}>
          <div className={classes.pickAName}>Pick a Letter</div>
          <div className="row availableLetters">
            <AvailableLetters />
          </div>
        </div>
      </div>
      <div className={classes.progress}>
        <ProfressBar />
      </div>
      <div className={classes.word}>
        <DisplayWord />
      </div>
    </div>
  );
};

export default Body;
