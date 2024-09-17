import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListadeTareas";

const App=() =>{
  // datos de las tareas
  const [tareas,setTareas]= useState([
    {
      id:1,
      description:'Practicar JavaScript',
      state: false
    },
    {
      id:2,
      description:'Practicar React-js',
      state: true
    }
  ]) 

  return (
    <div className='contenedor'>
      <Header/>
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas} setTareas={setTareas}/>
    </div>
  );
}

export default App;
