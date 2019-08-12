import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-ligth bg-dark " >
           <div className="container-fluid">
               <NavLink to="/" className="navbar-brand" >Sistema de laboratorios</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ">

                    <li className="nav-item">
                                <NavLink  to="/horarios" className="nav-link" activeClassName="active">Horarios</NavLink>
                    </li> 
                   <li className="nav-item">
                        <NavLink  to="/agregar_laboratorio" className="nav-link" activeClassName="active">Agregar Laboratorio</NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink  to="/agregar_horario" className="nav-link" activeClassName="active">Agregar Horario</NavLink>
                   </li>
               </ul>
               </div>
           </div>
       </nav>
    )
}