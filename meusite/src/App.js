import React from "react";

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h4>Idade: {props.idade} anos</h4>
        </div>
        
    );
}



export default function App(){
    return(
        <div>
           <h1 style={{color:"red"}}>Conheça nossa equipe:</h1>
           <Equipe nome="Emerson" cargo="Front-End" idade="35"/>
           <Equipe nome="Carlos" cargo="Back-End" idade="40"/>
           <Equipe nome="Maria" cargo="Ful-stack" idade="29"/>
           <Equipe nome="Paulo" cargo="Ful-stack" idade="45"/>

        </div>
    );
}