import React, { useEffect } from 'react';
import './servicesComponent.css';

const Datos: React.FC = () => {
  
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
    }, []);

  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Proyectos de Datos y Conectividad</h1>

      <section className="section">
        <h2>Infraestructura de Redes y Comunicaciones</h2>
        <p>
          Diseñamos e implementamos soluciones de conectividad para entornos empresariales, comerciales, domiciliarios e industriales. Nuestros servicios cubren desde la ingeniería de red estructurada hasta la instalación y configuración de equipos de red, garantizando rendimiento, escalabilidad y cumplimiento de estándares internacionales. Aseguramos una conectividad confiable para servicios críticos como voz, datos y video.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Oficinas corporativas</li>
          <li>Edificios inteligentes</li>
          <li>Hospitales y centros médicos</li>
          <li>Locales comerciales y retail</li>
          <li>Data Centers</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Diseño e instalación de cableado estructurado (categoría 6, 6A y fibra óptica)</li>
          <li>Configuración de salas de comunicaciones y racks</li>
          <li>Instalación de access points y sistemas Wi-Fi corporativos</li>
          <li>Certificación de enlaces y documentación técnica</li>
          <li>Integración con sistemas de CCTV, control de acceso y VoIP</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Nuestros proyectos se desarrollan conforme a normas internacionales como TIA/EIA, ISO/IEC 11801, y buenas prácticas de fabricantes como Cisco, Panduit y Ubiquiti, garantizando calidad, interoperabilidad y rendimiento.
        </p>
      </section>

      <section className="section">
        <h2>Marcas</h2>
        <div className="carousel-track">
          <div className="carousel-item">
          
          </div>
          <div className="carousel-item">
           
          </div>
        </div>
      </section>

    </div>
  );
};

export default Datos;