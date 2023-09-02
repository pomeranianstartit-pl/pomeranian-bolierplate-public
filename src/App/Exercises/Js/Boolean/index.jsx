import './styles.css';

// Boolean
export function Boolean() {
  // --------------------------------------------------------------------
  // BOOLEAN
  // --------------------------------------------------------------------

  // const trueValue = true;
  // const falseValue = false;

  // Boolean wykorzystanie - WALIDACJA DANYCH
  function isEmailValid(email) {
    // Sprawdź czy email jest poprawny
    // jeżeli jest poprawny email to zwracamy true
    return true;
    // jeżeli nie jest poprawny email to zwracamy false
    // return false
  }

  if (isEmailValid('tes@example.com')) {
    console.log('email jest poprawny!');
  }

  // Boolean wykorzystanie - FLAGI STANÓW
  const isLoggedInUser = true;
  const isPremiumUser = false;

  // Boolean wykorzystanie - OBSŁUGA BŁĘDÓW
  const isError = false;

  // Boolean wykorzystanie - UKRYWANIE I WYŚWIETLANIE ELEMENTÓW

  // --------------------------------------------------------------------
  // OPERATORS
  // --------------------------------------------------------------------
  const a = true;
  const b = false;

  // || - OR
  const result1 = a || b; // true
  const result2 = b || false; // false

  // && - AND
  const result3 = a && true; // true
  const result4 = a && b; // false

  // ! - NOT
  const result5 = !a; // false
  const result6 = !b; // true

  // ||= OR ASSIGN

  let result7 = 5;
  result7 ||= 10; // x = 5, ponieważ result7 jest prawdziwe

  let result8 = 0;
  result8 ||= 10; // y = 10, ponieważ result8 jest 'fałszywe'

  // &&= AND ASSIGN

  let result9 = 5;
  result9 &&= 10; // x = 10, ponieważ result9 jest prawdziwe

  let result10 = 0;
  result10 &&= 10; // y = 0, ponieważ result10 jest 'fałszywe'

  // --------------------------------------------------------------------
  // OPERATORS PRESEDENCE
  // --------------------------------------------------------------------

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

  return (
    <div>
      {/* Boolean */}
      <div>
        {isEmailValid('test@example.com') &&
          console.log('email jest poprawny!')}
      </div>
      {isLoggedInUser && <div>Użytkownik jest zalogowany!!</div>}
      {isPremiumUser && <div>Masz dostęp do części premium aplikacji!!</div>}
      {!isPremiumUser && <div>Wykup abonament, aby móc uzyskać dostęp</div>}
      {isError && (
        <div>Wystąpił błąd - popraw swój kod, załaduj stronę ponownie</div>
      )}

      {/* Operators */}
      {/* || - operator LUB (OR) */}
      <div>
        <div>|| - operator LUB (OR)</div>
        <div>
          {`${result1}`} {`${result2}`}
          {String(result1)} {String(result2)}
        </div>
      </div>

      {/* && - operator I (AND) */}
      <div>
        <div>&& - operator I (AND)</div>
        <div>
          {`${result3}`} {`${result4}`}
        </div>
      </div>

      {/* ! - operator NOT */}
      <div>
        <div>! - operator NOT</div>
        <div>
          {`${result5}`} {`${result6}`}
        </div>
      </div>

      {/* ||= - operator OR ASSIGN */}
      <div>
        <div>||= - operator OR ASSIGN</div>
        <div>
          {result7} {result8}
        </div>
      </div>

      {/* &&= - operator AND ASSIGN */}
      <div>
        <div>&&= - operator AND ASSIGN</div>
        <div>
          {result9} {result10}
        </div>
      </div>
    </div>
  );
}
