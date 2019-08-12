import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';
import firebase from './config/Fire';

function AgregarLaboratorio({history, recargar, auth}) {
 
    const [nombre_Laboratorio, setNombre_laboratorio] = useState('');
    const [desc_Lab, setDesc_lab] = useState('');
    const [id_Lab, setId_lab] = useState('');
    const [ setError] = useState(false);

    const agregar_Laboratorio = async e => {
        e.preventDefault();
    
        if (nombre_Laboratorio==='' || desc_Lab==='' || id_Lab==='') {
           setError(true);
            return;
        }
        setError(false);
        try {
            firebase.firestore().collection('Laboratorio').add({
                desc_Lab,
                nombre_Laboratorio,
                id_Lab
            }).then(
                Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Bien',
                text: 'Laboratorio creado con exito!',
                showConfirmButton: false,
                timer: 1500
              }));
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo!'
            })
        }
        
        recargar(true);
        history.push('/');
    }

    return (
        <div className="jumbotron mt-5">
            {auth?(
                <div className="col-md-8 mx-auto ">
                <h1 className="text-center"> + Laboratorio</h1>

             

                <form className="mt-5" onSubmit={agregar_Laboratorio}>

                    <div className="form-group">
                        <label>Nombre Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombrelab"
                            placeholder="Nombre Laboratorio"
                            onChange={e =>setNombre_laboratorio(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción del laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder="Descripción"
                            onChange={e =>setDesc_lab(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Id Laboratorio</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3" 
                            onChange={e => setId_lab(e.target.value)}></textarea>
                        
                    </div>
                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Laboratorio" />
                </form>
            </div>
          ):<h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">Inicia sesion, para ingresar a este modulo.</h1>}

        </div>
    )
}
export default withRouter(AgregarLaboratorio);