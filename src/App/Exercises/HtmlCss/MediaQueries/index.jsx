import './styles.css';

export function Exercise() {
  return (
    <div className="media-queries">
      <h1>Media Queries</h1>

      <div className="buttons-container">
        <div className="buttons">
          <button>Pierwszy</button>

          <button>Drugi</button>
        </div>

        <p>
          Te buttony powinny byc w wierszu na urzadzeniach powyzej 800px, a w
          kolumnie na mniejszych niz 800px
        </p>
      </div>

      <div className="fonts">
        <h2>Header zalezny od szerokosci ekranu</h2>

        <p>Font zalezny od szerokosci ekranu</p>
      </div>

      <div className="visibleInPrint">
        <p>Ten tekst powinien być widoczny tylko w druku</p>
      </div>

      <div className="visibleOnMobile">
        <p>Ten tekst powinien być widoczny tylko na urządzeniach mobilnych</p>
      </div>
    </div>
  );
}
