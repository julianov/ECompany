import React, { useEffect } from 'react';
import './servicesComponent.css';

const FA: React.FC = () => {

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
    }, []);
    
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

      
    </div>
  );
};

export default FA;
