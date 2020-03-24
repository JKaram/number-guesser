
const generateNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const checkGuess = (guess, answer) => {
  return guess === answer ? "Winner" : guess > answer ? "Lower" : "Higher";
};

export { generateNumber, checkGuess };
