import wordBank from "./wordle-bank.txt";

const regexCheck = /^[a-zA-Z]$/g;
export const isLetter = (character) => {
  return regexCheck.test(character);
};

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((res) => res.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });

  return { wordSet, todaysWord };
};

export const isNullOrUndefined = (obj) => {
  return obj === undefined || obj === null;
};

export const stringIsNullOrEmpty = (obj) => {
  return isNullOrUndefined(obj) || obj.length === 0;
};
