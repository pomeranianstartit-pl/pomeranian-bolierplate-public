import './styles.css';

// Boolean
export function Exercise() {
  //
  // BOOLEAN (true/false) gdzie true = 1, false = 0 / '' -> false, '....' -> true
  //
  // const trueValue = true;
  // const falseValue = false;

  // BOOLEAN - ZASTOSOWANIE
  // 1. WALIDACJA DANYCH
  function isEmailValid(email) {
    // email... -> sprawdzamy
    // Sprawdź czy emial jest poprawny (poprawna domena, dobry adres i czy nie istnieje w bazie)
    return true;
  }

  if (isEmailValid('test@example.com')) {
    console.log('Email jest poprawny, możesz iść dalej!!');
  }

  // 2. FLAGI STANÓW
  let isUserLoggedIn = true;
  let isPremiumUser = false;

  // 3. OBSŁUGA BŁĘDÓW I LOADERY
  let isError = false;
  let isLoading = false;

  // 4. UKRYWANIE I WYŚWIETLANIE ELEMENTÓW

  //
  // OPERATORS
  //
  const a = true;
  const b = false;

  // || LUB (OR)
  const result1 = a || b; // true
  const result2 = b || false; // false
  console.log(result1);
  console.log(result2);

  // && I (AND)
  const result3 = a && true; // true
  const result4 = a && b; // false
  console.log(result3);
  console.log(result4);

  // ! NEGACJA (NOT)
  const result5 = !a;
  const result6 = !b;
  console.log(result5);
  console.log(result6);

  // ||= OR ASSIGN
  let x = 5;
  x ||= 10; // x nadal będzie równe 5 bo 5 nie jest falsy wartością

  let y = 0;
  y ||= 5; // y będzie równe 5 bo 0 jest wartością falsy

  // &&= AND ASSIGN
  let z = 5;
  z &&= 10; // x jest równe 10 bo 5 jest falsy wartością

  let w = 0;
  w &&= 5; // w będzie równe 0 bo 5 nie jest wartością falsy

  //
  // OPERATORS PRESENDENCE
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

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

  return (
    <div>
      {isLoading && 'Ładuje dane...'}
      {!isLoading && (
        <>
          {/* jako że jest true -> zwróć tekst wyloguj się */}
          <div>{isUserLoggedIn && 'Wyloguj się'}</div>
          {/* jako że jest false -> zwróć tekst wyloguj się */}
          <div>{!isUserLoggedIn && 'Zaloguj się'}</div>
          <div>{isPremiumUser && 'Część premium aplikacji...'}</div>
          <div>{isError && 'Błąd wystąpił -> użytkownik istnieje'}</div>
        </>
      )}
    </div>
  );
}