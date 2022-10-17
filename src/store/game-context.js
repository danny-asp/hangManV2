import React from "react";

const GameContext = React.createContext({
  currentWord: "a",
  availableLetters: [],
  correctLetters: [],
  incorrectLetters: [],
  playerLifes: 6,
  currentWordDesciption: "",
  updateCorrectLetters: () => {},
  updateIncorrectLetters: () => {},
  updateGameObject: () => {},
  onNewGame: () => {}
});

export default GameContext;
