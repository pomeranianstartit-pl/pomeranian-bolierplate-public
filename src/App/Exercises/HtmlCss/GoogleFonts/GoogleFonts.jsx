import React from 'react';
import { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleFontChange = (newFont) => {
    setShouldAnimate(true);
    setFont(newFont);

    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <p
        className={`${font} ${theme} ${
          shouldAnimate ? 'animation' : ''
        }  wrapper`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet
        voluptas natus in exercitationem tenetur itaque nobis eaque, totam rerum
        non eos, dolorem quibusdam earum, commodi vel repudiandae aliquam odio?
      </p>

      <button onClick={() => setShouldAnimate(true)}>animuj</button>
      <button onClick={() => setShouldAnimate(false)}>stop</button>
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

export const Exercise2 = () => {
  return (
    <div className="business-card">
      <section>
        <h2>Masz pytania?</h2>
        <h2>Nasz specjalista chętnie Ci pomoże.</h2>
      </section>
      <section>
        <p>Eleonora Frąckiewiczówna</p>
        <p>Specjalista ds. finansowania</p>
      </section>
      <a href="mailto:efrackiewoczowna@rtc.pl">efrackiewoczowna@rtc.pl</a>
      <a href="tel:500677543">500 677 543</a>
    </div>
  );
};

export const Exercise3 = () => {
  return (
    <div className="lists">
      <h2>My pets</h2>
      <ol start="2">
        <li>Elmo</li>
        <li>Zilla</li>
        <li>Mufin</li>
      </ol>
    </div>
  );
};
