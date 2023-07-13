import './styles.css';
import logo from './Logo-pomeranian.png';
import logoIkea from './logo-ikea.svg';
export function ImageFiles() {
  return (
    <div>
      <img src={logo} alt="Logo pomeranian" />
      <img src={logoIkea} alt="ikea-logo" />
    </div>
  );
}
