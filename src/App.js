import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import {Boton} from "./components/Boton";
import './App.css';

let urlApi = "https://jsonplaceholder.typicode.com/users";

//Función que renderiza nuestra app
function App() {
  //Cargando la petición a la API
  const [loading, setLoading] = useState(false);
  //Error
  const[error, setError]= useState(true);
  //Data
  const [data, setData]= useState([]);
  //Función FETCH: Llama a una API(BACKEND)
  //FUNCIÓN DE FLECHA: nombreFunción = () => {}

  //Async: función asíncrona
  //Await: esperar
  const getUsers = async()=>{
    try{
      //Empezamos la petición y mostramos la pantalla de carga
      setError(false);
      setLoading(true);
      //Todo el código que puede romperse o mandar a un error
      let response = await fetch(urlApi);
      let data = await response;
      //Si todo va bien y no hubo error, quitamos la pantalla de carga y guardamos la data
      setLoading(false);
      setData(data);
    }catch(error){
      //Es el código que se ejecutará cuando ocurra algún error
      setLoading(false)
      setError(true);
    }
  };
  useEffect(()=>{
    getUsers();
  },[])

  return (
  <div className="App">
      {loading === true && (
      <img src={"https://c.tenor.com/XgaU95K_XiwAAAAC/kermit-typing.gif"} 
      alt= "Cargando" />
      )}
      {data && (
      <img src={"https://c.tenor.com/kWLw9xk_V-kAAAAC/kermit-smiling.gif"} 
      alt= "Todo salió bien" />
      )}
      {error === true && (
      <img src={"https://c.tenor.com/lpfGANy32AcAAAAC/kermit-kermit-the-frog.gif"} 
      alt= "Error" />
      )}
  </div>
  );
}

export default App;
