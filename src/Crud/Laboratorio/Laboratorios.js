import React,{Fragment} from 'react'

//Muestra los nombre de los laboratorios
const Laboratorios = ({dato}) => {
    return (
        <Fragment>
            <option value={dato.nombre_Laboratorio}>{dato.nombre_Laboratorio}</option>
        </Fragment>
    )
}
export default Laboratorios