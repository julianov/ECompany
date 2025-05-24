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
          Desarrollamos soluciones integrales para sistemas de detección y alarma contra incendio, cumpliendo con las normativas locales e internacionales. Nuestra ingeniería abarca desde el diseño conceptual hasta la implementación en obra, incluyendo la selección de tecnologías adecuadas, el cálculo de cobertura, el diseño de la red de detección y señalización, y la integración con otros sistemas de seguridad.

Contamos con experiencia en una amplia variedad de entornos, desde edificios residenciales y comerciales hasta instalaciones críticas como hospitales, centros de datos e industrias, garantizando la seguridad de las personas, la continuidad operativa y la protección de los activos.
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
