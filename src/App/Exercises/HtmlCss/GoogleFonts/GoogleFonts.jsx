import './styles.css';
import { useState } from 'react';

export const GoogleFonts = ({ name }) => {
  const [font, setFont] = useState('font-lato');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleFontChange = (newFont) => {
    setShouldAnimate(true);
    setFont(newFont);

    setTimeout ( () => {
    setShouldAnimate(false);
    }, 2 * 1000);

  };



  return (
    <div>
      <p className={`${font} ${shouldAnimate ? 'animation' : ''} 'wrapper`}>
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
