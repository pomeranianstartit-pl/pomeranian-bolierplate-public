import { useState } from 'react';

export const Exercise = () => {
  // -------------------------------------------------------
  //
  // BOOLEANS - wartości true/false
  //
  // -------------------------------------------------------
  //   const trueValue = true;
  //   const falseValue = false;

  //
  // 1. Walidacja danych - sprawdzenie czy wartość jest prawdziwa
  //
  //   function isEmailValid(email) {
  //     if (email.includes('@')) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  //
  // 2. Flagi stanów - zmienna która przechowuje informację o stanie aplikacji
  //
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    // console.log('Użytkownik zalogowany?', isLogged);
    setIsLogged(true);
  };

  //   console.log('Użytkownik zalogowany?', isLogged);

  const handleLogout = () => {
    setIsLogged(false);
  };

  //
  // 3. Obsługa błędów - zmienna która przechowuje informację o błędzie
  //
  //   const isError = false;

  //
  // 4. Obsługa loaderów - zmienna która przechowuje informację o stanie ładowania
  //
  //   const isLoading = true;
  //   (jeżeli pobraliśmy dane to isLoading = false)

  //
  // 5. Obsługa warunkowego renderowania - wyświetlenie elementu w zależności od wartości zmiennej
  //

  // -------------------------------------------------------
  //
  // OPERATORS - operatory logiczne
  //
  // -------------------------------------------------------
  const a = true;
  const b = false;

  //
  // || - operator LUB (OR) - zwraca true jeżeli przynajmniej jeden z operandów jest prawdziwy
  //
  const result1 = a || b;
  const result2 = b || false;

  console.log(result1); // true
  console.log(result2); // false

  //
  // && - operator I (AND) - zwraca true jeżeli oba operandy są prawdziwe
  //
  const result3 = a && true;
  const result4 = a && b;
  const result5 = a && b && true;

  console.log(result3); // true
  console.log(result4); // false
  console.log(result5); // false

  //
  // ! - operator NEGACJI (NOT) - zwraca wartość przeciwną do wartości operandu
  //
  const result6 = !a;
  const result7 = !b;

  console.log(result6); // false
  console.log(result7); // true

  //
  // ||= operator przypisania wartości domyślnej (OR ASSIGN)
  //     przypisuje wartość po prawej stronie do lewej strony tylko jesli lewa strona jest false

  let result8 = 5; // wartość truthy (prawdziwa)
  result8 ||= 10;
  console.log(result8); // 5

  let result9 = 0; // wartość falsy (fałszywa)
  result9 ||= 10;
  console.log(result9); // 10

  //
  // &&= operator przypisania wartości domyślnej (AND ASSIGN)
  //     przypisuje wartość po prawej stronie do lewej strony tylko jesli lewa strona jest true

  let result10 = 5; // wartość truthy (prawdziwa)
  result10 &&= 10;
  console.log(result10); // 10

  let result11 = 0; // wartość falsy (fałszywa)
  result11 &&= 10;
  console.log(result11); // 0

  //
  // OPERATORS PRECEDENCE - kolejność wykonywania operatorów
  //

  // 1. () Nawiasy (Najwyższy priorytet - wyrażenia w nawiasach są wykonywane jako pierwsze).
  // 2. ** Potęgowanie.
  // 3. *, /, % Mnożenie, dzielenie i reszta z dzielenia.
  // 4. +, - Dodawanie i odejmowanie.
  // 5. <<, >>, >>> Przesunięcie bitowe.
  // 6. <, <=, >, >= Porównania.
  // 7. ==, !=, ===, !== Porównania równości i nierówności.
  // 8. & Bitowe AND.
  // 9. ^ Bitowe XOR.
  // 10. | Bitowe OR.
  // 11. && Logiczne AND.
  // 12. || Logiczne OR.
  // 13. ? : Operator warunkowy (ternary).
  // 14. =, +=, -= i inne Operatory przypisania.
  const c = true;

  const result12 = a || (b && c);
  console.log(result12); // true

  const result13 = (a || b) && c;
  console.log(result13); // true

  return (
    <div>
      <div>
        {/* Warunkowe renderowanie */}
        {/* {isLogged && <button onClick={handleLogout}>Wyloguj</button>}
        {!isLogged && <button onClick={handleLogin}>Zaloguj!</button>} */}
      </div>
      {isLogged ? (
        <button onClick={handleLogout}>Wyloguj</button>
      ) : (
        <button onClick={handleLogin}>Zaloguj!</button>
      )}
    </div>
  );
};
