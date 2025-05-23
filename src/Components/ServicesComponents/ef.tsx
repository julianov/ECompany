import React, { useEffect } from 'react';
import './servicesComponent.css';

const EF: React.FC = () => {

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
    }, []);
    
  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Eficiencia Energética y Domótica</h1>

      <section className="section">
        <h2>Optimización Energética e Integración Inteligente</h2>
        <p>
          Diseñamos e implementamos soluciones que mejoran la eficiencia energética de instalaciones eléctricas, combinadas con tecnologías de automatización para el confort, la seguridad y el ahorro energético. Nuestros sistemas de domótica permiten una gestión inteligente de iluminación, climatización, consumo y monitoreo, adaptándose a todo tipo de proyectos residenciales, comerciales e industriales.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Viviendas y edificios inteligentes</li>
          <li>Oficinas corporativas</li>
          <li>Locales comerciales</li>
          <li>Hospitales y clínicas</li>
          <li>Plantas industriales</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Auditorías energéticas y estudios de consumo</li>
          <li>Diseño de sistemas de control y automatización (KNX, Loxone, Zigbee, etc.)</li>
          <li>Implementación de sensores y sistemas de monitoreo en tiempo real</li>
          <li>Control automático de iluminación, HVAC, cortinas y energía</li>
          <li>Integración con sistemas BMS (Building Management Systems)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Aplicamos normativas IRAM, IEC y recomendaciones internacionales en eficiencia energética y automatización, incluyendo criterios de certificaciones LEED, EDGE y la Ley 27.191 de Energías Renovables.
        </p>
      </section>

     
    </div>
  );
};

export default EF;
