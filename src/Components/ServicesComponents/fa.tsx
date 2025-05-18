import React from 'react';
import './servicesComponent.css';

const FA: React.FC = () => {
  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Sistemas de Detección y Alarma Contra Incendio</h1>

      <section className="section">
        <h2>Ingeniería y Ejecución de Sistemas de FA</h2>
        <p>
          Diseñamos e implementamos sistemas de detección y alarma contra incendio conforme a las normativas locales e internacionales. Trabajamos en proyectos de todo tipo, desde edificios residenciales hasta instalaciones críticas como hospitales y data centers, priorizando la seguridad de las personas y la protección de los bienes.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Hospitales y clínicas</li>
          <li>Shoppings y grandes superficies</li>
          <li>Oficinas y edificios corporativos</li>
          <li>Plantas industriales</li>
          <li>Data Centers</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Diseño de sistemas convencionales y direccionables</li>
          <li>Selección y distribución de detectores y sirenas</li>
          <li>Memorias técnicas y planos de distribución</li>
          <li>Integración con sistemas BMS, CCTV y control de acceso</li>
          <li>Supervisión de instalación y puesta en marcha</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Aplicamos las normativas NFPA (National Fire Protection Association), IRAM 3546, y requisitos exigidos por autoridades locales, compañías aseguradoras y entes de control.
        </p>
      </section>

      <section className="section">
        <h2>Galería de Proyectos</h2>
        <div className="carousel-track">
          <div className="carousel-item">
            <img src="/proyectosdestacados/hospital-fa.jpg" alt="Hospital con sistema de incendio" className="carousel-image" />
            <h3 className="carousel-title">Hospital General</h3>
            <p className="carousel-subtitle">Sistema direccionable con integración a BMS</p>
          </div>
          <div className="carousel-item">
            <img src="/proyectosdestacados/data-fa.jpg" alt="Data Center" className="carousel-image" />
            <h3 className="carousel-title">Data Center Zona Oeste</h3>
            <p className="carousel-subtitle">Sistema de detección temprana y notificación</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Clientes Destacados</h2>
        <div className="clients-logos">
          <img src="/clientes/logo_posadas.png" alt="Hospital Posadas" className="client-logo" />
          <img src="/clientes/logo_hp.png" alt="HP" className="client-logo" />
          <img src="/clientes/logo_irsa.png" alt="IRSA" className="client-logo" />
        </div>
      </section>
    </div>
  );
};

export default FA;
