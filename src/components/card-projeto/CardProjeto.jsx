import React from "react";

import "./CardProjeto.css";

export default function CardProjeto(props) {
  return (
    <div className="CardProjeto">
      <div
        className="codigoWrapper"
        style={{ backgroundColor: props.projeto.cor }}
      >
        <div className="editorTexto">
          <div className="circles">
            <div className="redCircle"></div>
            <div className="yellowCircle"></div>
            <div className="greenCircle"></div>
          </div>
          <div className="codeWrapper">{props.projeto.codigo}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="tituloProjeto">{props.projeto.titulo}</div>
        <div className="descricaoProjeto">{props.projeto.descricao}</div>
      </div>
    </div>
  );
}
