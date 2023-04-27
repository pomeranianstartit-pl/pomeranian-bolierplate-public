import './styles.css';
import React, { useState } from 'react';

export const WelcomeView = () => {
  const [value, setValue] = useState('');
  const [click, setClick] = useState(0);

  function getInputValue(e) {
    setValue(e.target.value);
  }

  function getClick() {
    setClick((prev) => prev + 1);
  }

  return (
    <div className="welcome-wrapper">
      <h2 className="welcome-title">Cześć!</h2>
      <div className="welcome-left_div">
        <p>Wpisz text</p>
        <input
          type="text"
          placeholder="text do wpisania"
          onChange={(e) => getInputValue(e)}
        />
        <button onClick={() => getClick()}>
          {click === 0 ? 'KLIKNIJ' : `KLIKNIETO  ${click} RAZY`}
        </button>
      </div>
      <div className="welcome-right_div">
        <p>{value.length === 0 ? 'Placeholder' : `Wpisałeś:  ${value}`}</p>
      </div>
    </div>
  );
};
