import { Arrow } from '../Components/Icons/Arrow';
import './styles/logbox.css';
// import { Link } from 'react-router-dom';

export function LogBox({ handleClick }) {
  return (
    <div className="logBox-style">
      <div className="logBox-arrow" onClick={handleClick}>
        <Arrow />
      </div>
      <div>
        <button className="Logging-button">ZALOGUJ SIĘ</button>
      </div>
      <div className="logBox-description">
        <div className="logBox-description-quest">Nie masz konta?</div>
        <div className="logBox-description-register">Zarejestruj się</div>
      </div>
    </div>
  );
}
