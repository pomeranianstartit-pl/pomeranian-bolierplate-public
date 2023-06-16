import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');

  function handleFontChange(newFont) {
    setFont(newFont);
  }
  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div>
      <p className={`${font} ${theme} wrapper`}>
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
      <button onClick={() => handleThemeChange('light-theme')}>
        Change the font to: Light
      </button>
      <button onClick={() => handleThemeChange('dark-theme')}>
        Change the font to: Dark
      </button>
    </div>
  );
}
