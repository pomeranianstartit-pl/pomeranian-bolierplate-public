import React from 'react';
import { useState } from 'react';
import './ChangeBackgroundColorApp.css';

export const ChangeBackgroundColorApp = () => {
  const [actualValue, setActualValue] = useState('');

  return (
    <div>
      <div
        className="color-component"
        style={{ backgroundColor: `${actualValue ? actualValue : 'white'}` }}
      >
        {actualValue ? actualValue : 'Empty Value'}
      </div>
      <input
        type="text"
        placeholder="Add color name"
        autoFocus
        className="input-component"
        value={actualValue}
        onChange={(e) => setActualValue(e.target.value)}
      />
    </div>
  );
};
