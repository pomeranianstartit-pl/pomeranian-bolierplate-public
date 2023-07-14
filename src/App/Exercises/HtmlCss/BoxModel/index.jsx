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