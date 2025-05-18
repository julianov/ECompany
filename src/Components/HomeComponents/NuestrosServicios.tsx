import React from 'react'; 
import './NuestrosServicios.css';
import TecnologiesImageSlider from './ProyectosDestacados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLightbulb, faNetworkWired, faVideo, faFireExtinguisher, faChartLine, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TextSlider: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-slider">
      {texts.map((text, index) => (
        <h4 key={index} className={index === currentTextIndex ? 'active' : ''}>
          {text}
        </h4>
      ))}
    </div>
  );
};

function NuestrosServicios() {
    const navigate = useNavigate();

  const beneficios = [
    "Proyectos eléctricos integrales: desde la ingeniería hasta la ejecución en obra.",
    "Sistemas de iluminación eficientes, funcionales y adaptados a cada necesidad.",
    "Instalación de redes de datos estructuradas para máxima conectividad y rendimiento.",
    "Montaje y configuración de sistemas de CCTV para seguridad y monitoreo continuo.",
    "Diseño e implementación de sistemas de detección y alarma contra incendios certificados.",
    "Implementamos soluciones de eficiencia energética para reducir consumos eléctricos y optimizar costos operativos."
  ];

 const servicios = [
  {
    icon: faBolt,
    titulo: "Proyectos Eléctricos",
    descripcion: "Diseño, ejecución y supervisión de instalaciones eléctricas en Baja y Media tensión.",
    ruta: "/servicios/electrico",
  },
  {
    icon: faLightbulb,
    titulo: "Iluminación",
    descripcion: "Proyectos de iluminación eficientes y estéticos.",
    ruta: "/servicios/iluminacion",
  },
  {
    icon: faNetworkWired,
    titulo: "Redes de Datos",
    descripcion: "Redes estructuradas para conectividad segura.",
    ruta: "/servicios/datos",
  },
  {
    icon: faVideo,
    titulo: "Sistemas de CCTV",
    descripcion: "Videovigilancia para protección de bienes y personas.",
    ruta: "/servicios/cctv",
  },
  {
    icon: faFireExtinguisher,
    titulo: "Alarmas Contra Incendio",
    descripcion: "Detección y alarma bajo normativas.",
    ruta: "/servicios/fa",
  },
  {
    icon: faSolarPanel,
    titulo: "Generación de Emergencia",
    descripcion: "Soluciones con grupos electrógenos y sistemas solares on/off-grid.",
    ruta: "/servicios/generacion",
  },
  {
    icon: faChartLine,
    titulo: "Eficiencia Energética y Domótica",
    descripcion: "Optimización del consumo energético.",
    ruta: "/servicios/ef",
  },
];

  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 767);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container-nuestrosservicios">
      <h1 className="title-nuestrosservicios">Nuestros Servicios</h1>
      <div className="content-nuestrosservicios">
        <div className="list-section-nuestrosservicios">
          <ul>
            {servicios.map((servicio, index) => (
              <li key={index} style={{ listStyle: 'none', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', width: '220px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <FontAwesomeIcon icon={servicio.icon} size="2x" style={{ marginBottom: '10px', color: '#007bff' }} />
                  <h3 style={{ marginBottom: '10px' }}>{servicio.titulo}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#666' }}>{servicio.descripcion}</p>
                  <button
                    onClick={() => navigate(servicio.ruta)}
                    style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Conocer más
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {isDesktop && (
          <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
            <TextSlider texts={beneficios} />
          </div>
        )}
      </div>
      <TecnologiesImageSlider />
    </div>
  );
}

export default NuestrosServicios;
