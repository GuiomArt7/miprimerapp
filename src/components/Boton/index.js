import React, {useState} from "react"
import "./styles.css";
export function Boton(){
    const [textoBoton, setTextoBoton] = useState("Llamar API");
    return(
        <button
            className="boton-componente"
            onClick={()=>{
                setTextoBoton("Soy Laila");
            }}
            >
            {textoBoton}
        </button>
    )
}