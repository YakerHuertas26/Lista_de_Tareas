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
  ]); 

  const [MostrarTareaCompletada,setMostrarTareaCompletada]= useState(true)

console.log(MostrarTareaCompletada);

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
