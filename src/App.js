import React, { useState } from "react";
import "./App.css";

import Input from "./components/input";
import Button from "./components/button";
import { generateNumber, checkGuess } from "./helpers";

function App() {
  const [answer, setAnswer] = useState(generateNumber());
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("Make a guess");

  function newGame() {
    setAnswer(generateNumber);
    setStatus("Make a guess");
  }

  return (
    <div>
      {answer}
      <Input checkGuess={checkGuess} setStatus={setStatus} answer={answer} />
      <Button onClick={newGame}>New Game</Button>
      {status}
    </div>
  );
}

export default App;
