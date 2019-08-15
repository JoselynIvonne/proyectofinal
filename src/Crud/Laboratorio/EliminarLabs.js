import React,{fragment} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../config/Fire';

const EliminarLabs = ({Laboratorio}) => {
    const eliminarLaboratorio = id_Lab =>{
        //Eliminar los registros
        //
    }
    return (
        <li className="list-group-item d-flex justify-content-between alig-items-center">
            <p>
                {Laboratorio.nombre_Laboratorio} <br></br>
                {Laboratorio.desc_Lab}<br></br>
                {Laboratorio.marcador}<br></br>
            </p>
            <div className="">
            <Link to={`/Laboratorio/editar/${Laboratorio.id_Lab}`} className="btn btn-success mr-2">Ver </Link>
            <button className="btn btn-danger" type="button" onClick={()=>eliminarLaboratorio(Laboratorio.id_Lab)}>Eliminar &#88;</button>
            </div>
                
          
        </li>
    )
}

export default EliminarLabs;
