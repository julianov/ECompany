import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<number | null>(null); // ✅ CORREGIDO

  const images = [
    `${process.env.PUBLIC_URL}/BIM.jpg`,
    `${process.env.PUBLIC_URL}/hmercante.jpeg`,
  ];

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => { // ✅ Uso explícito de window.setInterval
      setFade(false);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setFade(true), 4000);
    stopAutoPlay();
    startAutoPlay();

    return () => {
      clearTimeout(timeout);
      stopAutoPlay();
    };
  }, [index]);

  const goToSlide = (i: number) => { // ✅ CORREGIDO
    stopAutoPlay();
    setFade(false);
    setIndex(i);
  };

  return (
    <div className="slider-container">
      <img
        className={`img-slider ${fade ? 'fade-out' : ''}`}
        src={images[index]}
        alt={`Slide ${index}`}
      />
      <div className="slider-controls">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
