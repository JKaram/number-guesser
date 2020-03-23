import React from "react";
import '../styles/button.scss'

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
};
