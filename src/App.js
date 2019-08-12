import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Crud/config/Fire';

import Login from './Crud/Auth/Login';
import Principal from './Crud/Principal';
import AgregarLaboratorio from './Crud/AgregarLaboratorio';
import AgregarHorario from  './Crud/AgregarHorario';
//import Laboratorios from  './Crud/Laboratorios';
import Horarios from'./Crud/Horarios';
import ListLab from './Crud/ListLab';

function App()
{
    const [auth1, setAuth]= useState(false);
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
            <Login recargar={setcarga} />
          )}/>

        <Route exact path="/laboratorios" render={()=>(
            <ListLab laboratorios={lab} recargar={setcarga} auth={auth1}/>
          )} /> 

           <Route exact path="/agregar_laboratorio" render ={()=>(
           <AgregarLaboratorio  carga={setcarga}  auth={auth1}/>
          )}/>

          <Route exact path="/agregar_horario" render ={()=>(
           <AgregarHorario  carga={setcarga}  auth={auth1} />
          )}/>
          }

          <Route exact path="/horarios" render={()=>(
            <Horarios horarios={horarios} recargar={setcarga}  auth={auth1}/>
          )} />
        </Switch>
      </main>
  </Router>
);
}
export default App;