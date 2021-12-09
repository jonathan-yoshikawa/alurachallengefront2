import React from "react";
import "./cabecalho.css";

import logo from "../../assets/images/logo.png";
import fotoPerfil from "../../assets/images/foto-perfil.png";

export default function Cabecalho() {
  return (
    <div className="Cabecalho row">
      <div className="logo col-2">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="barra-pesquisa col-8 d-none d-md-flex justify-content-center">
        <input placeholder="Busque por algo"></input>
      </div>
      <div className="perfil col-2 d-none d-md-flex justify-content-end">
        <img src={fotoPerfil} alt="perfil"></img>
      </div>
    </div>
  );
}
