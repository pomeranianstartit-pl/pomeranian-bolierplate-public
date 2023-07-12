import React, { useState } from 'react';

import './styles.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-Dancing-Script');

  function handleOnChangeFont() {
    if (font === 'font-Dancing-Script') {
      return setFont('font-Source-Code-Pro');
    }
    return setFont('font-Dancing-Script');
  }

  return (
    <div>
      <p className={`${font}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        distinctio iste dolor quos exercitationem praesentium, facilis
        architecto laboriosam natus, dolores minus? Qui incidunt explicabo
        deserunt veniam tenetur saepe exercitationem corporis?
      </p>
      <button onClick={handleOnChangeFont}>Font Change</button>
    </div>
  );
}
