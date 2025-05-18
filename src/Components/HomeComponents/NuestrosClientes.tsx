import React from 'react';
import './NuestrosClientes.css';

const images = [
  `${process.env.PUBLIC_URL}/clientes/hospitalPosadas.png`,
  `${process.env.PUBLIC_URL}/clientes/fundacionFlexer.avif`,
  `${process.env.PUBLIC_URL}/clientes/cbArquitectos.jpg`,
];

function NuestrosClientes() {
  return (
    <div className="containerClientes">
      <h1 className="title-nuestroClientes">CLIENTES</h1>

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

export default NuestrosClientes;
