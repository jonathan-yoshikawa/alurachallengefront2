import React, { useState } from "react";
import "./CardProjeto.css";

import comentarioIcon from "../../assets/images/icons/comentario.svg";
import heartIcon from "../../assets/images/icons/heart.svg";
import redHeartIcon from "../../assets/images/icons/red_heart.svg";
import Perfil from "../layout/perfil/Perfil";
import fotoPerfil from "../../assets/images/foto.jpg";

export default function CardProjeto(props) {
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(props.projeto.countLikes);

  const heartClicked = () => {
    like ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
    setLike(!like);
  };

  return (
    <div className="CardProjeto">
      <div
        className="codigoWrapper"
        style={{ backgroundColor: props.projeto.cor }}
      >
        <div className="editorTexto">
          <div className="circles">
            <div className="redCircle"></div>
            <div className="yellowCircle"></div>
            <div className="greenCircle"></div>
          </div>
          <div className="codeWrapper">
            <code className="preview">{props.projeto.codigo}</code>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="tituloProjeto">{props.projeto.titulo}</div>
        <div className="descricaoProjeto">{props.projeto.descricao}</div>
        <div className="detalhesProjeto">
          <div>
            <img
              src={comentarioIcon}
              alt="comentarioIcon"
              className="ms-2 me-2"
            />
            {props.projeto.countComentarios}
          </div>
          <div className="likeCount" onClick={heartClicked}>
            <img
              src={like ? redHeartIcon : heartIcon}
              alt="likeIcon"
              className="ms-3 me-2"
            />
            {countLike}
          </div>
          <div className="ms-auto">
            <Perfil
              src={fotoPerfil}
              link="https://www.linkedin.com/in/jonathan-yoshikawa-58249a182/"
              nome={props.projeto.nome}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
