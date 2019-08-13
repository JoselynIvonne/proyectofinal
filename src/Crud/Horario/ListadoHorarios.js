import React from 'react';
import { Link } from 'react-router-dom';
//import firebase from './config/fire';

const ListadoHorarios= ({Horario}) => {
    const eliminarHorario = id_Horario =>{
        //Eliminar los registros
    
        
    }
    return (
        <li  className="list-group-item d-flex justify-content-between align-items-center">
             <p>
                {Horario.nombre_Docente}<br></br>
                {Horario.materia}<br></br>
                {Horario.laboratorio}<br></br>
                Hora inicio: {Horario.hora_Inicio} Hora fin: {Horario.hora_Fin}
                {Horario.especialidad}<br></br>
                {Horario.dia}<br></br>
             </p>
             <div className="">
                 <Link to={`/Horarios/detalle/${Horario.id_Horario}`} className="btn btn-success mr-2" >Ver <span role="img" aria-label="sheep">👁</span></Link>
                <Link to={`/Horarios/editar/${Horario.id_Horario}`} className="btn btn-success mr-2" >Editar <span role="img" aria-label="sheep" >🔧</span></Link>
                <button className="btn btn-danger" type="button" onClick={()=>eliminarHorario(Horario.id_Horario)}>Eliminar &#88;</button>
            </div>
        </li>
    )
}
export default ListadoHorarios;