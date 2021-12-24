import React from "react";
import "./MyInput.css";

export default function MyInput(props) {
  return (
    <input
      className="MyInput"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.alterarNome(e.target.value)}
    ></input>
  );
}
