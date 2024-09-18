import './../App.css';
import Tarea from './Tarea';

const ListaTareas = ({tareas,setTareas,MostrarTareaCompletada}) => {

    const tareaCompletada=(id)=>{
            setTareas(tareas.map((element)=>{
                if (element.id===id) {
                    return {...element, state: !element.state}
                }
                return element
            })
        )
    }
    const actualizarTarea=(id,nuevaTarea)=>{
        setTareas(tareas.map((element)=>{
            if (element.id===id) {
                return {...element, description: nuevaTarea}
            }
            return element
            })
        )
    }

    const borrar=(id)=>{
        setTareas(
            tareas.filter((element)=>{
                if (element.id !==id) {
                    return element;
                }
                return
            })
        )
        
    }  
    
    return (  
        <ul className='lista-tareas'>
            {
                tareas.length>0 ?
                tareas.map((element)=>{
                    if (MostrarTareaCompletada) {
                        return <Tarea 
                                key={element.id}
                                tarea={element}
                                tareaCompletada={tareaCompletada}
                                actualizarTarea={actualizarTarea}
                                borrar={borrar}/>
                    }
                    else if (!element.state) {
                        return <Tarea 
                                key={element.id}
                                tarea={element}
                                tareaCompletada={tareaCompletada}
                                actualizarTarea={actualizarTarea}
                                borrar={borrar}/>
                    }
                    return
                })
                :
                <div className="lista-tareas__mensaje">NO hay tareas</div>
                
            }
        
        </ul>
    );
}

export default ListaTareas;