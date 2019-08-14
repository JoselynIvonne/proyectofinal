import React, { Fragment } from 'react';
import ListadoHorarios from './ListadoHorarios';
import { Link } from 'react-router-dom';

 function Horarios({horarios, recargar, auth}) {
    return (
        <Fragment>
        <div className="jumbotron mt-5">
            {auth ?(
            <div>
                 <h1 className="text-center">Horarios</h1>
                    <div className="col-md-12 text-center">
                        <Link to={`/nuevo-horario`} className="btn btn-success mr-2">Agregar horario</Link>
                    </div>
                    <ul className="list-group mt-5">
                        {horarios.map(horario => (
                            <ListadoHorarios
                                key={horario.id_Horario}
                                horario={horario}
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
export default Horarios;