
import React, { useState } from 'react';
import './styles.css';

export const WelcomeView = () => {
  const [x, setCount] = useState('pusto');

  function getInputValue(parametr) {
    console.log('funkcja działa', parametr.target.value);
    setCount(parametr.target.value);
  }

  function buttonClicked() {
    console.log('button działa');
  }

  return (
    <div className="one-line">
      <div>
        <div>
          <h1 className="welcome-view"> Cześć</h1>
        </div>
        <div>
          <h5> Wpisz tekst</h5>
        </div>
        <div>
          <input
            placeholder="text"
            classname="input"
            type="text"
            onChange={(e) => getInputValue(e)}
          ></input>
        </div>
        <div>
          <button className="button" onClick={() => buttonClicked()}>
            Kliknij
          </button>
        </div>
      </div>

      <div>{x}</div>
      <div>
        <button className="button" onClick={() => buttonClicked()}>
          Kliknij we mnie x razy
        </button>
      </div>
    </div>
  );
};

