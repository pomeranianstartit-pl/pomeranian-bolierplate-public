import { useState } from 'react';
import './styles.css';

export function sum(a, b) {
  return a + b;
}

export const handleOnClick = (setIsVisible, isVisible) => {
  setIsVisible(!isVisible);
};

export const Testing = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Testing Jest</h1>
      <p>Funkcja sum wynik: {sum(2, 3)}</p>
      <button onClick={() => handleOnClick(setIsVisible, isVisible)}>
        Kliknij
      </button>
      <p>Visible or not {isVisible && <span>Widać</span>}</p>
    </div>
  );
};
