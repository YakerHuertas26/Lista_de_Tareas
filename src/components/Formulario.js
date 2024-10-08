import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({tareas,setTareas}) => {
    
    const [nuevaTarea,setNuevaTarea]= useState('')
    

    const registarTarea=(e)=>{
        e.preventDefault();
        nuevaTarea.length>0 ?
        setTareas([
            ...tareas,
            {
                id:uuidv4(),
                description:nuevaTarea,
                state:false
            }
        ])
        :
        setTareas(tareas);
        setNuevaTarea('')
    }
    
    
    return (  
        <form className="formulario" action="" onSubmit={registarTarea}>
            <input 
            type="text" 
            className="formulario__tareas" 
            placeholder="Escribe una tarea..."
            onChange={(e)=>setNuevaTarea(e.target.value)}
            value={nuevaTarea}
            />

            <button 
            type="submit"
            className="formulario__btn"><FaPlusSquare className="formulario__icono-btn" /></button>
        </form>
    );
}

export default Formulario;