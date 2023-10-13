import React, { useState } from 'react';

export const VanishString = () => {
  const [text, setText] = useState('Zniknięcie tekstu');
  setTimeout(() => {
    console.log('setTimeout');

    setText('      ');
  }, 3000);

  return (
    <div className="butt">
      <button>{text}</button>
    </div>
  );
};

// rozwiązanie od SS
/*import { useEffect, useState } from 'react';

 

export const Timer = () => {

  const [text, setText] = useState('');

 

  const handleClick = () => {

    setText('Hello World');

  };

 

  useEffect(() => {

    setTimeout(() => {

      setText('');

    }, 3000);

  }, [text]);

 

  return (

    <div>

      <button onClick={handleClick}>Wyświetl tekst</button>

 

      {text && <div>{text}</div>}

    </div>

  );

}; */
