import React from 'react';
import './Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  return (
    <div className="container-contacto">
      <h1 className="title-nuestrosservicios">Contacto</h1>
      <p className="texto-contacto">
        Seguinos en nuestras redes sociales para conocer más sobre nuestros proyectos y servicios:
      </p>
      <div className="redes-contacto">
        <a
          href="https://www.instagram.com/enerzone.argentina/?igsh=MTVtdDg1ODNienRycg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/enerzone-s-r-l-807822365/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61576339856798&locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default Contacto;
