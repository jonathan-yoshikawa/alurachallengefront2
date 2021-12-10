import React from "react";
import "./Cabecalho.css";

import logo from "../../assets/images/logo.png";
import fotoPerfil from "../../assets/images/foto-perfil.png";
import MyInput from "../layout/MyInput";

export default function Cabecalho() {
  return (
    <div className="Cabecalho row mt-3">
      <div className="logo col-2">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="barra-pesquisa col-7 d-none d-lg-flex justify-content-center">
        <MyInput placeholder="Busque por algo" />
      </div>
      <div className="perfil col-3 d-none d-lg-flex justify-content-end">
        <img src={fotoPerfil} alt="perfil"></img>
      </div>
    </div>
  );
}
