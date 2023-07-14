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
      <div className="div_nr2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem
        nihil, repellat dicta consequatur, animi illo mollitia facilis, aperiam
        sapiente nostrum hic possimus atque! Placeat earum dolore quae nihil
        aspernatur.
      </div>
      <div className="css_units-wraper">
        <div className="div_nr1 css_units_1">Przykładowy div1</div>
        <div className="div_nr1 css_units_2">Przykładowy div2</div>
        <div className="div_nr1 css_units_3">Przykładowy div3</div>
        <div className="div_nr1 css_units_4">Przykładowy div4</div>
      </div>
    </div>
  );
}
