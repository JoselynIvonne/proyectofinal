import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Crud/config/Fire';

import Principal from './Crud/Principal';
import AgregarLaboratorio from './Crud/AgregarLaboratorio';
import AgregarHorario from  './Crud/AgregarHorario';
import Laboratorios from  './Crud/Laboratorios';
import Horarios from'./Crud/Horarios';
function App()
{
    const [lab, setLab]=useState([]);
    const [carga, setcarga]=useState(true);
    const [horarios, setHorarios]=useState([]);

    useEffect(()=>{
      if(carga){
        firebase.firestore().collection('Laboratorio').onSnapshot((onSnapshot)=>{
          const dato= onSnapshot.docs.map(dato1=>({
           id_Lab :dato1.id_Lab,
           ...dato1.data()
          }))
          setLab(dato);
        });
        firebase.firestore().collection('Horario').onSnapshot((snapshot)=>{
          const datos = snapshot.docs.map((dato)=>({
            id: dato.id,
            ...dato.data()
          }))
          setHorarios(datos);
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

          <Route exact path="/horarios" render={()=>(
            <Horarios horarios={horarios} recargar={setcarga} />
          )} />
        </Switch>
      </main>
  </Router>
);
}
export default App;