import './styles.css';

export const WelcomeView = () => {
  return (
    <div>
      <h1 className="headerH1">Cześć!</h1>
      <h2 className="headerButton">Wpisz tekst</h2>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
        <button type="submit">KLIKNIJ</button>
      </form>
    </div>
  );
};
