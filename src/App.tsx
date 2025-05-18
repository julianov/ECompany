import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';

// Importá los componentes de servicios
import Electrico from './Components/ServicesComponents/electrico';
import Generacion from './Components/ServicesComponents/generacion';
import Iluminacion from './Components/ServicesComponents/iluminacion';
import Datos from './Components/ServicesComponents/datos';
import CCTV from './Components/ServicesComponents/cctv';
import FA from './Components/ServicesComponents/fa';
import EF from './Components/ServicesComponents/ef';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/electrico" element={<Electrico />} />
          <Route path="/servicios/generacion" element={<Generacion />} />
          <Route path="/servicios/iluminacion" element={<Iluminacion />} />
          <Route path="/servicios/datos" element={<Datos />} />
          <Route path="/servicios/cctv" element={<CCTV />} />
          <Route path="/servicios/fa" element={<FA />} />
          <Route path="/servicios/ef" element={<EF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;