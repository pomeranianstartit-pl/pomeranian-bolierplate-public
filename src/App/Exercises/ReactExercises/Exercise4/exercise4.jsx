import React from 'react';

import './style.css';

export function Exercise4() {
  const [text, setText] = React.useState('Odpowiedź: Tak/Nie');

  function handleOnChange(event) {
    const A = event.target.value;
    if (A <= 10) {
      setText('Nie');
    } else {
      setText('Tak');
    }
  }
  return (
    <div className="rows">
      <h2>Czy A jest większe od 10?</h2>

      <div>
        <form>
          <input
            class="no-spinner"
            type="number"
            placeholder="A"
            onChange={handleOnChange}
          />
          <p>{text}</p>
        </form>
      </div>
    </div>
  );
}
