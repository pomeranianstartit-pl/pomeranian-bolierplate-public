import React from 'react';

import './style.css';

export function SubRouteExample({ text }) {
  return (
    <div>
      <p>Jestem przykładowym routem</p>
      {/* wpisujemy w inpucie 'readOnly bo nie ma obsługi inputa - np. onChange'a */}
      <input
        readOnly
        data-testid="textInput"
        placeholder="wpisz text"
        value={text}
      />
    </div>
  );
}
