import { Arrow } from '../../Components/Icons/Arrow';
import './styles.css';

export function LoginBox({ handleClick }) {
  return (
    <div>
      <div className="box-arrow">
        <Arrow onClick={handleClick}></Arrow>
      </div>
      <button className="box-button">ZALOGUJ SIĘ</button>
      <div className="box-item">
        Nie masz konta? <span className="box-item2">Zarejestruj się.</span>
      </div>
    </div>
  );
}
