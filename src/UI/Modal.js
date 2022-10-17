import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.OnNewGame}></div>
    </React.Fragment>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <button className={classes.btn} onClick={props.OnNewGame}>
        Start New Game
      </button>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop OnNewGame={props.OnNewGame} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay OnNewGame={props.OnNewGame}>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
