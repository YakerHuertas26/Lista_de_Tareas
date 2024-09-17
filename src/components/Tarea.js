import { useState } from "react";
import { FaCheckSquare,FaRegSquare } from "react-icons/fa";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const Tarea = ({tarea,tareaCompletada,setTareas,ListaTareas}) => {

    const [btnEdit,setBtnEdit]= useState(false)
    const [tareaInicial, setTareaInicual]= useState(tarea.description)

    const editar=()=>{
        setBtnEdit(!btnEdit)
    }
    const actualizarTarea=(id,e)=>{
        e.preventDefault();
        setTareas(ListaTareas.map((elemntos)=>{
            if (elemntos.id===id) {
                return {...elemntos,description:tareaInicial}
                
            }
            return elemntos
            })
        )
        setBtnEdit(!btnEdit)
    }
    
    return (
        
        <li className="lista-tareas__tarea">
            <span onClick={()=>tareaCompletada(tarea.id)}> 
                {tarea.state?<FaCheckSquare className="lista-tareas__icono list-tareas__icono-check" />
                :
                <FaRegSquare className="lista-tareas__icono list-tareas__icono-check"/>}
            </span>
            
            <span className="lista-tareas__texto">
            {btnEdit?
                <form action="" className="formulario-editar-tarea"
                onSubmit={(e)=>actualizarTarea(tarea.id,e)}>
                    <input type="text"
                        className="formulario-editar-tarea__input"
                        value={tareaInicial}
                        onChange={(e)=>setTareaInicual(e.target.value)}/>

                    <button type="submit" className="formulario-editar-tarea__btn">Actualizar</button>
                </form>
            :
            tarea.description}
            </span>
            <div className="lista-tareas__contenedor-botones">
                <FiEdit 
                className="lista-tareas__icono lista-tareas__icono-accion"
                onClick={editar}/>
            
                <MdDelete className="lista-tareas__icono lista-tareas__icono-accion " />
            </div>
        </li>
    );
}

export default Tarea;