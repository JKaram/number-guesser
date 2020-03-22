const generateNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const checkGuess = (guess, answer) => {
  return guess === answer ? "winner" : guess > answer ? "lower" : "higher";
};

export { generateNumber, checkGuess };
