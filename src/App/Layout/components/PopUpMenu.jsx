import { ArrowDown } from '../../Components/Icons/Arrow';
import '../styles/header.css';

export function PopUpMenu({ func }) {
  return (
    <div className="login-menu">
      <div className="arrow-line">
        <ArrowDown onClick={func} className="arrow arrow-up" />
      </div>
      <button className="login-button">zaloguj się</button>
      <div>
        Nie masz konta? <span> Zarejestruj się</span>
      </div>
    </div>
  );
}
