import newGame from './App'

const generateNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const checkGuess = (guess, answer) => {
  return guess === answer ? "winner" && newGame : guess > answer ? "lower" : "higher";
};

export { generateNumber, checkGuess };
