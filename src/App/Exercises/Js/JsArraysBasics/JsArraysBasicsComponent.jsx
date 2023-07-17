import './styles.css';
import React, { useState } from 'react';

export const JsArraysBasicsComponent = () => {
  const myArray = ['Lemon', 'Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <ul>
      {myArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

