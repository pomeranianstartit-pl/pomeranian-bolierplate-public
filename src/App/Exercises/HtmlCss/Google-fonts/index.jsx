import { useState } from 'react';

import './styles.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-poppins');

  function handleChangeFont() {}

  return (
    <div>
      <p className="google-fonts font-poppins">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        distinctio iste dolor quos exercitationem praesentium, facilis
        architecto laboriosam natus, dolores minus? Qui incidunt explicabo
        deserunt veniam tenetur saepe exercitationem corporis?
      </p>

      <button>Change font</button>
    </div>
  );
}
