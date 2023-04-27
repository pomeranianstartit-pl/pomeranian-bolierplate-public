import './styles.css';

export const WelcomeView = () => {
  return (
    <div className="welcome-wrapper">
      <h2 className="welcome-title">Cześć!</h2>
      <div className="welcome-left_div">
        <p>Wpisz text</p>
        <input type="text" placeholder="text do wpisania" />
        <button>KLIKNIJ</button>
      </div>
      <div className="welcome-right_div">
        <p>Placeholder</p>
      </div>
    </div>
  );
};
