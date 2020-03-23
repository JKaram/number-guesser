import React, { useState } from "react";

export default function Input({
  checkGuess,
  setStatus,
  answer,
  guesses,
  setGuesses
}) {
  const [value, setValue] = useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setStatus(checkGuess(parseInt(value, 10), answer));
      setValue(0);
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {typeof value}
      <input
        type="number"
        placeholder="Guess Number"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
