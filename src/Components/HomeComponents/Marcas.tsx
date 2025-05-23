import React from 'react';
import './NuestrosClientes.css';

const images = [
  `${process.env.PUBLIC_URL}/Marcas/SE.jpeg`,
  `${process.env.PUBLIC_URL}/Marcas/simens.jpeg`,
  `${process.env.PUBLIC_URL}/Marcas/abb.jpeg`,
  `${process.env.PUBLIC_URL}/Marcas/dahua.jpeg`,

];

function Marcas() {
  return (
    <div className="containerClientes">
      <h1 className="title-nuestroClientes">MARCAS</h1>

      <div className="carousel-clientes-wrapper">
        <div className="carousel-clientes-track">
          {images.concat(images).map((img, index) => (
            <div className="carousel-clientes-item" key={index}>
              <img className="imgClientes" src={img} alt={`Cliente ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marcas;
