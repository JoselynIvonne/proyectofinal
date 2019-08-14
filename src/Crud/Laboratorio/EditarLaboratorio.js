import React,{useState, useRef} from 'react';
import Alerta from '../Alerta';

import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
import firebase from '../config/Fire';

function EditarLaboratorio({lab, history}) {

    //Agregando los ref
    const nombreLabRef = useRef('');
    const descripcionlabRef = useRef('');
    const marcadorRef = useRef('');

    const [alerta, setError] = useState(false);

    const editarLaboratorio = async e =>{
        e.preventDefault();

        //validacion 
        const nuevoNombreLab = nombreLabRef.current.value,
               nuevoDescripcionlab = descripcionlabRef.current.value,
               nuevoMarcador = marcadorRef.current.value;

        if (nuevoNombreLab==='' || nuevoDescripcionlab==='' || nuevoMarcador==='') {
            setError(true);
            return;
        }
        setError(false);

        const editar = {
            nombre_Laboratorio: nuevoNombreLab,
            desc_Lab : nuevoDescripcionlab,
            marcador_Lab : nuevoMarcador
        }
        
        try {
            //Actualizando los datos en firebase
            firebase.firestore().collection('Laboratorio').doc(lab.id_Lab).update(editar)
            .then(Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Bien',
                text: 'Laboratorio editado con exito!',
                showConfirmButton: false,
                timer: 1500
            }))
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo!'
            })
        }
        //Redirigir al usuario 
        history.push('/laboratorios');
    }
    return (
        <div className="jumbotron mt-5">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Editar Laboratorio</h1>

                {(alerta) ? <Alerta mensaje='Todos los campos son obligatorios' /> : null}

                <form className="mt-5" onSubmit={editarLaboratorio}>

                    <div className="form-group">
                        <label>Nombre Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombrelab"
                            placeholder="Nombre Laboratorio"
                            ref={nombreLabRef}
                            defaultValue={lab.nombreLab}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción del laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder="Descripción"
                            ref={descripcionlabRef}
                            defaultValue={lab.descripcionLab}
                        />
                    </div>

                    <div className="form-group">
                        <label>Archivo .patt</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3" 
                            ref={marcadorRef}
                            defaultValue={lab.patt}></textarea>
                        
                    </div>
                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Laboratorio" />
                </form>
            </div>
        </div>
    )
}
export default withRouter(EditarLaboratorio);