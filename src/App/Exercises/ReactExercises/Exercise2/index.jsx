import React, { useState } from 'react';
import './styles.css';

export const Exercise2 = () => {
  const [visible, setVisible] = useState(false);

  const buttonLabel = visible ? 'UKRYJ' : 'POKAŻ';

  return (
    <div className="exercise-2">
      <h2>See or not</h2>
      <button onClick={() => setVisible(!visible)}>{buttonLabel}</button>
      {visible && <p>Teraz mnie widać</p>}
    </div>
  );
};
