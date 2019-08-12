import React from 'react';
import EliminarLabs from './EliminarLabs';

const ListLab = ({laboratorios, recargar, auth}) => {
    return (
        <div className="jumbotron mt-5">
            {auth ? (
            <div>
                <legend className="mb-4 text-center text-uppercase font-weight-bold" >Lista de Laboratorios</legend>
                <ul className="list-group mt-5">
                    {laboratorios.map(laboratorio => (
                        <EliminarLabs key={laboratorio.id} laboratorio={laboratorio} recargar={recargar} />
                    ))}
                </ul>
            </div>
            ): <h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">nv</h1>}
        </div>
    )
}
export default ListLab;