import React from 'react';
import './NuestrosClientes.css';

function NuestrosClientes() {
  return (
    <div className="containerClientes">
      <h1 className="title-nuestroClientes">Clientes</h1>

      <div id="contentNuestrosClientes">
        <div id="containerCenter">
          <img className="imgClientes" src={process.env.PUBLIC_URL + "/entre-rios-cliente.png"} alt="Cliente Entre Ríos" />
        </div>
        <div id="containerCenter">
          <img className="imgClientes" src={process.env.PUBLIC_URL + "/utn-cliente.png"} alt="Cliente UTN" />
        </div>
        <div id="containerCenter">
          <img className="imgClientes" src={process.env.PUBLIC_URL + "/Edenor-cliente.png"} alt="Cliente UTN" />
        </div>
      </div>

    </div>
  );
}


export default NuestrosClientes;