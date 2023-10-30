import React, { useState } from 'react';

export const JsSetTimeout = () => {
  const [text, setText] = useState('Hello World');

  // Wykonaj funkcje po 1 sekundzie od zaladowania komponentu

  setTimeout(() => {
    console.log('setTimeout');
    setText('Hello World 2');
  }, 1000);

  // clearTimeout(test);

  return <div>{text}</div>;
};
