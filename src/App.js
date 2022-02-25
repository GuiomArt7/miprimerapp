import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import {Boton} from "./components/Boton";
import './App.css';

function App() {
  //* Use state
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  //*Use Effect
  useEffect(()=>{
    setContador(0);
  }, [nombre]);

  return (
  <div className="App">
      <div>
        El valor de mi contador es: {contador}
      </div>
      <button
      onClick={()=>{
        setContador(contador + 1);
      }}>Aumentar contador
      </button>
      <button
      onClick={()=>{
        setContador(contador - contador);
      }}>Iniciar cuenta desde cero
      </button>
      <button
      onClick={()=>{
        setContador(contador - 1);
      }}>Cuenta regresiva
      </button>
      <input
        value={nombre}
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        placeholder="Ingresa tu nombre"
      />
      <span>Mi nombre es: {nombre}</span>
      <Boton />
  </div>
  );
}

export default App;
