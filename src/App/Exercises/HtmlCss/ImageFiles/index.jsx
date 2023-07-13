import './styles.css';

import logoPomeranian from './pomeranian-icon.png';

import logoIkea from './logo-ikea.svg';

import zdjecie from './zdjecie.jpg';

import { RoundImage } from '../../../Components/RoundImage/RoundImage';




export function ImageFiles() {

  return (

    <div>

      <img src={logoPomeranian} alt="Pomeranian logo" />

      <img src={logoIkea} alt="Ikea logo" />

      <img src={zdjecie} alt="Zdjęcie" />




      <RoundImage src={zdjecie} size="150px" />
      <RoundImage src={zdjecie} size="300px" />

    </div>

  );

}