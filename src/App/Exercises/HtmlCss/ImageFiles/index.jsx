import './styles.css';
import ikea_logo from './Ikea_logo.svg';
import pomeranian from './pomeranian.png';
import flowers from './flowers.jpg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ImageFiles() {
  return (
    <div>
      <img src={ikea_logo} alt="ikea logo"></img>
      <img src={pomeranian} alt="pomeranian logo"></img>
      <img className="flowers-image" src={flowers} alt="flowers image"></img>
      <RoundImage src={flowers} size="300px" />
    </div>
  );
}
