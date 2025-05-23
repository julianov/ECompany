import React, { useEffect } from 'react';
import './servicesComponent.css';

const Electrico: React.FC = () => {
  
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
    }, []);

  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Proyectos Eléctricos</h1>

      <section className="section">
        <h2>Servicios Eléctricos en BT y MT</h2>
        <p>
          Ofrecemos un servicio completo en instalaciones eléctricas de baja y media tensión, adaptado a las necesidades de cada cliente. Nos encargamos de todo el proceso: desde la ingeniería y planificación inicial, pasando por el diseño detallado y la documentación técnica, hasta la dirección y supervisión de obra. Trabajamos con altos estándares de calidad y cumplimos con todas las normativas nacionales e internacionales vigentes, garantizando instalaciones seguras, eficientes y confiables.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Locales comerciales</li>
          <li>Viviendas unifamiliares y edificios residenciales</li>
          <li>Hospitales y clínicas</li>
          <li>Plantas industriales</li>
          <li>Data Centers</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Cálculos de carga, corto circuito y selectividad de protecciones</li>
          <li>Dimensionamiento de tableros y sistemas de protecciones</li>
          <li>Elaboración de memorias técnicas y cómputos</li>
          <li>Planos unifilares, de canalización y detalles constructivos</li>
          <li>Coordinación técnica y BIM multidisciplinaria</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Todos nuestros trabajos se desarrollan conforme a normas nacionales e internacionales como IEC, IRAM, y el Reglamento de la Asociación Electrotécnica Argentina (AEA).
        </p>
      </section>

      <section className="section-marcas"> 
  <h2 className="title-marcas">Marcas que utilizamos</h2>
  <div className="grid-marcas">
    <div className="grid-item">
      <img src="/marcas/simens.jpeg" alt="Siemens" className="marca-image" />
    </div>
    <div className="grid-item">
      <img src="/marcas/SE.jpeg" alt="Schneider Electric" className="marca-image" />
    </div>
    <div className="grid-item">
      <img src="/marcas/abb.jpeg" alt="ABB" className="marca-image" />
    </div>
    <div className="grid-item">
      <img src="/marcas/genrod.jpeg" alt="Genrod" className="marca-image" />
    </div>
    {/* Agregá más si querés */}
  </div>
</section>
      
    </div>
  );
};

export default Electrico;
