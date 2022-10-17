import React, { useEffect, useState } from "react";
import GameContext from "./game-context";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const ContextProvider = (props) => {
  const [currentWord, setCurrentWord] = useState("");
  const [availableLetters, setAvailableLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [playerLifes, setPlayerLifes] = useState(6);
  const [currentWordDesciption, setCurrentWordDescription] = useState("");
  const [newGame, setNewGame] = useState(false);
  const [gameLoading, setGameIsLoading] = useState(false);

  useEffect(() => {
    const storageData = localStorage.getItem("object");
    const gameData = JSON.parse(storageData);
    setCurrentWord("LOADING....");
    setCurrentWordDescription("Loading...");

    if (storageData === null) {
      setGameIsLoading(true);
      // console.log("storageData === null");
      // console.log("new data is fetched");
      const fetchData = async () => {
        const response = await fetch("https://random-words-api.vercel.app/word");
        const responseData = await response.json();

        setCurrentWord(responseData[0].word.toLowerCase());
        setCurrentWordDescription(responseData[0].definition);

        let availableLett = [...new Set(responseData[0].word.toLowerCase())];
        let tempAlphabet = [...alphabet].filter((letter) => !availableLett.includes(letter));
        let countOfNeededLetters = responseData[0].word.length * 2 - availableLett.length;
        let restLettersRandomize = getMultipleRandom(tempAlphabet, countOfNeededLetters);
        if (countOfNeededLetters > 15) {
          availableLett = alphabet;
        } else if (countOfNeededLetters > 6 && countOfNeededLetters < 18) {
          availableLett = [...restLettersRandomize, ...availableLett];
        } else {
          restLettersRandomize = getMultipleRandom(tempAlphabet, 12 - availableLett.length);
          availableLett = [...restLettersRandomize, ...availableLett];
        }
        for (let i = 0; i < 7; i++) {
          availableLett = availableLett.sort((a, b) => 0.5 - Math.random());
        }
        setAvailableLetters(availableLett);

        let firstLastChar = [];
        firstLastChar.push(responseData[0].word[0].toLowerCase());
        firstLastChar.push(responseData[0].word.charAt(responseData[0].word.length - 1));
        setCorrectLetters(firstLastChar);
      };
      // console.log("data is fetched");
      setGameIsLoading(false);
      fetchData();
    } else {
      console.log("data is provided by the store");
      setCurrentWord(gameData.word);
      setAvailableLetters(gameData.availLetters);
      setCorrectLetters(gameData.corrLetters);
      setIncorrectLetters(gameData.incLetters);
      setPlayerLifes(gameData.playLefes);
      setCurrentWordDescription(gameData.descript);
    }
  }, [newGame]);

  useEffect(() => {
    if (currentWord === "") {
      return;
    } else {
      const game = {
        word: currentWord,
        availLetters: availableLetters,
        corrLetters: correctLetters,
        incLetters: incorrectLetters,
        playLefes: playerLifes,
        descript: currentWordDesciption
      };
      localStorage.setItem("object", JSON.stringify(game));
    }
  }, [correctLetters, incorrectLetters]);

  const onNewGame = () => {
    localStorage.clear();
    setCurrentWord("Loading...");
    setAvailableLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setCurrentWordDescription("Loading...");
    setPlayerLifes(6);
    setNewGame(!newGame);
  };

  const onGameOver = () => {
    console.log(gameContext.currentWord);
  };

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const updateCorrectLetters = (letter) => {
    setCorrectLetters((previous) => {
      return [...previous, letter];
    });
  };

  const updateIncorrectLetters = (letter) => {
    setIncorrectLetters((previous) => {
      setPlayerLifes((prev) => {
        return prev - 1;
      });
      if (playerLifes === 1) {
        onGameOver();
      }
      return [...previous, letter];
    });
  };

  const gameContext = {
    currentWord: currentWord,
    availableLetters: availableLetters,
    correctLetters: correctLetters,
    incorrectLetters: incorrectLetters,
    playerLifes: playerLifes,
    currentWordDesciption: currentWordDesciption,
    updateCorrectLetters: updateCorrectLetters,
    updateIncorrectLetters: updateIncorrectLetters,
    onNewGame: onNewGame
  };

  return (
    <React.Fragment>
      {!gameLoading && (
        <GameContext.Provider value={gameContext} gameLoading={gameLoading}>
          {props.children}
        </GameContext.Provider>
      )}
    </React.Fragment>
  );
};

export default ContextProvider;
