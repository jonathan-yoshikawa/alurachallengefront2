import React, { useState, useRef } from "react";
import "./Editor.css";

import Highlight from "react-highlight";

export default function Editor(props) {
  const [highlight, setHighlight] = useState(false);
  const [textCode, setTextCode] = useState("function foo() { return 'bar' }");
  const refCodeWrapper = useRef("");

  function visualizarComHighlight() {
    console.log(refCodeWrapper);
    setTextCode(refCodeWrapper.current.textContent);
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
          <div
            className="codeWrapper"
            contentEditable={highlight ? "false" : "true"}
            ref={refCodeWrapper}
          >
            {highlight ? (
              <Highlight language="javascript">{textCode}</Highlight>
            ) : (
              `${textCode}`
            )}
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
