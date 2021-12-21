import React from "react";
import "./Editor.css";

export default function Editor(props) {
  return (
    <>
      <div className="Editor" style={{ backgroundColor: props.corFundoEditor }}>
        <div className="editorTexto">
          <div className="circles">
            <div className="redCircle"></div>
            <div className="yellowCircle"></div>
            <div className="greenCircle"></div>
          </div>
          <div className="textarea" contentEditable="true">
            console.log("Digite seu código aqui!");
          </div>
        </div>
      </div>
      <input
        type="button"
        className="visualizarHighlight"
        value="Visualizar com o highlight"
      />
    </>
  );
}
