
import React from 'react';
import './TecnologiesImageSlider.css';

interface Props {}

const images = [
  `${process.env.PUBLIC_URL}/tecnologias/linux.png`,
  `${process.env.PUBLIC_URL}/tecnologias/android.png`,
  `${process.env.PUBLIC_URL}/tecnologias/ios.png`,
  `${process.env.PUBLIC_URL}/tecnologias/aws.png`,
  `${process.env.PUBLIC_URL}/tecnologias/azure.png`,
  `${process.env.PUBLIC_URL}/tecnologias/firebase.png`,
  `${process.env.PUBLIC_URL}/tecnologias/kubernetes.png`,
  `${process.env.PUBLIC_URL}/tecnologias/docker.png`,
  `${process.env.PUBLIC_URL}/tecnologias/oracle.png`,
  `${process.env.PUBLIC_URL}/tecnologias/postgres.png`,
  `${process.env.PUBLIC_URL}/tecnologias/laravel.png`,
  `${process.env.PUBLIC_URL}/tecnologias/django.png`,
  `${process.env.PUBLIC_URL}/tecnologias/pwa.png`,
];

const TecnologiesImageSlider: React.FC<Props> = () => {
  return (

    <div className="container-tecnologias" >

    <h1 className="title-nuestrosservicios">Tecnologías</h1>

    <div className="image-gallery">

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="image"
        />
      ))}
    </div>
  </div>
  );
};

export default TecnologiesImageSlider;