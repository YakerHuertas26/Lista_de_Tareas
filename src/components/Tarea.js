import { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const Tarea = ({tarea,setTareas}) => {

    const [btnEdit,setBtnEdit]= useState(false)
    const [tareaInicial, setTareaInicual]= useState(tarea.description)

    const editar=()=>{
        setBtnEdit(!btnEdit)
    }
    const actualizarTarea=(e)=>{
        e.preventDefault();
        console.log('actualizando......');
        
    }
    
    return (
        
        <li className="lista-tareas__tarea">
            <FaCheckSquare className="lista-tareas__icono list-tareas__icono-check" />
            
            <span className="lista-tareas__texto">
            {btnEdit?
                <form action="" className="formulario-editar-tarea"
                onSubmit={actualizarTarea}>
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