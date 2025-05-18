import React from 'react';
import './servicesComponent.css';

const Iluminacion: React.FC = () => {
  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Iluminación Arquitectónica y Técnica</h1>

      <section className="section">
        <h2>Diseño e Ingeniería en Iluminación</h2>
        <p>
          Desarrollamos proyectos de iluminación interior y exterior que combinan eficiencia, estética y funcionalidad. Nos enfocamos en generar experiencias visuales acordes a cada espacio, utilizando tecnología LED, automatización y control inteligente para optimizar el consumo energético y garantizar ambientes confortables y seguros.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Oficinas corporativas y coworking</li>
          <li>Locales comerciales y shoppings</li>
          <li>Viviendas de alta gama</li>
          <li>Espacios públicos y plazas</li>
          <li>Industrias y galpones logísticos</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Estudios luminotécnicos y simulaciones Dialux</li>
          <li>Diseño de iluminación decorativa, técnica y de emergencia</li>
          <li>Especificación de artefactos y soluciones LED</li>
          <li>Sistemas de control y automatización (DALI, KNX, etc.)</li>
          <li>Planificación, documentación técnica y seguimiento en obra</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Todos los diseños se ajustan a normativas IRAM, IEC y AEA, así como también a los estándares LEED, WELL y códigos locales de eficiencia energética, cuando corresponde.
        </p>
      </section>

      <section className="section">
        <h2>Galería de Proyectos</h2>
        <div className="carousel-track">
          <div className="carousel-item">
            <img src="/proyectosdestacados/oficina-iluminacion.jpg" alt="Oficinas iluminadas" className="carousel-image" />
            <h3 className="carousel-title">Oficinas AAA - CABA</h3>
            <p className="carousel-subtitle">Iluminación LED con control DALI y sensores de presencia</p>
          </div>
          <div className="carousel-item">
            <img src="/proyectosdestacados/local-comercial.jpg" alt="Local comercial" className="carousel-image" />
            <h3 className="carousel-title">Flagship Store</h3>
            <p className="carousel-subtitle">Diseño de iluminación decorativa y técnica</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Clientes Destacados</h2>
        <div className="clients-logos">
          <img src="/clientes/logo_irsa.png" alt="IRSA" className="client-logo" />
          <img src="/clientes/logo_osde.png" alt="OSDE" className="client-logo" />
          <img src="/clientes/logo_techint.png" alt="Techint" className="client-logo" />
        </div>
      </section>
    </div>
  );
};

export default Iluminacion;
