import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from './config/Fire';

function AgregarLaboratorio({history, recargar}) {
 
    const [nombre_Laboratorio, setNombre_laboratorio] = useState('');
    const [desc_Lab, setDesc_lab] = useState('');
    const [id_Lab, setId_lab] = useState('');

    const agregar_Laboratorio = async e => {
        e.preventDefault();
    
        if (nombre_Laboratorio==='' || desc_Lab==='' || id_Lab==='') {
           //setError(true);
            return;
        }
        //setError(false);
        try {
            firebase.firestore().collection('Laboratorio').add({
                desc_Lab,
                nombre_Laboratorio,
                id_Lab
            });
        } catch (error) {
            console.log(error);
        }
        
        recargar(true);
        history.push('/');
    }

    return (
        <div className="jumbotron mt-5">
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
        </div>
    )
}
export default withRouter(AgregarLaboratorio);