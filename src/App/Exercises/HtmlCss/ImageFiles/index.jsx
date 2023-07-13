import './styles.css';

import pomeranian from './pomeranian-icon.png';

import Ikea from './Ikea_logo.svg';

export function Exercise() {
  return (
    <div>
      <img src={pomeranian} alt="Pomeranian logo" />

      <img src={Ikea} alt="Ikea logo" />

      {/* <img src={zdjecie} alt="Zdjęcie" />

      <img src="#" alt="Brak zdjęcia" /> */}
    </div>
  );
}
