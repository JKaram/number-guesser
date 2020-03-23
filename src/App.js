import React, { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/input";
import Button from "./components/button";
import { generateNumber, checkGuess } from "./helpers";

function App() {
  const [answer, setAnswer] = useState(generateNumber());
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("Make a guess");

  const newGame = () => {
    setAnswer(generateNumber);
    setStatus("Make a guess");
  }

  return (
    <div>
      {answer}
      <Input
        checkGuess={checkGuess}
        setStatus={setStatus}
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
      />

      <ul>
        {guesses.map(guess => {
          return (
          <li>{guess}</li>
          )
        })}
      </ul>
      <Button onClick={newGame}>New Game</Button>
      {status}
    </div>
  );
}

export default App;
