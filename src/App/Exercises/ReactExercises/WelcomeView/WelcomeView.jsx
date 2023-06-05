import React, { useState } from 'react';
import './WelcomeView.css';

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

    /* <button onClick={() => setCount(count + 1)}>
            <p>nacisnieto {count} razy</p> */

    <div className="welcomeview">
      <div className="welcomeview-inline-block">
        <div className="welcomeview-text">
          <h1>Cześć!</h1>
        </div>

        <div className="welcomeview-input">
          <label>Wpisz tekst</label>
        </div>

        <div className="welcomeview-input-box">
          <input
            type="text"
            name="welcomeview"
            placeholder="tekst do wpisania"
          />
        </div>

        <div className="welcomeview-button">
          <button type="button">
            <p>KLIKNIJ</p>
          </button>
        </div>
      </div>
      <div className="welcomeview-inline-block">
        <div className="welcomeview-placeholder-box">
          <p>Placeholder</p>
        </div>
      </div>
    </div>
  );
};
