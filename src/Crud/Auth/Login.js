import React, {useState} from 'react';
import firebase from '../config/Fire';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';
//Permite el logeo de un usuario
function Login({history,recargar}) {
    //Campos requeridos 
    const [ correo, guardarCorreo ] = useState('');
    const [ contrasena , guardarContrasena ] = useState('');

    const  login  = async e =>{
       e.preventDefault();
       //Controla errores
       try {
           //Permite verificar con la base de datos los usuarios registrados.
           await firebase.auth().signInWithEmailAndPassword(correo, contrasena);
           //Libreria de alerta, para confirmar.
           Swal.fire({
               position: 'center',
               type: 'success',
               text: 'Sesión iniciada con éxito!',
               showConfirmButton: false,
               timer: 100
           })
           recargar(true);
           //una vez iniciado sesion, se redirecciona a la vista de laboratorios
           history.replace('/laboratorios');
       } catch (error) {
           console.log(error.message);
           //Si los datos no coinciden con los de la base de datos.
           if(error.message==='The password is invalid or the user does not have a password.'){
            //alerta.   
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

   //Creacion de la parate visual del formulario
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