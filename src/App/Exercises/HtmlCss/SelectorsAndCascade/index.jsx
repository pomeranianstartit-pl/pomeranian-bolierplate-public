import './styles.css';

export function Exercise() {
  return (
    <div>
      <div className="css_inheritance">
        {/* DZIEDZICZENIE */}
        {/* Dziedziczenie jest mechanizmem który przekazuje wybrane style w dół hierarchi elementów strony */}
        {/*  */}
        <p>To jest paragraf</p>
        <span>To jest span</span>
        <div>To jest div zagniezdzony</div>
        {/* p span i div będą zawierać instrukcje związane z font-size i color -> te instrukcje są dziedziczone */}
        {/* Jakie instrukcje są dziedziczone? */}
        {/* https://web.dev/learn/css/inheritance/ */}
      </div>

      {/* KASKADOWOŚĆ */}
      {/* Kaskadowość służy w celu określenia pierwszeństwa w oddziaływaniu na te same elementy strony stylów z różnych źródeł */}
      {/* 
            1. INLINE STYLING - w jednej linii z tagiem <p style="..."></p>
            2. ID SELECTOR
            3. CLASS SELECTOR
      */}

      {/* css order of imporance */}
      {/* https://vecta.io/blog/definitive-guide-to-css-styling-order#how-everything-works-in-a-diagram */}
      <p style={{ color: 'green' }} id="css_cascade_id" className="css_cascade">
        To jest paragraf
      </p>
      {/* SIMPLE SELECTORS */}
      {/* * {} - odnosimy się do wszystkich elementów w dokumencie (gwiazdka i wąsy) */}
      <h4>Ostyluj mnie!</h4>
    </div>
  );
}
