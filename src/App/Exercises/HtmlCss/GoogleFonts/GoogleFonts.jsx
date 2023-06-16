import React from 'react';
import { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <p className={`${font} ${theme} wrapper`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet
        voluptas natus in exercitationem tenetur itaque nobis eaque, totam rerum
        non eos, dolorem quibusdam earum, commodi vel repudiandae aliquam odio?
      </p>
      <button onClick={() => handleFontChange('font-poppins')}>
        Change the font to: Poppins
      </button>
      <button onClick={() => handleFontChange('font-lato')}>
        Change the font to: Lato
      </button>
      <button onClick={() => handleThemeChange('light-theme')}>
        Change the theme to: light
      </button>
      <button onClick={() => handleThemeChange('dark-theme')}>
        Change the font to: dark
      </button>
    </>
  );
}
