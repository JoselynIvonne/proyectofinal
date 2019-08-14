import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

export default function Labpatt (){
  return (
    <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
      <Marker parameters={{
          preset: "pattern",
          type: "pattern",
          //url: "/patts/LAB1.patt"
        }}>

      </Marker>
    </AFrameRenderer>
  )
}