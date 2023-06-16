import { useState } from 'react';
import './styles.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');

  function handleFontChange(newFont) {
    setFont(newFont);
  }
  return (
    <div>
      {' '}
      <p className={font}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
        scelerisque mauris. Quisque accumsan lacinia tincidunt. Praesent
        malesuada orci odio, a tempus nisl semper vel. Suspendisse sollicitudin
        neque eu malesuada luctus. Mauris luctus lacus dignissim, iaculis felis
        sit amet, sagittis diam. Quisque dignissim tincidunt elit eu malesuada.
        Aliquam augue lacus, faucibus ac sem interdum, faucibus suscipit justo.
        Etiam quis ornare mi. Mauris in blandit ligula. Sed ut elementum dui.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae;
      </p>
      <button onClick={() => handleFontChange('font-poppins')}>
        Change the font to Poppins
      </button>
      <button onClick={() => handleFontChange('font-lato')}>
        Change the font to Lato
      </button>
    </div>
  );
}
