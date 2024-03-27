import './style.css';

export const BoxModel = () => {
  const isVisible = true;
  const isNotVisible = false;
  return (
    <div>
      BoxModel:
      <div className="div_nr1">Przykładowy div1</div>
      <div className="div_nr2">Przykładowy div2</div>
      {/* IF statement */}
      <p className="p_nr1">Przykładowy p1</p>
      {isVisible && <p className="p_nr2">Przykładowy p2</p>}
      <p className={isNotVisible ? 'p_nr1' : 'p_nr2'}>Przykładowy p</p>
      <h1 className="h1_nr1">Przykładowy h1</h1>
      {/* Display */}
      <span className="span_nr1">Przykładowy span1</span>
      <span className="span_nr2">Przykładowy span2</span>
      <span className="span_nr3">Przykładowy span3</span>
      {/* Overflow */}
      <div className="div_nr3">Przykładowy div3</div>
    </div>
  );
};
