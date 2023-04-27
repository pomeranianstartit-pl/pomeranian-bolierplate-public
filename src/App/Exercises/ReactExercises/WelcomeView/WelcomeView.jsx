import React, { useState } from 'react';
import './styles.css';

export const WelcomeView = () => {
  const [count, setCount] = useState(0);

  // function getInputValue(parametr) {
  //  console.log('funkcja dziala', parametr.target.value);
  //  setCount(parametr.target.value);
  /// }

  return (
    // <div className="welcome-view">
    // <input
    //  placeholder="text"
    //  onChange={(e) => console.log(getInputValue(e))}
    // />
    //<button onClick={() => buttonClicked()}>Kliknieto we mnie {x}</button>
    // <div>wartosc inputa: {x}</div>
    // </div>
    <div>
      <div className="block-1">
        <div className="h1-text">
          <h1>Cześć!</h1>
        </div>

        <div className="input-label">
          <label>Wpisz tekst</label>
        </div>

        <div className="input-box">
          <input type="text" placeholder="tekst do wpisania" />
        </div>

        <div className="button-box">
          <button onClick={() => setCount(count + 1)}>
            <p>nacisnieto {count} razy</p>
          </button>
        </div>
      </div>

      <div className="placeholder">
        <h3>Placeholder</h3>
      </div>
    </div>
  );
};
