import React from "react";
import "./MenuLateral.css";

import { NavLink } from "react-router-dom";

import editor from "../../assets/images/icons/editor.svg";
import comunidade from "../../assets/images/icons/comunidade.svg";

export default function MenuLateral() {
  return (
    <div className="MenuLateral">
      <h2 className="title">Menu</h2>
      <ul>
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
    </div>
  );
}
