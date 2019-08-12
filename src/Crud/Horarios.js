import React from 'react';
import ListadoHorarios from './ListadoHorarios';

export default function Horarios({horarios, recargar, auth}) {
    return (
        <div className="jumbotron mt-5">
            {auth ?(
            <div>
                <legend className="mb-4 text-center text-uppercase font-weight-bold" >Listado Horarios</legend>
                <ul className="list-group mt-5">
                    {horarios.map(Horarios => (
                        <ListadoHorarios  key={Horarios.id_Horario} horarios={horarios} recargar={recargar} />
                    ))}
                </ul>
            </div>
            ): <h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">No v.</h1>}
        </div>
    )
}
