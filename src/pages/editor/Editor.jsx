import React, { useState } from "react";
import "./Editor.css";

export default function Editor(props) {
  const [highlight, setHighlight] = useState(false);

  function visualizarComHighlight() {
    setHighlight(!highlight);
  }

  return (
    <>
      <div className="Editor" style={{ backgroundColor: props.corFundoEditor }}>
        <div className="editorTexto">
          <div className="circles">
            <div className="redCircle"></div>
            <div className="yellowCircle"></div>
            <div className="greenCircle"></div>
          </div>
          <div className="textarea">
            <pre>
              <code
                class="language-javascript"
                contenteditable={highlight ? "false" : "true"}
                aria-label="Editor de código"
              >
                console.log("Digite seu código aqui!");
              </code>
            </pre>
          </div>
        </div>
      </div>
      <input
        type="button"
        className={`visualizarHighlight ${
          highlight ? "visualizarHighlightClicked" : ""
        }`}
        value={highlight ? "Voltar a editar" : "Visualizar com o highlight"}
        onClick={visualizarComHighlight}
      />
    </>
  );
}
