import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import {Boton} from "./components/Boton";
import './App.css';

let urlApi = "https//jsonplaceholder.typicode.com/users";

//Función que renderiza nuestra app
function App() {
  //Cargando la petición a la API
  const [loading, setLoading] = useState(false);
  //Error
  const[error, setError]= useState(false);
  //Data
  const [data, setData]= useState([]);
  //Función FETCH: Llama a una API(BACKEND)
  //FUNCIÓN DE FLECHA: nombreFunción = () => {}

  //Async: función asíncrona
  //Await: esperar
  const getUsers = async()=>{
    try{
      //Todo el código que puede romperse o mandar a un error
      let response = await fetch(urlApi)
    }catch(error){
      //Es el código que se ejecutará cuando ocurra algún error
      console.log(error)
    }
  };
  useEffect(()=>{
    getUsers();
  },[])

  return (
  <div className="App">
      <Boton text="Llammar a API"/>
  </div>
  );
}

export default App;
