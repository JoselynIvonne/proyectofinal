import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../config/Fire';
import Alerta from '../Alerta';

//Permite agregar un nuevo laboratorio.
function AgregarLaboratorio({history, carga, auth}) {
 
    const [nombre_Laboratorio, setNombre_laboratorio] = useState('');
    const [desc_Lab, setDesc_lab] = useState('');
    const [marcador_Lab, setMarcador_Lab] = useState('');
    const [error,setError] = useState(false);

    //metodo agregar_laboratorio
    const agregar_Laboratorio = async e => {
        e.preventDefault();
    
        //validacion de campos
        if (nombre_Laboratorio==='' || desc_Lab==='' || marcador_Lab==='') {
           //alerta por campos vacios
            setError(true);
            return;
        }
        //campos llenos corectamenta, no envia alerta
        setError(false);
        //agregar los datos en base de datos, tabla laboratorio
        //manejo de errores
        try {
            firebase.firestore().collection('Laboratorio').add({
                desc_Lab,
                marcador_Lab,
                nombre_Laboratorio
            })
        } catch (error) {
            console.log(error);
           
        }
        //Muestra la vista laboratorios
        carga(true);
        history.push('/Laboratorio');
    }
//creacion de campos para formulario, parte visual.
    return (
        <div className="jumbotron mt-5">
            {auth?(
                <div className="col-md-8 mx-auto ">
                <h1 className="text-center"> Agregar nuevo Laboratorio</h1>

             {(error)? <Alerta sms='Todos los campos son obligatorios'/>:null}

                <form className="mt-5" onSubmit={agregar_Laboratorio}>

                    <div className="form-group">
                        <label>Nombre Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre_Laboratorio"
                            placeholder="Nombre Laboratorio"
                            onChange={e =>setNombre_laboratorio(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción del laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="desc"
                            placeholder="Descripción"
                            onChange={e =>setDesc_lab(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Marcador de Laboratorio</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3" 
                            onChange={e => setMarcador_Lab(e.target.value)}></textarea>
                        
                    </div>
                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Laboratorio" />
                </form>
            </div>
          ):<h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">Inicia sesion, para ingresar a este modulo.</h1>}

        </div>
    )
}
export default withRouter(AgregarLaboratorio);