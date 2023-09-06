import { useState, useRef } from 'react';

export const CalculatorApp = () => {
  const [number, setNumber] = useState(0);
  const handleAdd = () => {
    const sum = number + 4;
    return sum;
  };
  const handleClick = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <div className="display">{number}</div>

      <button onClick={handleAdd}>+</button>
      <button value={1} onClick={handleClick}>
        1
      </button>
      <button value={2} onClick={handleClick}>
        2
      </button>
      <button value={3} onClick={handleClick}>
        3
      </button>
      <button value={4} onClick={handleClick}>
        4
      </button>
    </div>
  );
};
