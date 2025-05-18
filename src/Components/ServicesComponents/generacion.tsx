import React, { useEffect } from 'react';
import './servicesComponent.css';

const Generacion: React.FC = () => {
  
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
    }, []);

  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Sistemas de Generación Eléctrica</h1>

      <section className="section">
        <h2>Soluciones en Generación Convencional y Renovable</h2>
        <p>
          Desarrollamos proyectos de generación eléctrica que integran tecnologías convencionales y renovables, adaptadas a las necesidades específicas de cada cliente. Desde grupos electrógenos con tableros de transferencia automática hasta sistemas solares fotovoltaicos on-grid y off-grid, brindamos soluciones confiables, eficientes y sostenibles.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Edificios corporativos</li>
          <li>Data Centers</li>
          <li>Hospitales y clínicas</li>
          <li>Establecimientos rurales y fuera de red</li>
          <li>Parques industriales</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Diseño e instalación de grupos electrógenos</li>
          <li>Tableros de arranque y transferencia automática (ATS)</li>
          <li>Diseño y montaje de sistemas solares on-grid y off-grid</li>
          <li>Configuración de inversores, reguladores y cargadores de baterías</li>
          <li>Proyectos híbridos con energías renovables y respaldo convencional</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Nuestros sistemas de generación cumplen con normativas IRAM, IEC y las especificaciones de los fabricantes líderes. En sistemas solares, aplicamos los lineamientos de la normativa 4820 de la Secretaría de Energía y recomendaciones internacionales.
        </p>
      </section>

      <section className="section">
        <h2>Galería de Proyectos</h2>
        <div className="carousel-track">
          <div className="carousel-item">
            <img src="/proyectosdestacados/generador-hospital.jpg" alt="Grupo electrógeno en hospital" className="carousel-image" />
            <h3 className="carousel-title">Hospital Provincial</h3>
            <p className="carousel-subtitle">Instalación de grupo electrógeno 500 kVA con ATS</p>
          </div>
          <div className="carousel-item">
            <img src="/proyectosdestacados/solar-farm.jpg" alt="Sistema solar" className="carousel-image" />
            <h3 className="carousel-title">Establecimiento Rural Off-Grid</h3>
            <p className="carousel-subtitle">Sistema solar autónomo con baterías e inversores</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Clientes Destacados</h2>
        <div className="clients-logos">
          <img src="/clientes/logo_hp.png" alt="HP" className="client-logo" />
          <img src="/clientes/logo_posadas.png" alt="Hospital Posadas" className="client-logo" />
          <img src="/clientes/logo_irsa.png" alt="IRSA" className="client-logo" />
        </div>
      </section>
    </div>
  );
};

export default Generacion;
