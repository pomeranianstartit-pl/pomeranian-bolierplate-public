import React from 'react';

import png from '../../../Images/pikachu.png';
import jpg from '../../../Images/tiger.jpg';
import gif from '../../../Images/panda.gif';
import { RoundImage } from '../../../Components/RoundImage/RoungImage';

import './style.css';

export function ExerciseImages() {
  const images = [
    {
      title: 'To jest png!',
      src: png,
      width: 50,
      height: 50,
      color: 'red',
      margin: '100px',
    },
    {
      title: 'To jest jpg!',
      src: jpg,
      width: 150,
      height: 150,
      color: 'yellow',
      margin: '400px',
    },
    {
      title: 'To jest gif!',
      src: gif,
      width: 250,
      height: 250,
      color: '#4F5',
      margin: '200px',
    },
  ];

  return (
    <div>
      {images.map((el) => (
        <RoundImage
          title={el.title}
          src={el.src}
          width={el.width}
          height={el.height}
          color={el.color}
          margin={el.margin}
        />
      ))}
    </div>
  );
}
