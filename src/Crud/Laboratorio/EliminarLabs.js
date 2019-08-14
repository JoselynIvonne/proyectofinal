import React,{fragment} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import firebase from '../config/Fire';

const EliminarLabs = ({laboratorio}) => {
    const eliminarLaboratorio = id_Lab =>{
        //Eliminar los registros
        Swal.fire({
          title: '¿Esta seguro?',
          text: "Una vez eliminado no se puede recuperar!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar',
          cancelButtonText:'Cancelar'
        }).then(async(result) => {
          if (result.value) {

            try {
                firebase.firestore().collection('Laboratorio').doc(id_Lab).delete()
                .then(
                    Swal.fire(
                        'Eliminado!',
                        'El Laboratorio ha sid_Lab_Labo eliminado.',
                        'success'
                    )
                )    
            } catch (error) {
                console.log(error);
                Swal.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'Hubo un error, vuelve a intentarlo!'
                })
            }

          }
        })
    }
    return (
        <li className="list-group-item d-flex justify-content-between alig-items-center">
            <p>
                {laboratorio.nombre_Laboratorio} {' |'}
                <span className="font-weight-blod">{laboratorio.desc_Lab}</span>
            </p>
            <div>
                <Link to={`/laboratorios/editar/${laboratorio.id_Lab}`}
                    className="btn btn-success mr-2"
                >Editar</Link>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarLaboratorio(laboratorio.id_Lab)}
                >
                    Eliminar &times;
                </button>
            </div>
        </li>
    )
}

export default EliminarLabs;
