import React, { useEffect } from 'react';
import './servicesComponent.css';

const Cctv: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll inmediato al tope sin animación
  }, []);
  
  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">CCTV y Videovigilancia</h1>

      <section className="section">
        <h2>Soluciones de Seguridad Electrónica</h2>
        <p>
          Desarrollamos e implementamos sistemas de videovigilancia adaptados a distintos entornos: comerciales, industriales, residenciales y de misión crítica. Diseñamos redes de cámaras IP, centros de monitoreo y soluciones inteligentes de análisis de video, priorizando la prevención, el control y la trazabilidad de eventos en tiempo real.
        </p>
      </section>

      <section className="section">
        <h2>Tipos de Proyectos</h2>
        <ul>
          <li>Edificios residenciales y oficinas</li>
          <li>Locales comerciales y shoppings</li>
          <li>Hospitales y centros de salud</li>
          <li>Centros logísticos e industriales</li>
          <li>Data Centers</li>
        </ul>
      </section>

      <section className="section">
        <h2>Servicios Ofrecidos</h2>
        <ul>
          <li>Diseño e instalación de sistemas de cámaras IP y NVRs</li>
          <li>Soluciones de videovigilancia con análisis inteligente</li>
          <li>Integración con control de accesos, alarmas y redes</li>
          <li>Implementación de centros de monitoreo (CMS/VMS)</li>
          <li>Configuración remota y monitoreo en la nube</li>
        </ul>
      </section>

      <section className="section">
        <h2>Normativas Aplicadas</h2>
        <p>
          Aplicamos normas y buenas prácticas de fabricantes líderes como Dahua, Hikvision, Axis y Avigilon. Cumplimos con estándares de seguridad electrónica, IT y protección de datos conforme a la legislación vigente.
        </p>
      </section>

      <section className="section-marcas">
        <h2 className="title-marcas">Marcas que utilizamos</h2>
        <div className="carousel-track-marcas">
          <div className="carousel-item-marcas">
            
            <img src="./public/Marcas/dahua.jpg" alt="Dahua" className="marca-image" />
          </div>
          <div className="carousel-item-marcas">
            <img src="/marcas/siemens.png" alt="Siemens" className="marca-image" />
          </div>
          <div className="carousel-item-marcas">
            <img src="/marcas/schneider.png" alt="Schneider Electric" className="marca-image" />
          </div>
          {/* Agregá más logos si querés */}
        </div>
      </section>

    </div>
  );
};

export default Cctv;
