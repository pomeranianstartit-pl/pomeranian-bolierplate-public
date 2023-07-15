import React from 'react';

import './style.css';

export function Exercise4Advanced() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function handleOnChangeA(event) {
    setA(event.target.value);
  }
  function handleOnChangeB(event) {
    setB(event.target.value);
  }

  return (
    <div className="rows">
      <h2>Czy A jest większe od B?</h2>

      <div>
        <form>
          <input
            class="no-spinner"
            type="number"
            placeholder="A"
            onChange={handleOnChangeA}
            defaultValue={0}
          />
          <input
            class="no-spinner"
            type="number"
            placeholder="B"
            onChange={handleOnChangeB}
            defaultValue={0}
          />
          <p>Odpowiedź: {a > b ? 'Tak' : 'Nie'}</p>
        </form>
      </div>
    </div>
  );
}
