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
          <li>Data Centers</li>
          <li>Hospitales y centros de salud</li>
          <li>Centros logísticos e industriales</li>
          <li>Edificios residenciales y oficinas</li>
          <li>Locales comerciales y shoppings</li>
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

      <section className="section">
        <h2>Galería de Proyectos</h2>
        <div className="carousel-track">
          <div className="carousel-item">
            <img src="/proyectosdestacados/cctv-hospital.jpg" alt="Hospital Vigilancia" className="carousel-image" />
            <h3 className="carousel-title">Hospital Público CABA</h3>
            <p className="carousel-subtitle">Sistema CCTV con más de 150 cámaras IP</p>
          </div>
          <div className="carousel-item">
            <img src="/proyectosdestacados/cctv-industria.jpg" alt="Industria Vigilancia" className="carousel-image" />
            <h3 className="carousel-title">Planta Industrial Zona Sur</h3>
            <p className="carousel-subtitle">Videovigilancia perimetral y control de accesos</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Clientes Destacados</h2>
        <div className="clients-logos">
          <img src="/clientes/logo_hp.png" alt="HP" className="client-logo" />
          <img src="/clientes/logo_posadas.png" alt="Hospital Posadas" className="client-logo" />
          <img src="/clientes/logo_dahua.png" alt="Dahua" className="client-logo" />
        </div>
      </section>
    </div>
  );
};

export default Cctv;
