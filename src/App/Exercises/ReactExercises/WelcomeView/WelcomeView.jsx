import './styles.css';

export const WelcomeView = () => {
  return (
    <div>
      <div className="block-1">
        <div className="h1-text">
          <h1>Cześć!</h1>
        </div>

        <div className="input-label">
          <label>Wpisz tekst</label>
        </div>

        <div className="input-box">
          <input type="text" placeholder="tekst do wpisania" />
        </div>

        <div className="button-box">
          <button type="button">
            <p>KLIKNIJ</p>
          </button>
        </div>
      </div>

      <div className="placeholder">
        <h3>Placeholder</h3>
      </div>
    </div>
  );
};
