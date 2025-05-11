
import React from 'react';
import './ProyectosDestacados.css';

interface Props {}

const images = [
  `${process.env.PUBLIC_URL}/proyectosdestacados/HP-NACC.png`,
  `${process.env.PUBLIC_URL}/proyectosdestacados/Acabio.png`,
  
];

const Proyectos = [
  "Área de atención exclusiva para Adolescentes y Jóvenes con Cáncer", 
  "9MVA Cogeneración"
];

const DescripcionProyectos = [
  "Fundación Natali Dafne Flexer - Hospital Posadas",
  "Acabio"
];

const ProyectosDestacados: React.FC<Props> = () => {
  return (
    <div className="container-tecnologias">
      <h1 className="title-nuestrosservicios">Proyectos destacados</h1>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Proyecto ${index + 1}`} className="carousel-image" />
              <h3 className="carousel-title">{Proyectos[index]}</h3>
              <p className="carousel-subtitle">{DescripcionProyectos[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectosDestacados;