import './styles.css';
import { useState } from 'react';

export const GoogleFonts = ({ name }) => {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');

  const handleFontChange = (newFont) => {
    setFont(newFont);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <p className={`${font} ${theme} wrapper`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa natus
        saepe esse qui at adipisci recusandae error optio voluptatibus, quaerat,
        consequatur, cum eius corrupti excepturi ad quidem provident eum odit!
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
        Change the theme to: dark
      </button>
    </div>
  );
};
