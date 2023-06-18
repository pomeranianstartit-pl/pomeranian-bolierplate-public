import React from 'react';
import './styles.css';
import { useState } from 'react';

export const GoogleFonts = ({ name }) => {
  const [font, setFont] = useState('font-lato');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleFontChange = (newFont) => {
    setShouldAnimate(true);
    setFont(newFont);

    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  };

  return (
    <div>
      <p className={`${font} ${shouldAnimate ? 'animation' : ''} wrapper`}>
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
    </div>
  );
};

export const GoogleFonts2 = () => {
  return (
    <div className="business-card">
      <section>
        <h2>Masz pytania?</h2>
        <h2>Nasz specjalista chętnie Ci pomoże.</h2>
      </section>
      <div>
        <p id="myDIV">Eleonora Frąckiewiczówna</p>
        <p>Specjalista ds. finansowania</p>
      </div>
      <a href="mailto:efrackiewoczowna@rtc.pl">efrackiewoczowna@rtc.pl</a>
      <a href="tel:500677543">500 677 543</a>
    </div>
  );
};

export const Lists = () => {
  return (
    <div className="lists">
      <h2>Sports</h2>
      <ol start="2">
        <li>Basketball</li>
        <li>Football</li>
        <li>Volleyball</li>
      </ol>
    </div>
  );
};
