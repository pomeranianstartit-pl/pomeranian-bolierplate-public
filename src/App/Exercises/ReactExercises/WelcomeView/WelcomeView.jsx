import './styles.css';

export const WelcomeView = () => (
  <div className="one-line">
    <div>
      <div>
        <h1 className="welcome-view"> Cześć</h1>
      </div>
      <div>
        <h5> Wpisz tekst</h5>
      </div>
      <div>
        <input classname="input" type="text"></input>
      </div>
      <div>
        <button className="button">Kliknij</button>
      </div>
    </div>

    <div>Placeholder</div>
  </div>
);
