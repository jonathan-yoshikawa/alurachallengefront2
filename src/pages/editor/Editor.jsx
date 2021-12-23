import React, { useRef, useState } from "react";
import "./Editor.css";

import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";

import DetalhesProjeto from "../../components/detalhes-projeto/DetalhesProjeto";

export default function Editor(props) {
  const alterarCorFundoEditor = (cor) => {
    setCorFundoEditor(cor);
  };

  const [corFundoEditor, setCorFundoEditor] = useState("#6BD1FF");
  const [linguagem, setLinguagem] = useState("javascript");

  const mudarLinguagem = (option) => {
    setLinguagem(option.value);
  };

  const refCodeWrapper = useRef(null);

  function visualizarComHighlight() {
    let html = hljs.highlight(refCodeWrapper.current.firstChild.innerText, {
      language: linguagem,
    }).value;

    refCodeWrapper.current.firstChild.innerHTML = html;
  }

  return (
    <div className="row">
      <div className="col-lg-8 ps-lg-0 pe-lg-4">
        <div className="Editor " style={{ backgroundColor: corFundoEditor }}>
          <div className="editorTexto">
            <div className="circles">
              <div className="redCircle"></div>
              <div className="yellowCircle"></div>
              <div className="greenCircle"></div>
            </div>
            <div className="codeWrapper" ref={refCodeWrapper}>
              <code
                className={`preview hljs ${linguagem}`}
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
      </div>
      <div className="col-lg-4 m-lg-0 p-lg-0">
        <DetalhesProjeto
          alterarCorFundoEditor={alterarCorFundoEditor}
          defaultCorFundoEditor={corFundoEditor}
          mudarLinguagem={mudarLinguagem}
        />
      </div>
    </div>
  );
}
