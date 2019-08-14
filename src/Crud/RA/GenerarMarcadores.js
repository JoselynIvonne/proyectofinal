import React,{fragment} from 'react';

const GenerarMarcadores = ({auth}) => {
    
    return (
        <fragment>
        <h1 className="alert alert-title text-center">GENERADOR DE MARCADORES</h1>
        
        <div className="container">
            {auth ?(
            <div>
                <div className="embed-responsive embed-responsive-1by1 mt-5">
                    <iframe title="marcadores" src="https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html" frameBorder="0" 
                        className="embed-responsive-item"
                        allowtransparency="true"
                        scrolling="no" 
                    ></iframe>
                </div>
                <p className="alert alert-info text-center">REALIDAD AUMENTADA - PUCE SE</p>
            </div>
            ): <h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">Iniciar Sesion, para ver este módulo.</h1>}
        </div>
        </fragment>
    )
}
export default GenerarMarcadores;