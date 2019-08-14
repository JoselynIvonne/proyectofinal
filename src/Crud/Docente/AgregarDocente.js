import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../config/Fire';
import Alerta from '../Alerta';
import { async } from 'q';
//import Laboratorios from '../Laboratorio/Laboratorios';

function AgregarDocente ({datos,history,auth}){

    const[docente, setDocente]=useState('');
    const[especialidda, setEspecialidda]=useState('');
    const[materia_Docente, setMateriaDoc]=useState('');
    const [alerta, setAlerta]=useState(false);

    const agregar_docente= async e=>{
        e.preventDefault();

        if(docente===''||especialidda===''||materia_Docente===''){
            setAlerta(true);
            return;
        }
        setAlerta(false);

        try{
            firebase.firestore().collection('Docente').add({
                docente,
                especialidda,
                materia_Docente
            })
        }catch(error){
            console.log(error);
        }

        history.push('/docente');
    
    }

    return(
        <div className="jumbotron mt-5">
        {auth ?(
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar  nuevo Docente</h1>
            <form className="mt-50" onSubmit={agregar_docente}>
                {(alerta)? <Alerta sms='Todos los campos son obligatorios'/>:null}
                <div className="form-group">
                    <label>Nombre Docente</label>
                    <input
                    type="text"
                    className="form-control"
                    name="docente"
                    required
                       value={docente}
                       onChange={e=>setDocente(e.target.value)}
                       />
                </div>
                <div className="form-group">
                        <label>Materia</label>
                        <input
                            type="text"
                            className="form-control"
                            name="materia"
                            placeholder="Materia"
                            required
                               value={materia}
                            onChange={e => setMateria(e.target.value)}
                        />
                </div>
               </form>
                </div>
        
                ): <h1 className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">NO </h1>}
        </div>
    )

}
export default withRouter(AgregarDocente);