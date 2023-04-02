import React from "react";
import { isLetter } from "../AttemptGuessConstants";
import "../body.scss";

const ANSWER_LENGTH = 5;

const AttemptGuess = () => {
  let currentGuess = "";
  let currentRow = 0;

  const addCharacter = (letter) => {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      // replaces the last character
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    // Assigns letter to div
    // const letters = document.querySelectorAll('.scoreboard-letter')
    // letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
  };

  const submitAttempt = async () => {
    if (currentGuess.length !== ANSWER_LENGTH) {
      return;
    }

    // TODO: validate the word

    // TODO: do all the marking as "correct", "close", or "wrong"

    // TODO: did the user win or lose

    // Move onto next row
    currentRow++;

    // Reset the current guess
    currentGuess = "";
  };

  const removeCharacter = () => {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    // letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
  };

  document.addEventListener("keydown", (e) => {
    const action = e.key;

    if (action === "Enter") {
      submitAttempt();
    } else if (action === "Backspace") {
      removeCharacter();
    } else if (isLetter(action)) {
      addCharacter(action.toUpperCase());
    } else {
      // show invalid character error
      return;
    }
  });
  return (
    <div className="body">
      <div className="body__attempt-guess">
        <div className="body__attempt-guess__single-box" />
        <div className="body__attempt-guess__single-box" />
        <div className="body__attempt-guess__single-box" />
        <div className="body__attempt-guess__single-box" />
        <div className="body__attempt-guess__single-box" />
      </div>
    </div>
  );
};

export default AttemptGuess;
