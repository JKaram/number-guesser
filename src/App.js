import React, { useState, useEffect } from "react";
import "./App.scss";

import Input from "./components/input";
import Button from "./components/button";
import { generateNumber, checkGuess } from "./helpers";

function App() {
  const [status, setStatus] = useState("Make a guess");
  const [answer, setAnswer] = useState(generateNumber());
  const [guesses, setGuesses] = useState([]);

  const newGame = () => {
    setAnswer(generateNumber);
    setGuesses([]);
    setStatus("Make a guess");  
  };

  return (
    <body>
      <h1>Guess The <span>Number</span></h1>
      <Input
        checkGuess={checkGuess}
        setStatus={setStatus}
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      {status}
      <ul>
        {guesses.map(guess => {
          return <li>{guess}</li>;
        })}
      </ul>
      <Button onClick={newGame}>New Game</Button>
    </body>
  );
}

export default App;
