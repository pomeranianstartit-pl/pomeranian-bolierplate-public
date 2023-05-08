import React, { useState } from 'react';

import './style.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

export function Exercise3() {
  const [isBigger, setIsBigger] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [newValue, setNewValue] = useState(0);

  // const twoCalls = (event) => {
  //   setEventNewValue(event);
  //   handleChange();
  // };
  const handleChange = (event) => {
    setNewValue(event.target.value);
  };
  const chekingFunction = () => {
    if (newValue > 10) {
      setIsBigger(true);
      setIsEmpty(true);
    } else if (newValue === '') {
      setIsEmpty(false);
    } else {
      setIsBigger(false);
      setIsEmpty(true);
    }
  };
  const text = isBigger ? 'Tak, jest wieksza' : 'Nie, jest mmiejsza';
  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input type="number" onChange={handleChange} />
      {isEmpty && <p>{text}</p>}
    </div>
  );
}
