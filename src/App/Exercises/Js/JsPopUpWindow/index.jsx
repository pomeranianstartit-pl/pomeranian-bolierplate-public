import './styles.css';

import React, { useState } from 'react';

export const JsPopUpWindow = () => {
  const [text, setText] = useState('');

  // Wykonaj funkcję po 1 sekundzie od załadowania komponentu

  setTimeout(() => {
    console.log('setTimeout');

    setText('Attention');
  }, 3000);

  return <div className="popUp">{text}</div>;
};
