import React from 'react';

import './style.css';

export function MoreOrLess() {
  const [isGreater, setIsGreater] = React.useState(false);

  function handleOnChange(event) {
    const a = event.target.value;

    if (a > 10) {
      setIsGreater(true);
    } else {
      setIsGreater(false);
    }
  }

  return (
    <div>
      <h2>Czy A jest większe od 10?</h2>

      <input
        onChange={handleOnChange}
        type="number"
        placeholder="A"
        defaultValue={0}
      />

      <p>Odpowiedź: {isGreater ? 'TAK' : 'NIE'}</p>
    </div>
  );
}
