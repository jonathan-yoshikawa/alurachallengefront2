import React from "react";
import "./MenuMobile.css";

import { NavLink } from "react-router-dom";

import fotoPerfil from "../../assets/images/foto.jpg";
import editor from "../../assets/images/icons/editor.svg";
import comunidade from "../../assets/images/icons/comunidade.svg";
import Perfil from "../layout/perfil/Perfil";

export default function MenuMobile(props) {
  return (
    <div className="MenuMobile">
      <h2 className="title">Menu</h2>
      <ul onClick={props.itemMenuSelecionado}>
        <li>
          <NavLink to="/" activeclassname="active">
            <div className="itemMenuIcon">
              <img src={editor} alt="editor" />
            </div>
            <span className="itemMenuText"> Editor de código </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/comunidade" activeclassname="active">
            <div className="itemMenuIcon">
              <img src={comunidade} alt="comunidade" />
            </div>
            <span className="itemMenuText"> Comunidade </span>
          </NavLink>
        </li>
      </ul>
      <hr className="mt-4 mb-4" />
      <Perfil
        src={fotoPerfil}
        link="https://www.linkedin.com/in/jonathan-yoshikawa-58249a182/"
        nome="Jonathan"
      />
    </div>
  );
}
