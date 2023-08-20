import './styles.css';

export function Exercise() {
  return (
    <div>
      {/* DZIEDZICZENIE */}
      {/* Dziedziczenie jest mechanizmem który przekazuje wybrane style w dół hierarchi elementów strony */}
      {/*  */}
      <div className="css_inheritence">
        <p>To jest paragraf</p>
        <span>to jest span</span>
        <div>to jest div zagniezdzony</div>
        {/* p span i div będą zawierać instrukcje związane z font-size i color -> te instrukcje są dziedziczone */}
        {/* Jakie instrukcje są dziedziczone? */}
        {/* https://web.dev/learn/css/inheritance/ */}
      </div>

      {/* KASKADOWOŚĆ */}
      {/* Kaskadowość służy w celu określenia pierwszeństwa w oddziaływaniu na te same elementy strony stylów z różnych źródeł */}
      {/* 
            1. INLINE STYLING
            2. ID SELECTOR
            3. CLASS SELECTOR
      */}

      {/* css order of imporance */}
      {/* https://vecta.io/blog/definitive-guide-to-css-styling-order#how-everything-works-in-a-diagram */}
      <div className="css_casc">
        <p
          // style={{ color: 'green' }}
          id="css_cascade_id"
          className="css_cascade"
        >
          To jest paragraf
        </p>
      </div>

      {/* SIMPLE SELECTORS */}
      <h4>Ostyluj mnie!</h4>
    </div>
  );
}
