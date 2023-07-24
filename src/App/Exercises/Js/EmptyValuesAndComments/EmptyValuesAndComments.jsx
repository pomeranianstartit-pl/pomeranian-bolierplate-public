import './styles.css';

// Boolean
export function EmptyValuesAndComments() {
  // // --------------------------------------------------------------------
  // // PUSTE WARTOŚCI (null, undefined)
  // // --------------------------------------------------------------------

  // // UNDEFINED
  // // 1. Zmienna jest zadeklarowana ale nie ma przypisanej wartości
  // let a;
  // console.log(a);

  // // 2. Funkcja która nie zawiera instrukcji return albo nie zwraca żadnej wartości
  // function some() {
  //   // Brak returna - nic nie zwraca
  // }
  // console.log(some());

  // // NULL
  // let b = null;
  // console.log(b);

  // null == undefined    // true
  // null === undefined   // false

  // --------------------------------------------------------------------
  // KOMENTARZE
  // --------------------------------------------------------------------

  // 1. JEDNO-LINIOWY

  // TO JEST KOMENTARZ JEDNO-LINIOWY

  // 2. WIELO-LINIOWY

  /*
      TO JEST PRZYKŁAD KOMENTARZA WIELO LINIOWEGO

      TUTAJ MOGLIBYŚMY UMIEŚCIĆ PRZYKŁADOWY KOD ITD...
  */

  // 3. WIELO-LINIOWY
  /**
   *
   * TODO:
   *
   */

  // --------------------------------------------------------------------
  // STRINGI
  // --------------------------------------------------------------------


  const singleQuote = ' saSAS QWSQ Wsa';


  // console.log(singleQuote.length);

  // console.log(singleQuote.substr(0, 3));

  // console.log(singleQuote.slice(0, 3));
  // console.log(singleQuote.replaceAll('sa', 'Haha'));
  // console.log(singleQuote.toUpperCase());
  // console.log(singleQuote.toLowerCase());

  const textTrim = singleQuote.trim();
  console.log(textTrim);

  const indexOfText = singleQuote.indexOf('saSAS');

  console.log(indexOfText);


  return <div>Empty values</div>;
}