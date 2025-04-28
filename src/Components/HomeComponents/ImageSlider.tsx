import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const images = [
      `${process.env.PUBLIC_URL}/BIM.jpg`,
      `${process.env.PUBLIC_URL}/quirofanos_zerboni_3d_revit.png`,
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index + 1) % images.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, [index, images.length]);
  
    return (
      <><div>
          <img className="img-slider" src={images[index]} alt="Slider" />
        </div>
        </>

    );
  };
  
  export default ImageSlider;
  // creamos un componente ImageSlider que mantiene el índice actual de la imagen en un estado (index) y una lista de imágenes (images). Usamos useEffect para establecer un intervalo de tiempo que actualiza el índice de la imagen cada 5 segundos (5000 milisegundos). Finalmente, renderizamos la imagen actual en un elemento img.
  
  
  
  
  