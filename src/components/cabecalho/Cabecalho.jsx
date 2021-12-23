import React, { useState } from "react";
import "./Cabecalho.css";

import logo from "../../assets/images/logo.png";
import fotoPerfil from "../../assets/images/foto.jpg";
import barsIcon from "../../assets/images/icons/3bars.png";
import closeMenuIcon from "../../assets/images/icons/x.svg";
import MyInput from "../layout/MyInput";
import Perfil from "../layout/perfil/Perfil";
import MenuMobile from "../menu-mobile/MenuMobile";

export default function Cabecalho() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const buttonMenuClicked = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const itemMenuSelecionado = () => {
    setMostrarMenu(false);
  };
  return (
    <>
      <div className="Cabecalho row mt-3">
        <div className="logo col-3">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="barra-pesquisa pe-4 col-6 d-none d-lg-flex justify-content-center">
          <MyInput placeholder="Busque por algo" />
        </div>
        <div className="perfil col-3 d-none d-lg-flex justify-content-end">
          <Perfil
            src={fotoPerfil}
            link="https://www.linkedin.com/in/jonathan-yoshikawa-58249a182/"
            nome="Jonathan"
          />
        </div>
        <div className="icon-menu col-9 d-flex d-lg-none justify-content-end">
          <span className="icon-menu-wrapper" onClick={buttonMenuClicked}>
            <img
              src={mostrarMenu ? closeMenuIcon : barsIcon}
              alt="perfil"
            ></img>
          </span>
        </div>
      </div>
      <div
        className={`menuMobile d-lg-none justify-content-end ${
          mostrarMenu ? "mostrarMenu" : ""
        }`}
      >
        <MenuMobile itemMenuSelecionado={itemMenuSelecionado} />
      </div>
    </>
  );
}
