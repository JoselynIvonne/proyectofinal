import React, {useState} from 'react';
import {Link, NavLink,withRouter } from 'react-router-dom';
import firebase from '../Crud/config/Fire';

//Barra de navegacion en la parte superior de la pagina
function  Principal({history}) {
   //variables
    const [auth1, Setauth] = useState(false);
    const logout = ()=>{
        
        firebase.auth().signOut();
     
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
    //Creacion de formulario, parte visual.
    return (
 
        <nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
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
                        <NavLink  to="/nuevo-laboratorio" className="nav-link" activeClassName="active">Laboratorio</NavLink>
                   </li>
                   
                   <li className="nav-item">
                        <NavLink  to="/generar-marcador" className="nav-link" activeClassName="active">Generar Marcador</NavLink>
                   </li>
               </ul>
               <button className="btn btn-signOut btn-outline-primary my-4 my-sm-1" onClick={logout} ><i class="fas fa-arrow-left">Cerrar Sesión</i></button>
               </div>
           </div>
            ):<Link to="/login" className="nav nav-pills nav-stacked" >Sistema de laboratorios</Link>}
       </nav>

       
    )
}
export default withRouter(Principal);