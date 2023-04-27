import './styles.css';

export const WelcomeView = () => {
  return (
    <div className="welcome-view">
      <h2 className="header1">Cześć!</h2>
      <h3 className="header2">Wpisz tekst</h3>
      <input className="typing-window" placeholder="tekst do wpisania"></input>
      <br />
      <input className="button" type="button" value="Kliknij"></input>
    </div>
  );
};
