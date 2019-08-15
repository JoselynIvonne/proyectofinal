import React from 'react';
import {AFrameRenderer,Marker} from 'react-web-ar';

export default function RealidadAumentada() {
    return (
        <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
            <Marker parameters={{ preset: 'hiro' }}>

                <a-box color="red" position="0 0.09 0" scale="0.4 0.8 0.8">
                    <a-animation
                        attribute="rotation"
                        to="360 0 0"
                        dur="2000"
                        easing="linear"
                        repeat="indefinite"
                    />
                </a-box>

            </Marker>
        </AFrameRenderer>
    )
}