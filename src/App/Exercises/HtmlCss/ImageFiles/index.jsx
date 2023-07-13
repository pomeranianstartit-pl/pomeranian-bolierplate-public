import './styles.css';
import logo from './Logo-pomeranian.png';
import logoIkea from './Ikea-logo.svg';
import images from './images.jpeg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';
export function ImageFiles() {
  return (
    <div>
      <img src={logo} alt="Logo pomeranian" />
      <img src={logoIkea} alt="Ikea logo" />
      <img src={images} alt="images" />

      <RoundImage src={images} />
    </div>
  );
}
