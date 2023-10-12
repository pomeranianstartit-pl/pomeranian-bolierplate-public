import { useEffect, useState } from 'react';

export const VanishString = () => {
  const [text, setText] = useState('');

  const handleClick = () => {
    setText('Zniknięcie tekstu');
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
};
