import React from 'react';
//Mensaje de alerta para validacion de campos en los formularios.
const Alerta = ({sms}) => (
    <p className="alert alert-danger p3 my-5 text-center text-uppercase
    font-weight-bold">{sms}</p>
)
export default Alerta;