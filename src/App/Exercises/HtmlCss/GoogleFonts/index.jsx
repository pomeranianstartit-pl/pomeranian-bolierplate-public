import { useState } from 'react';

import './styles.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-Montserrat');

  function handleChangeFont() {
    setFont('font-Ysabeau');
  }

  return (
    <div>
      <p className={`${font}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        distinctio iste dolor quos exercitationem praesentium, facilis
        architecto laboriosam natus, dolores minus? Qui incidunt explicabo
        deserunt veniam tenetur saepe exercitationem corporis?
      </p>
      <p>{font}</p>
      <button onClick={() => handleChangeFont()}>Change font</button>
    </div>
  );
}
