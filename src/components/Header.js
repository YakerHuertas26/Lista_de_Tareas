import { AiFillEyeInvisible } from "react-icons/ai";
import './../App.css'
const Header = () => {
    return ( 
        <header className="header">
            <h1 className="header__titulo">Lista de Tareas</h1>
            <button className="header__btn">  No mostrar completadas <AiFillEyeInvisible className="header__icono-btn" /></button>
        </header>
    );
}

export default Header;