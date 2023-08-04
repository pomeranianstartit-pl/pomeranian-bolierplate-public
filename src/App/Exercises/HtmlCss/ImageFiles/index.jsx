import './styles.css';
import logoPomeranian from './pomeranian-icon.png';
import logoIkea from './Ikea_logo.svg.png';
import zdjecie from './zdjecie.jpg';

export function ImageFiles() {
  return (
    <div>
      <img src={logoPomeranian} alt="Pomeranian logo" />
      <img src={logoIkea} alt="Ikea logo" />
      <img src={zdjecie} alt="Zdjęcie" />
      <img src="#" alt="Brak zdjęcia" />
    </div>
  );
}
