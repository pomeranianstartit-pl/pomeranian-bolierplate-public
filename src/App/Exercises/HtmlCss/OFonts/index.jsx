import './styles.css';

import React, { useState } from 'react';
<link
  href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins&family=Qwitcher+Grypen&family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
  rel="stylesheet"
></link>;

export function Exercise() {
  const [fontName, setFontName] = useState('Poppins');

  const handleClick = (event) => {
    setFontName(event.target.className);
    console.log('wybrana czcionka: ' + event.target.className);
  };

  return (
    <>
      <button className="Poppins" onClick={handleClick}>
        Poppins
      </button>
      <span> </span>
      <button className="Roboto" onClick={handleClick}>
        Roboto
      </button>
      <span> </span>
      <button className="Black Ops One" onClick={handleClick}>
        Black Ops One
      </button>
      <span> </span>
      <button className="Qwitcher Grypen" onClick={handleClick}>
        Qwitcher Grypen
      </button>
      <p style={{ fontFamily: fontName }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        // temporibus nemo dolor voluptates obcaecati labore cupiditate vero //
        sapiente expedita, laboriosam nisi assumenda, amet impedit ab in ipsum
        // officiis. Corrupti, officiis?.. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Repudiandae, // temporibus nemo dolor
        voluptates obcaecati labore cupiditate vero // sapiente expedita,
        laboriosam nisi assumenda, amet impedit ab in ipsum // officiis.
        Corrupti, officiis?..Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Repudiandae, // temporibus nemo dolor voluptates obcaecati labore
        cupiditate vero // sapiente expedita, laboriosam nisi assumenda, amet
        impedit ab in ipsum // officiis. Corrupti, officiis?..Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae, // temporibus nemo
        dolor voluptates obcaecati labore cupiditate vero // sapiente expedita,
        laboriosam nisi assumenda, amet impedit ab in ipsum // officiis.
        Corrupti, officiis?..
      </p>
    </>
  );
}
