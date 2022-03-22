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
  const [data, setData]= useState([null]);
  //Función FETCH: Llama a una API(BACKEND)
  //FUNCIÓN DE FLECHA: nombreFunción = () => {}

  //Async: función asíncrona
  //Await: esperar
  const getUsers = async()=>{
    try{
      //Empezamos la petición y mostramos la pantalla de carga
      //Si teníamos algún error previo lo quitamos
      setError(false); 
      //Activamos la pantalla de carga
      setLoading(true); 
      //***Todo el código que puede romperse o mandar a un error

      //Llamar al backend o API
      let response = await fetch(urlApi); 

      //Recabar la info
      let data = await response.json(); 

      //Si todo va bien y no hubo error, quitamos la pantalla de carga y guardamos la data
      setLoading(false);
      setData(data);

     //fetch(urlApi).then(response=>{
     //  response.json();
     //})
     //.then((data) => {
     //  console.log(data);
     //})
    }catch(error){
      //Es el código que se ejecutará cuando ocurra algún error
      setLoading(false)
      setError(true);
    }
  };

  const returnUsers = ()=> {
    return(
      <div className="users__box"> 
      {data?.map((item, index)=> (
        <div className="user__card" key={index}>
          <span>{item.name}</span>
        </div>
      ))}
      </div>
    )
  }
  //useEffect(()=>{
  //  getUsers();
  //},[])

  return (
  <div className="App">
      <Boton text="Cargar datos" onClick={getUsers}/>
      {loading === true && (
      <img src={"https://c.tenor.com/XgaU95K_XiwAAAAC/kermit-typing.gif"} 
      alt= "Cargando" />
      )}
      {data !== null && (
      <img src={"https://c.tenor.com/kWLw9xk_V-kAAAAC/kermit-smiling.gif"} 
      alt= "Todo salió bien" />
      )}
      {error === true && (
      <img src={"https://c.tenor.com/lpfGANy32AcAAAAC/kermit-kermit-the-frog.gif"} 
      alt= "Error" />
      )}
      {returnUsers()}
  </div>
  );
}

export default App;
