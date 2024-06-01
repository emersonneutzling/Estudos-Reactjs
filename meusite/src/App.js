import React from "react";

const BemVindo = (props) => {
    return(
        <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}


export default function App(){
    return(
        <div>
            Olá Mundo!
            <BemVindo nome="Lucas" idade="15"/>
            <BemVindo nome="Amanda" idade="35"/>
            
        </div>
    );
}