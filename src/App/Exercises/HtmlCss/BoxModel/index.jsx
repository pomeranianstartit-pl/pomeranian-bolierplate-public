import './styles.css';

export function Exercise() {
  const isVisible = true;
  return (
    <div>
      BoxModel:
      <div className="div_nr1">Przykładowy div</div>
      <p className="p_nr1">Przykładowy p</p>
      <h1 className="h1_nr1">Przykładowy h1</h1>
      <span className="span_nr1">Przykładowy span</span>
      <p>
        <div className="div_nr1">Przykładowy div</div>
        przykładowy tekst
        <span className="span_nr1">Przykładowy span</span>
      </p>
      {/* IF statement */}
      <div style={{ display: 'none' }} className="div_nr1">
        Przykładowy div - display: none
      </div>
      {/* <div className="displayNone div_nr1">Przykładowy div - display: none</div> */}
      {isVisible && (
        <div className="div_nr1">Przykładowy div - conditional rendering</div>
      )}
      {!isVisible && (
        <div className="div_nr1">Przykładowy div - !conditional rendering</div>
      )}
      {/* OVERFLOW */}
      <div className="div_nr2">
        Przykładowy div z overflow: "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </div>
      {/* CSS UNITS */}
      <div className="css_units_wrapper">
        <div className="div_nr1 css_units_1">Przykładowy div 1</div>
        <div className="div_nr1 css_units_2">Przykładowy div 2</div>
        <div className="div_nr1 css_units_3">Przykładowy div 3</div>
        <div className="div_nr1 css_units_4">Przykładowy div 4</div>
      </div>
    </div>
  );
}
