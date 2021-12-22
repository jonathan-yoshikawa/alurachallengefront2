import { useState } from "react";
import MyInput from "../layout/MyInput";
import MyTextArea from "../layout/MyTextArea";

import "./DetalhesProjeto.css";
import MySelect from "../layout/mySelect/MySelect";

export default function DetalhesProjeto(props) {
  const [linguagem, setLinguagem] = useState({});
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
  ];

  return (
    <div className="MenuLateralDireito">
      <h2 className="title">Seu projeto</h2>
      <MyInput placeholder="Nome do seu projeto" />
      <div className="my-textarea">
        <MyTextArea placeholder="Descrição do seu projeto" />
      </div>
      <h2 className="title">Personalização</h2>
      <MySelect options={options} setLinguagem={setLinguagem} />
      <input
        className="colorPicker"
        type="color"
        defaultValue={props.defaultCorFundoEditor}
        onChange={(e) => props.alterarCorFundoEditor(e.target.value)}
      />
      <input className="myButton mb-5" type="button" value="Salvar projeto" />

      {/* <div>{`${linguagem.name || ""} ${linguagem.value || ""}`}</div> */}
    </div>
  );
}
