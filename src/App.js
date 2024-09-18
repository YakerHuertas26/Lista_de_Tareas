import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListadeTareas";

const App=() =>{
  // Del local storage guardo mis tareas para mostrarlas 
  const tareasIniciales= localStorage.getItem('tareas')?
  JSON.parse(localStorage.getItem('tareas'))
  : [];

  // datos de las tareas
  const [tareas,setTareas]= useState(tareasIniciales);

  // Mediante useEfect quiero mostrar mis tareas
  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas])

  // ++++++++Con mostrar tareas completadas
  // let mostrarTareaCompleta= '';
  // if (localStorage.getItem('estadoTareaCompleta')===null) {
  //   mostrarTareaCompleta=true;
  // } else{
  //   mostrarTareaCompleta= localStorage.getItem('estadoTareaCompleta')==='true';
  // }

  const [MostrarTareaCompletada,setMostrarTareaCompletada]= useState(true)

  // useEffect(()=>{
  //   localStorage.setItem('estadoTareaCompleta', JSON.stringify(MostrarTareaCompletada))
    
  // },[MostrarTareaCompletada])

return (
    <div className='contenedor'>
      <Header 
      tareaCompletada={MostrarTareaCompletada}
      setTareaCompletada={setMostrarTareaCompletada}/>
      
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas} setTareas={setTareas} MostrarTareaCompletada={MostrarTareaCompletada}/>
    </div>
  );
}

export default App;
