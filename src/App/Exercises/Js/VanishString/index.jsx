import React, { useState } from 'react';
import './style.css'

export const VanishString = () => {

  const [text, setText] = useState('Hello');
  setTimeout(() => {
    console.log('setTimeout');

  setText('zniknięcie tekstu');
}, 3000);


  return (
  <div className='butt-znik'>
    <button> {text} </button>
 
  </div>
  );

};

 