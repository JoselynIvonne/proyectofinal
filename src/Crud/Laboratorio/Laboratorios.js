import React,{Fragment} from 'react'

const Laboratorios = ({dato}) => {
    return (
        <Fragment>
            <option value={dato.nombre_Laboratorio}>{dato.nombre_Laboratorio}</option>
        </Fragment>
    )
}
export default Laboratorios