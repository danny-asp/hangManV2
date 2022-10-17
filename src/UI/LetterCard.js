import React from "react";
import classes from "./LetterCard.module.css";

const LetterCard = (props) => {
  return (
    <button className={classes.wrapper} disabled={props.disableBtn} onClick={props.onClick}>
      <p className={classes.letter}>{props.name}</p>
    </button>
  );
};

export default LetterCard;
