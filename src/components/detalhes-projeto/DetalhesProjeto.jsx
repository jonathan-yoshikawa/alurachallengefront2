import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyInput from "../layout/MyInput";
import MyTextArea from "../layout/MyTextArea";

import "./DetalhesProjeto.css";
import MySelect from "../layout/mySelect/MySelect";
import ProjetoService from "../../services/ProjetoService";

export default function DetalhesProjeto(props) {
  let navigate = useNavigate();
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
  ];

  const [formSubmited, setFormSubmited] = useState(false);
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricaoProjeto, setDescricaoProjeto] = useState("");

  function mudarLinguagem(option) {
    props.mudarLinguagem(option);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmited(true);
    if (!nomeProjeto || !descricaoProjeto) return;
    ProjetoService.adicionarProjeto({
      codigo: `teste`,
      titulo: nomeProjeto,
      cor: "blue",
      descricao: descricaoProjeto,
      nome: "Jonathan",
      countComentarios: 0,
      countLikes: 0,
    });
    navigate("/comunidade");
  }

  return (
    <div className="DetalhesProjeto">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Seu projeto</h2>
        <MyInput
          placeholder="Nome do seu projeto"
          value={nomeProjeto}
          alterarNome={(nome) => setNomeProjeto(nome)}
        />
        {formSubmited && !nomeProjeto ? (
          <div className="error">Preencher o campo Nome do Projeto </div>
        ) : (
          ""
        )}

        <div className="my-textarea">
          <MyTextArea
            placeholder="Descrição do seu projeto"
            value={descricaoProjeto}
            alterarDescricao={(descricao) => setDescricaoProjeto(descricao)}
          />
          {formSubmited && !descricaoProjeto ? (
            <div className="error">Preencher o campo Descrição do Projeto </div>
          ) : (
            ""
          )}
        </div>
        <h2 className="title">Personalização</h2>
        <MySelect options={options} mudarLinguagem={mudarLinguagem} />
        <input
          className="colorPicker"
          type="color"
          defaultValue={props.defaultCorFundoEditor}
          onChange={(e) => props.alterarCorFundoEditor(e.target.value)}
        />
        <input className="myButton mb-5" type="submit" value="Salvar projeto" />
      </form>
    </div>
  );
}
