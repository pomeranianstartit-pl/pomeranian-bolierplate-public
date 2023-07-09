import React from 'react';

import './style.css';

export function MoreOrLess() {
  const [isGreater, setisGreater] = React.useState(false);

  function handleOnChange(event) {
    const userNumber = event.target.value;

    if (userNumber > 10) {
      setisGreater(true);
    } else {
      setisGreater(false);
    }
  }

  return (
    <div>
      <h2>Czy A jest większe od 10</h2>

      <div className="columns">
        <input
          type="number"
          placeholder="A"
          defaultValue={0}
          onChange={handleOnChange}
        />
        <p>Odpowiedź: {isGreater ? 'TAK' : 'NIE'}</p>
      </div>
    </div>
  );
}
