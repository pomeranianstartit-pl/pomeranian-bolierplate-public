import React, { useState } from 'react';

 

export const JsSetTimeout = () => {

  const [text, setText] = useState('Hello World');

 

  // Wykonaj funkcję po 1 sekundzie od załadowania komponentu 1000 = 1s

  setTimeout(() => {

    console.log('setTimeout');

    setText('Hello World 2');

  }, 1000);

 

  return <div>{text}</div>;

};

 