import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Crud/config/Fire';

import Principal from './Crud/Principal';
import AgregarLaboratorio from './Crud/AgregarLaboratorio';
import AgregarHorario from  './Crud/AgregarHorario';
import Laboratorios from  './Crud/Laboratorios';
function App()
{
    const [lab, setLab]=useState([]);
    const [carga, setcarga]=useState(true);

    useEffect(()=>{
      if(carga){
        firebase.firestore().collection('Laboratorio').onSnapshot((onSnapshot)=>{
          const dato= onSnapshot.docs.map(dato1=>({
           id_Lab :dato1.id_Lab,
           ...dato1.data()
          }))
          setLab(dato);
        });
      }
      setcarga(false)
}, [carga])

return (
  <Router>
   <Principal/>
      <main className="container mb-12 ">
        <Switch>
          <Route exact path="/" render ={()=>(
           <Laboratorios lab={lab} carga={setcarga} />
          )}/>

           <Route exact path="/agregar_laboratorio" render ={()=>(
           <AgregarLaboratorio  carga={setcarga} />
          )}/>

          <Route exact path="/agregar_horario" render ={()=>(
           <AgregarHorario  carga={setcarga} />
          )}/>
          }
        </Switch>
      </main>
  </Router>
);
}
export default App;