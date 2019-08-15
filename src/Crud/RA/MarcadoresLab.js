import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

//Marcadores para cada laboratorio.
export default function LabMarcadores (){
  return (
    <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
      <Marker parameters={{
          preset: "pattern",
          type: "pattern",
        }}>

      </Marker>
    </AFrameRenderer>
  )
}