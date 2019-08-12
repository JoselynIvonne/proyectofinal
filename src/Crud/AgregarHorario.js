import React, {useState} from 'react';
import Laboratorio from './Laboratorios';
import {withRouter} from 'react-router-dom';
import firebase from './config/Fire';


function AgregarHorario({datos, history, recargar}) {
    const [nombre_Docente, setnombreDocente] = useState('');
    const [materia, setMateria] = useState('');
    const [hora_Inicio, setHorainicio] = useState('');
    const [hora_Fin, setHorafin] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [dia, setDia] = useState('');
    const [especialidad, setEspecialidad] = useState('');

    const agregar_horario = async e => {
        e.preventDefault();

        if (nombre_Docente==='' || materia==='' || hora_Inicio==='' || hora_Fin==='' || laboratorio==='' || dia===''|| especialidad==='') {
          
            return;
        }
        
        try {
            firebase.firestore().collection('horario')
            .add({
                nombre_Docente,
                materia,
                hora_Inicio,
                hora_Fin,
                laboratorio,
                dia
            })
        } catch (error) {
            console.log(error);
           
        }

        recargar(true);
      
        history.push('/horario');
    }

    return (
        <div className="jumbotron mt-5">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar  Horario</h1>
                <form className="mt-50" onSubmit={agregar_horario}>

                    <div className="form-group">
                        <label>Nombre Docente</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre_Docente"
                            placeholder="Docente"
                            onChange={e => setnombreDocente(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Materia</label>
                        <input
                            type="text"
                            className="form-control"
                            name="materia"
                            placeholder="Materia"
                            onChange={e => setMateria(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Laboratorio</label>
                        <select className="form-control" name="laboratorio" onChange={e => setLaboratorio(e.target.value)}>
                            <option>Seleccione un laboratorio</option>
                            {datos.map(dato => (
                                <Laboratorio key={dato.id} dato={dato} />
                            ))}
                        </select>
                    </div>
                    <div className="form row">
                        <div className="form-group col-md-6">
                            <label>Hora inicio</label>
                            <input
                                type="time"
                                className="form-control"
                                name="hora_Inicio"
                                placeholder="Materia"
                                onChange={e => setHorainicio(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Hora Fin</label>
                            <input
                                type="time"
                                className="form-control"
                                name="hora_Fin"
                                placeholder="Materia"
                                onChange={e => setHorafin(e.target.value)}
                            />
                        </div>
                        </div>
                    <div className="form-group">
                        <label>Especialidad</label>
                        <select className="form-control" name="especialidad" onChange={e => setEspecialidad(e.target.value)}>
                            <option>Seleccione la especialidad</option>
                            <option value="Ing. en Sistemas y Comp.">Ing. en Sistemas y Comp.</option>
                            <option value="Lic. en Enfermería">Lic. en Enfermería</option>
                            <option value="Lic Laboratorio Clinico" >Lic Laboratorio Clinico</option>
                            <option value="Lic. Diseño Grafico">Lic. Diseño Grafico</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Día</label>
                        <select className="form-control" name="dia" onChange={e => setDia(e.target.value)}>
                            <option>Seleccione un día</option>
                            <option value="Domingo">Domingo</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes" >Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                        </select>
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Laboratorio" />
                </form>
            </div>
        </div>
    )
}
export default withRouter(AgregarHorario);