import React from 'react';

import './style.css';

export function Cwiczenie4() {
  const [isGrater, setIsGrater] = React.useState(false);

  function handleOnChange(event) {
    const userNumber = event.target.value;
    if (userNumber > 10) {
      setIsGrater(true);
    } else {
      setIsGrater(false);
    }
  }
  return (
    <div>
      <h2>Czy A jest większe od 10?</h2>
      <div className="columns">
        <form>
          <input
            type="number"
            placeholder="A"
            onChange={handleOnChange}
            defaultValue={0}
          ></input>
        </form>

        <p>Odpowiedź: {isGrater === true ? 'TAK' : 'NIE'}</p>
      </div>
    </div>
  );
}
