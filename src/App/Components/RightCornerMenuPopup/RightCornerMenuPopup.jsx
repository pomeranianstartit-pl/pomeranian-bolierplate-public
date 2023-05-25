import './styles.css';

export const RightCornerMenuPop = () => {
  return (
    <div className="header-hiding-div">
      <button className="header-button-log-in">Zaloguj się</button>
      <p className="header-question">
        Nie masz konta?{' '}
        <span className="header-button-register">Zarejestruj się</span>
      </p>
    </div>
  );
};
