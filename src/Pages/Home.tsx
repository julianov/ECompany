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
          <div style={{ marginRight: '25px', textDecoration: 'none' }}>
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
      <footer >
        {/* contenido del pie de página */}
        <div className="containerHome">
          <div className="left">
            <img src="logo.png" alt="Logo de la empresa" width="64" height="64" />
          </div>
          <div className="middle">
            <h3>@JaoTec 2023</h3>
          </div>
          <div className="right">
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
