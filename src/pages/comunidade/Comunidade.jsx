import React from "react";
import CardProjeto from "../../components/card-projeto/CardProjeto";
import ProjetoService from "../../services/ProjetoService";

export default function Comunidade() {
  const projetos = ProjetoService.recuperarProjetos();

  return (
    <div className="Comunidade row">
      {projetos.map((projeto) => {
        return (
          <div className="col-lg-6 ps-lg-2 pe-lg-2 pb-4" key={projeto.id}>
            <CardProjeto projeto={projeto} />
          </div>
        );
      })}
    </div>
  );
}
