import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimate2, setShouldAnimate2] = useState(false);

  function handleFontChange(newFont) {
    setFont(newFont);
    setShouldAnimate(false);
    setShouldAnimate2(false);

    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  }

  return (
    <div>
      <p className={`${font} ${shouldAnimate ? 'animation' : ''} wrapper`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
        laboriosam autem distinctio iste in, doloribus corporis accusamus
        voluptatum, ex cumque temporibus reiciendis atque! Dolorum laboriosam
        sequi ex vitae cum.
      </p>
      <button onClick={() => handleFontChange('font-poppins')}>
        Change the font to: Poppins
      </button>
      <button onClick={() => handleFontChange('font-lato')}>
        Change the font to: Lato
      </button>
      <button onClick={() => setShouldAnimate(true)}>Animuj</button>
      <button onClick={() => setShouldAnimate(false)}>Stop animacji</button>

      <h1>CSS Animation</h1>
      <div className={`${shouldAnimate2 ? 'animatedSquare' : ''}`}></div>
      <button onClick={() => setShouldAnimate2(true)}>Włącz</button>
      <button onClick={() => setShouldAnimate2(false)}>Wyłącz</button>
    </div>
  );
}
