import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  function handleFontChange(newFont) {
    setShouldAnimate(true);
    setFont(newFont);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  }
  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }
  return (
    <div className={theme}>
      <p className={`${font} ${theme} ${shouldAnimate ? 'animation' : ''}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={() => handleFontChange('font-lato')}>
        Change font to: Lato{' '}
      </button>
      <br />
      <button onClick={() => handleFontChange('font-poppins')}>
        Change font to: Poppins{' '}
      </button>
      <br />
      <br />
      <button onClick={() => handleThemeChange('light-theme')}>
        Change theme to: light{' '}
      </button>
      <br />
      <button onClick={() => handleThemeChange('dark-theme')}>
        Change theme to: dark{' '}
      </button>
      <button onClick={() => setShouldAnimate(true)}>Animuj</button>
      <button onClick={() => setShouldAnimate(false)}>Stop Animuj</button>
    </div>
  );
}
export const Exercise = () => {
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
export const Lists = () => {
  return (
    <div className="list">
      <h2>My Pets</h2>
      <ol start={2}>
        <li>Rengar</li>
        <li>Kha'zix</li>
        <li>Pikachu</li>
        <li>Gengar</li>
      </ol>
      <dl>
        <dt>tato</dt>
        <dd>tato jest super</dd>
      </dl>
      <details>
        <summary>untitle</summary>
        dużo tekstu do rozwijania jak się chce
      </details>
    </div>
  );
};
