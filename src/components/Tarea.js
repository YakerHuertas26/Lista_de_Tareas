import { FaCheckSquare } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const Tarea = ({tarea}) => {
    return (
        
        <li className="lista-tareas__tarea">
            <FaCheckSquare className="lista-tareas__icono list-tareas__icono-check" />
            <p className="lista-tareas__texto">{tarea.description}</p>
            <div className="lista-tareas__contenedor-botones">
                <FiEdit 
                className="lista-tareas__icono lista-tareas__icono-accion" />
                <MdDelete className="lista-tareas__icono lista-tareas__icono-accion " />
            </div>
        </li>
    );
}

export default Tarea;