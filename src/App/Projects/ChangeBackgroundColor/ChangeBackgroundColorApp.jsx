import React from 'react';
import { useState } from 'react';
import './ChangeBackgroundColorApp.css';
import colorNames from 'colornames';

export const ChangeBackgroundColorApp = () => {
  const [actualValue, setActualValue] = useState('');
  const [actualHexValue, setActualHexValue] = useState('');

  return (
    <section>
      <div
        className="color-component"
        style={{ backgroundColor: `${actualValue ? actualValue : 'white'}` }}
      >
        <p>{actualValue ? actualValue : 'Empty Value'}</p>
        <p> {actualHexValue ? actualHexValue : null}</p>
      </div>
      <input
        type="text"
        placeholder="Add color name"
        autoFocus
        className="input-component"
        value={actualValue}
        onChange={(e) => {
          setActualValue(e.target.value);
          setActualHexValue(colorNames(e.target.value));
        }}
      />
    </section>
  );
};
