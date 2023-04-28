import React from "react";
import './CompHeader.css';
import BotaoMenu from "../BotaoMenu/BotaoMenu";

function CompHeader(props){
    return(
        <header>
            <BotaoMenu nome="Home"/>
            <BotaoMenu nome="Catalogo"/>
        </header>
    )
}

export default CompHeader;