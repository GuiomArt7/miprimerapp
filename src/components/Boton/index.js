import React, {useState} from "react"
import "./styles.css";
export function Boton({ text, onClick }){
    return <button className="boton-componente" onClick={onClick}>{text}</button>
}