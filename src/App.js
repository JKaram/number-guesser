import React, { useState, useEffect } from "react";
import "./App.scss";

import Input from "./components/input";
import Button from "./components/button";
import Status from "./components/status";
import Guess from "./components/guess";

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
      <h1>
        Guess<span> The Number</span>
      </h1>
      <Input
        checkGuess={checkGuess}
        setStatus={setStatus}
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Status status={status} />
      <ul>
        {guesses.map(guess => {
          return <Guess>{guess}</Guess>;
        })}
      </ul>
      <Button className="newgame" onClick={newGame}>New Game</Button>
    </body>
  );
}

export default App;
