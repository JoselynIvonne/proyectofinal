import React,{Fragment} from 'react'

const Laboratorios = ({lab}) => {
    return (
        <Fragment>
            <option value={lab.nombre_Laboratorio}>{lab.nombre_Laboratorio}</option>
        </Fragment>
    )
}
export default Laboratorios