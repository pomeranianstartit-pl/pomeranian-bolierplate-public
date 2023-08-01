import './styles.css';
import { useState } from 'react';

export const VanishString = () => {

  const [isVisible, setIsVisible] = useState(false)


  function handleShow() {

    setIsVisible(!isVisible)

  }
  return (
    <div>
      <h1>znikajacy text</h1>
      <button onClick={handleShow}>Zniknij</button>
      <p>{isVisible && 'Jakiś text'}</p>
    </div>
  );
};
