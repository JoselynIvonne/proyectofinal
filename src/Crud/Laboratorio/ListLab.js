import React,{Fragment} from 'react';
import EliminarLabs from './EliminarLabs';
import {Link} from 'react-router-dom';

//Permite mostrar en una lista los laboratorios ya ingresados 
const ListLab = ({laboratorios, recargar, auth}) => {
    return (
        <Fragment>
        <div className="jumbotron mt-5">
            {auth ? ( //Modulo habilidato solo para los usuarios autentificados.
            <div>
                <h1 className="text-center">Laboratorios Actualizados</h1>
                    <div className="col-md-12 text-center">
                        <Link to={`/nuevo-laboratorio`} className="btn btn-success mr-2">Agregar laboratorio</Link>
                    </div>                <ul className="list-group mt-5">
                    {laboratorios.map(laboratorios => (
                        <EliminarLabs 
                        key={laboratorios.id_Laboratorio} 
                        laboratorios={laboratorios} 
                        recargar={recargar} 
                        />
                    ))}
                </ul>
            </div>
            ) : <h1 className="text-center">Página no disponible</h1>} 
            </div>
        </Fragment>
    )
}
export default ListLab;