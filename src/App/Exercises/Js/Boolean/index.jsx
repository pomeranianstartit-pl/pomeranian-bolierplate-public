import { useState } from 'react';

export function Exercise() {
  //
  // BOOLEAN
  // true | false
  // const trueValue = true;
  //const falseValue = false;
  // 1. Wykorzystanie - WALIDACJA DANYCH

  function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  // console.log(
  //   'PIERWSZY MAIL SPRAWDZAMY: test@wp.pl',
  //   isEmailValid('test@wp.pl')
  // );
  // console.log('PIERWSZY MAIL SPRAWDZAMY: testwp.pl', isEmailValid('testwp.pl'));

  const emailIsValid = isEmailValid('testwp.pl');
  //
  // 2. Wykorzystanie - FLAGI STANÓW
  //

  const [isLogged, setIsLogged] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handleLog = () => {
    setIsLogged(!isLogged);
  };

  const handleSubscribe = () => {
    setIsPremiumUser(!isPremiumUser);
  };

  //
  // OPERATORS
  // && - AND
  // || - OR
  // ! - NOT

  const a = true;
  const b = false;
  // && - AND

  const resultAND_1 = a && b;
  console.log(resultAND_1, 'a && b');
  const resultAND_2 = a && true;
  console.log(resultAND_2, 'a && true');

  // || - OR

  const resultOR_1 = a || b;
  console.log(resultOR_1, 'a || b');
  const resultOR_2 = b || false;
  console.log(resultOR_2, 'b || false');

  // ! - NOT

  const resultNOT_1 = !a;
  console.log(resultNOT_1, '!a');
  const resultNOT_2 = !b;
  console.log(resultNOT_2, '!b');
  const resultJoin = (a || b) && !b;
  console.log(resultJoin, '(a || b) && !b');

  // ||= OR ASSIGN

  let resultOR_ASSIGN_1 = 5;
  resultOR_ASSIGN_1 ||= 10;
  console.log(resultOR_ASSIGN_1, 'resultOR_ASSIGN_1');

  let resultOR_ASSIGN_2 = 0;
  resultOR_ASSIGN_2 ||= 10;
  console.log(resultOR_ASSIGN_2, 'resultOR_ASSIGN_2');

  // &&= AND ASSIGN

  let resultAND_ASSIGN_1 = 5;
  resultAND_ASSIGN_1 &&= 10;
  console.log(resultAND_ASSIGN_1, 'resultAND_ASSIGN_1');
  let resultAND_ASSIGN_2 = 0;
  resultAND_ASSIGN_2 &&= 10;
  console.log(resultAND_ASSIGN_2, 'resultAND_ASSIGN_2');

  // --------------------------------------------------------------------
  // OPERATORS PRESENDENCE
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
      <div>{emailIsValid && 'Email jest poprawny'}</div>

      <div>
        {!emailIsValid && 'Wprowadziłeś błąd w adresie email! popraw go!'}
      </div>

      {isLogged && <button onClick={handleSubscribe}>Wykup subskrypcje</button>}
      {isLogged && <button onClick={handleLog}>Wyloguj się</button>}
      {!isLogged && <button onClick={handleLog}>Zaloguj się</button>}
      {isLogged && <div>content dla osoby zalogowanej....</div>}
      {isLogged && isPremiumUser && (
        <div>Dzisiaj mecze wygrają drużyny grające u siebie</div>
      )}
    </div>
  );
}
