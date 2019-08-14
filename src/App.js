import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Crud/config/Fire';

import Principal from './Crud/Principal';
import Login from './Crud/Auth/Login';
import AgregarLaboratorio from './Crud/Laboratorio/AgregarLaboratorio';
import AgregarHorario from  './Crud//Horario/AgregarHorario';
import EditarLaboratorio from  './Crud/Laboratorio/EditarLaboratorio';
import Horarios from'./Crud/Horario/Horarios';
import ListLab from './Crud/Laboratorio/ListLab';
import GenerarMarcadores from './Crud/RA/GenerarMarcadores';

function App()
{
    const [auth1, setAuth]= useState(false);
    const [lab, setLab]=useState([]);
    const [carga, setcarga]=useState(true);
    const [horarios, setHorarios]=useState([]);

    useEffect(()=>{
      if(carga){
        firebase.firestore().collection('Laboratorio').onSnapshot((onSnapshot)=>{
          const datos= onSnapshot.docs.map(dato=>({
           id_Lab :dato.id_Lab,
           ...dato.data()
          }))
          setLab(datos);
        });
        firebase.firestore().collection('Horario').onSnapshot((snapshot)=>{
          const datos = snapshot.docs.map((dato)=>({
            id: dato.id,
            ...dato.data()
          }))
          setHorarios(datos);
        });
      }
      setcarga(false);
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          return setAuth(true);
        }else{
          return setAuth(false);
        }
      })
}, [carga])

return (
  <Router>
   <Principal/>
      <main className="container mb-12 ">
        <Switch>
        <Route exact path="/" render={()=>(
            <Login carga={setcarga} />
          )}/>

        <Route exact path="/laboratorios" render={()=>(
            <ListLab laboratorios={lab} carga={setcarga} auth={auth1}/>
          )} /> 

        <Route exact path="/generar-marcador" render={()=>(
          <GenerarMarcadores auth={auth1}/>
        )}/>

        <Route exact path="/agregar_laboratorio" render ={()=>(
           <AgregarLaboratorio  carga={setcarga}  auth={auth1}/>
          )}/>

          <Route exact path="/agregar_horario" render ={()=>(
           <AgregarHorario  carga={setcarga}  auth={auth1} />
          )}/>
          }

          <Route exact path="/horarios" render={()=>(
            <Horarios horarios={horarios} carga={setcarga}  auth={auth1}/>
          )} />

            <Route exact path="/laboratorios/editar/:id" render={props=>{
            //Tomando el id del lab
            const id_Lab = props.match.params.id;
            //lab que se pasa al state 
            const lab1 = lab1.filter(laboratorio => laboratorio.id === id_Lab);
            return (
              <EditarLaboratorio lab={lab1[0]}/>
            )
          }} />   
        </Switch>
      </main>
  </Router>
);
}
export default App;