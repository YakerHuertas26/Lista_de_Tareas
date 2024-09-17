import './../App.css';
import Tarea from './Tarea';

const ListaTareas = ({tareas,setTareas}) => {

    
    return (  
        <ul className='lista-tareas'>
            {
                tareas.length>0 ?
                tareas.map((element)=>{
                    return <Tarea 
                            key={element.id}
                            tarea={element}
                            setTareas={setTareas}/>
                })
                :
                <div className="lista-tareas__mensaje">NO hay tareas</div>
            }
        
        </ul>
    );
}
 
export default ListaTareas;