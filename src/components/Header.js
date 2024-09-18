import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import './../App.css'
const Header = ({tareaCompletada,setTareaCompletada}) => {

    return ( 
        <header className="header">
            <h1 
            className="header__titulo"
            >Lista de Tareas</h1>
                {
                tareaCompletada?
                    <button 
                    className="header__btn"
                    onClick={()=>setTareaCompletada(!tareaCompletada)}>No mostrar completadas <AiFillEyeInvisible className="header__icono-btn" 
                    /></button>
                :
                <button 
                className="header__btn"
                onClick={()=>setTareaCompletada(!tareaCompletada)}>Mostrar completadas <IoEyeSharp className="header__icono-btn" 
                /></button>
                }
                
            
        </header>
    );
}

export default Header;