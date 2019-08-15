import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons'; 

//Esta clase permite  mostrar pie de pagina en la parte inferor de la pagina
class PiePag extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {

    return (
      <div className="container">
        <div className="row1">
        <div className="proyectofinal">
        
      </div>  
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                    <SocialIcon url="https://www.facebook.com/"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://github.com"/>
              </li>
             
              <li className="list-inline-item">
                    <SocialIcon url="https://www.instagram.com"/>
              </li>
              <div className="proyectofinal">
              <p>GRAFICACION Y ANIMACION </p>
              <p></p>
              </div>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default PiePag;