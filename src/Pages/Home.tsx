import React, { useEffect, useState } from 'react';
import AcercaDe from '../Components/HomeComponents/AcercaDe';
import Contacto from '../Components/HomeComponents/Contacto';
import ImageSlider from '../Components/HomeComponents/ImageSlider';
import NuestrosClientes from '../Components/HomeComponents/NuestrosClientes';
import NuestrosServicios from '../Components/HomeComponents/NuestrosServicios';
import TecnologiesImageSlider from '../Components/HomeComponents/ProyectosDestacados';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario desplaza hacia abajo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Desplazarse hacia la parte superior de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <header style={{ width: '100%', height: '100px', display: 'flex', backgroundColor: 'white', borderBottom: '2px solid #ccc' }}>
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          style={{ width: 'auto', height: '100px', flex: '0 0 auto', margin: "0px 0px 0px 10px" }}
          alt="logo"
        />

        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <div style={{ marginRight: '25px', textDecoration: 'none' }}>
            <a style={{ textDecoration: 'none' }} href="#nuestros-servicios">Nuestros Servicios</a>
          </div>
          <div style={{ marginRight: '15px', textDecoration: 'none' }}>
            <a style={{ textDecoration: 'none' }} href="#nuestros-clientes">Nuestros Clientes</a>
          </div>
          <div style={{ marginRight: '25px', textDecoration: 'none' }}>
            <a style={{ textDecoration: 'none' }} href="#acerca-de">Acerca de</a>
          </div>
          <div style={{ marginRight: '15px', textDecoration: 'none' }}>
            <a style={{ textDecoration: 'none' }} href="#contactanos">Contactanos</a>
          </div>
        </div>
      </header>
      <main>
        {/* contenido principal */}
        <ImageSlider />

        <div id="nuestros-servicios">
          <NuestrosServicios />
        </div>

        <div id="nuestros-clientes">
          <NuestrosClientes />
        </div>

        <div id="acerca-de">
          <AcercaDe />
        </div>

        <div id="contactanos">
          <Contacto />
        </div>
      </main>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <img src="/logo.png" alt="Logo de Enerzone" width="64" height="64" />
      <p className="footer-copy">© Enerzone 2020</p>
    </div>

    <div className="footer-column">
      <h4>Ubicación</h4>
      <p>Buenos Aires, Argentina</p>
    </div>

    <div className="footer-column">
      <h4>Contacto</h4>
      {/* <p><a href="mailto:info@enerzone.com">info@enerzone.com</a></p>*/}
      <p><a href="https://www.instagram.com/enerzone.argentina/?igsh=MTVtdDg1ODNienRycg%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      <p><a href="https://www.linkedin.com/in/enerzone-s-r-l-807822365/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
  </div>
</footer>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </div>
  );
};
