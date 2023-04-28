import React from "react";
import "./Botao.css";

function Botao(props){
    return(
        <button id="btnMenu">
            {props.nome}
        </button>
    )
}

export default Botao;