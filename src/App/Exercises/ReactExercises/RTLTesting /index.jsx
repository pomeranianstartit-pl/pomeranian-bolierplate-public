import { useState } from 'react';

export const RTLTesting = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <h1>RTL Testing</h1>
      <button data-testid="visible-button" onClick={handleClick}>
        Wyświetl!
      </button>
      <p>Sprawdzamy czy ten element jest w strukturze</p>
      <span data-testid="visible-element">
        {isVisible && <p data-testid="show-element">Widoczny element</p>}
      </span>

      {isVisible && <div data-testid="div-element">Test!</div>}
    </div>
  );
};
