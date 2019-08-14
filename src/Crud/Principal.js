import React, {useState} from 'react';
import {Link, NavLink,withRouter } from 'react-router-dom';
import firebase from '../Crud/config/Fire';
import Swal from 'sweetalert2';

function  Principal({history}) {
   
    const [auth1, Setauth] = useState(false);
    const logout = ()=>{
        firebase.auth().signOut();
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Bien',
            text: 'Sesión cerrada con exito, vuelva pronto.',
            showConfirmButton: false,
            timer: 1500
        })
        history.replace('/');
    }
    firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
            //El state se pone en true si el usuario esta logeado
            return Setauth(true);
        }else{
            //El state se pone en false si el usuario esta logeado
            return Setauth(false);
        }
    })
    return (
 
        <nav className="navbar navbar-expand-lg navbar-light bg-custom" >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button> 
            <a class="navbar-brand logo" href="#"><img src="./Crud/Imagenes/logo.png"/></a>
            {auth1?(
           <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav nav-pills nav-stacked">
                    <li className="nav-item">
                        <NavLink  to="/horarios" className="nav-link" activeClassName="active">Horarios</NavLink>
                    </li> 
                   <li className="nav-item">
                        <NavLink  to="/agregar_laboratorio" className="nav-link" activeClassName="active">Agregar Laboratorio</NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink  to="/laboratorio" className="nav-link" activeClassName="active">Laboratorio</NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink  to="/agregar_horario" className="nav-link" activeClassName="active">Agregar Horario</NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink  to="/generar-marcador" className="nav-link" activeClassName="active">Generar Marcador</NavLink>
                   </li>
               </ul>
               <button className="btn btn-sm btn-outline-primary my-2 my-sm-0" onClick={logout} ><i class="fas fa-arrow-left">Cerrar Sesión</i></button>
               </div>
           </div>
            ):<Link to="/" className="nav nav-pills nav-stacked" >Sistema de laboratorios</Link>}
       </nav>

       
    )
}
export default withRouter(Principal);