import React from "react";
import "./Perfil.css";

export default function Perfil(props) {
  return (
    <div className="Perfil">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt="imagem perfil" />
        <p className="mt-2">{props.nome}</p>
      </a>
    </div>
  );
}
