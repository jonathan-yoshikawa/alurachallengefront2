import React, { useRef } from "react";
import "./Editor.css";

import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";

export default function Editor(props) {
  const refCodeWrapper = useRef(null);

  function visualizarComHighlight() {
    let html = hljs.highlight(refCodeWrapper.current.firstChild.innerText, {
      language: props.linguagem,
    }).value;

    refCodeWrapper.current.firstChild.innerHTML = html;
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
          <div className="codeWrapper" ref={refCodeWrapper}>
            <code
              className={`preview hljs ${props.linguagem}`}
              contentEditable="true"
              aria-label="editor"
              suppressContentEditableWarning={true}
            >
              {"function foo() { return 'bar' }"}
            </code>
          </div>
        </div>
      </div>
      <input
        type="button"
        className="visualizarHighlight"
        value="Visualizar com o highlight"
        onClick={visualizarComHighlight}
      />
    </>
  );
}
