import './styles.css';
import { MenuArrow } from '../Icons/MenuArrow';

export const RightCornerMenuPopup = () => {
  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="container">
      <div className="menu-arrow" onClick={clickHandler}>
        <img src={MenuArrow} alt="Ikona stałki" />
      </div>

      {isTrue && (
        <div className="popup-container">
          <div className="popup">
            <div className="login-box">
              <p className="login-text">Zaloguj się</p>
            </div>
            <p className="register-text">
              Nie masz konta?
              <span className="register-link">Zarejstruj się</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
