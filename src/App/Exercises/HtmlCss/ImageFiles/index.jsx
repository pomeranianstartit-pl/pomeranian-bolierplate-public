import './styles.css';

import pomeranian from './pomeranian-icon.png';

import Ikea from './Ikea_logo.svg';
import zdjęcie from './tree.jpg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function Exercise() {
  return (
    <div>
      <img src={pomeranian} alt="Pomeranian logo" />

      <img src={Ikea} alt="Ikea logo" />

      {/* <img src={zdjecie} alt="Zdjęcie" />

      <img src="#" alt="Brak zdjęcia" /> */}

      <RoundImage src={zdjęcie} size="150px" />
      <RoundImage src={zdjęcie} size="300px" />
    </div>
  );
}
