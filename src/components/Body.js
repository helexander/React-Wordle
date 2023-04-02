import React, { memo, useState } from "react";
import { boardDefault, isLetter } from "../AttemptGuessConstants";
import AttemptGuess from "./AttemptGuess";

const ANSWER_LENGTH = 5;

const Body = () => {
  const [board, setBoard] = useState(boardDefault);
  const letters = document.querySelectorAll(".scoreboard__letter");
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
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText =
      letter;
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
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
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
    <div className="scoreboard">
      {/* <AttemptGuess /> */}
      <div className="scoreboard__letter" id="letter-0"></div>
      <div className="scoreboard__letter" id="letter-1"></div>
      <div className="scoreboard__letter" id="letter-2"></div>
      <div className="scoreboard__letter" id="letter-3"></div>
      <div className="scoreboard__letter" id="letter-4"></div>
      <div className="scoreboard__letter" id="letter-5"></div>
      <div className="scoreboard__letter" id="letter-6"></div>
      <div className="scoreboard__letter" id="letter-7"></div>
      <div className="scoreboard__letter" id="letter-8"></div>
      <div className="scoreboard__letter" id="letter-9"></div>
      <div className="scoreboard__letter" id="letter-10"></div>
      <div className="scoreboard__letter" id="letter-11"></div>
      <div className="scoreboard__letter" id="letter-12"></div>
      <div className="scoreboard__letter" id="letter-13"></div>
      <div className="scoreboard__letter" id="letter-14"></div>
      <div className="scoreboard__letter" id="letter-15"></div>
      <div className="scoreboard__letter" id="letter-16"></div>
      <div className="scoreboard__letter" id="letter-17"></div>
      <div className="scoreboard__letter" id="letter-18"></div>
      <div className="scoreboard__letter" id="letter-19"></div>
      <div className="scoreboard__letter" id="letter-20"></div>
      <div className="scoreboard__letter" id="letter-21"></div>
      <div className="scoreboard__letter" id="letter-22"></div>
      <div className="scoreboard__letter" id="letter-23"></div>
      <div className="scoreboard__letter" id="letter-24"></div>
      <div className="scoreboard__letter" id="letter-25"></div>
      <div className="scoreboard__letter" id="letter-26"></div>
      <div className="scoreboard__letter" id="letter-27"></div>
      <div className="scoreboard__letter" id="letter-28"></div>
      <div className="scoreboard__letter" id="letter-29"></div>
    </div>
  );
};

export default memo(Body);
