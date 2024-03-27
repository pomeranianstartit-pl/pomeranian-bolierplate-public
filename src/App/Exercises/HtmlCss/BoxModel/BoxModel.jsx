import './style.css';

export const BoxModel = () => {
  const isVisible = true;
  const isNotVisible = false;
  return (
    <div>
      BoxModel:
      <div className="div_nr1">Przykładowy div</div>
      <div className="div_nr2">Przykładowy div2</div>
      {/* IF statement */}
      <p className="p_nr1">Przykładowy p</p>
      {isVisible && <p className="p_nr2">Przykładowy p</p>}
      <p className={isNotVisible ? 'p_nr1' : 'p_nr2'}>Przykładowy p</p>
      <h1 className="h1_nr1">Przykładowy h1</h1>
      <span className="span_nr1">Przykładowy span1</span>
      <span className="span_nr2">Przykładowy span2</span>
      <span className="span_nr3">Przykładowy span3</span>
      {/* <span className="span_nr1">Przykładowy span</span> */}
    </div>
  );
};
