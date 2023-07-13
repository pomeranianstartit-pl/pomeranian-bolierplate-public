import './styles.css';
import ikea_logo from './Ikea_logo.svg';
import pomeranian from './pomeranian.png';
import flowers from './flowers.jpg';

export function Backgrounds() {
  return (
    <div>
      <img width="100" src="/sea.jpg" alt="see picture"></img>
      <div className="background-url"></div>
      <div className="background-url-2"></div>
      <div className="background-url-3"></div>
    </div>
  );
}
