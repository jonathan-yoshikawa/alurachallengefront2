import React from "react";
import "./MyTextArea.css";

export default function MyTextArea(props) {
  return (
    <textarea className="MyTextArea" rows="5" placeholder={props.placeholder} />
  );
}
