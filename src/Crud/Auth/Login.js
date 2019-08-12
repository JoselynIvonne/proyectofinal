import React, {useState} from 'react';
import firebase from '../config/Fire';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

function Login({history,recargar}) {
    const [ correo, guardarCorreo ] = useState('');
    const [ contrasena , guardarContrasena ] = useState('');

    const  login  = async e =>{
       e.preventDefault();
       try {
           await firebase.auth().signInWithEmailAndPassword(correo, contrasena);
           Swal.fire({
               position: 'center-end',
               type: 'info',
               title: 'Inicio de sesion',
               text: 'Sesión iniciada con éxito!',
               showConfirmButton: false,
               timer: 1500
           })
           recargar(true);
           history.replace('/laboratorios');
       } catch (error) {
           console.log(error.message);
           if(error.message==='The password is invalid or the user does not have a password.'){
               Swal.fire({
                   type: 'error',
                   title: 'Contraseña incorrecta',
                   text: 'La contraseña que ingresaste es incorrecta!',
               })
           }else if(error.message==='There is no user record corresponding to this identifier. The user may have been deleted.'){
               Swal.fire({
                   type: 'error',
                   title: 'Contraseña incorrecta',
                   text: 'El correo que ingresaste es incorrecto!',
               })
           }
           
       }
   }

   return (
    <div className="row justify-content-center mt-3 mb-3">
    <div className="col-md-5 mb-2">
        <div className="card mt-5 mb-2">
            <div className="card-body mb-2" >
                <h2 className="text-center py-4 mb-2">
                    Sistema de Laboratorios  PUCE SE
                </h2>
                      
                       <form onSubmit={login}>
                           <div className="form-group">
                               <label for="username" className="text-info">Correo Electronico:</label><br/>
                               <input type="text" name="username" id="username" className="form-control"
                               required
                               value={correo}
                               onChange={e=>guardarCorreo(e.target.value)}
                               />
                           </div>
                           <div className="form-group">
                               <label for="password" className="text-info">Contraseña:</label><br/>
                               <input type="password" name="password" id="password" className="form-control"
                               required
                               value={contrasena}
                               onChange={e=>guardarContrasena(e.target.value)}
                               />
                           </div>
                           <div className="form-group">
                               <input type="submit" name="submit" class="btn btn-info btn-md" value="Iniciar Sesion"/>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
  
   )
}
export default withRouter(Login);