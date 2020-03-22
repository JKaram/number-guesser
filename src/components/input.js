import React, { useState } from "react";

export default function Input({ checkGuess, setStatus, answer }) {
  const [value, setValue] = useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setStatus(checkGuess(value, answer));
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={value} onChange={handleChange} />
    </form>
  );
}
