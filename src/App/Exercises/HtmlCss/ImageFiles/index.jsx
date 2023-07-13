import './styles.css';
import logo from './pomeranian-icon.png';
import logoIkea from './Ikea_logo.svg';
import miasto from './miasto.jpg';

export function Exercise() {
  return (
    <div>
      <img src={logo} alt="pomeranian logo" />
      <img src={logoIkea} alt="Ikea logo" />
      <img src={miasto} alt="zdjecie" />
    </div>
  );
}
