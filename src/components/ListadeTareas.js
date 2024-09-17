import './../App.css';
import Tarea from './Tarea';

const ListaTareas = ({tareas,setTareas}) => {
 
    const tareaCompletada=(id)=>{
            setTareas(tareas.map((element)=>{
                if (element.id===id) {
                    return {...element, state: !element.state}
                }
                return element
            })
        )
    }
    
    
    return (  
        <ul className='lista-tareas'>
            {
                tareas.length>0 ?
                tareas.map((element)=>{
                    return <Tarea 
                            key={element.id}
                            tarea={element}
                            setTareas={setTareas}
                            tareaCompletada={tareaCompletada}
                            ListaTareas={tareas}
                            />
                })
                :
                <div className="lista-tareas__mensaje">NO hay tareas</div>
            }
        
        </ul>
    );
}
 
export default ListaTareas;