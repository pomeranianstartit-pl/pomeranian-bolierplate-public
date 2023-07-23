import './styles.css';

export const Exercise = () => {
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

  //DODAWANIE +
  const sum = 5 + 3;
  const fullName = 'John' + ' ' + 'Wick';

  //ODEJMOWANIE -
  const diff = 5 - 3;

  //MNOŻENIE *
  const multiply = 5 * 3;

  //DZIELENIE
  const division = 5 / 3;

  //RESZTA Z DZIELENIA
  const rest_of_division = 5 % 3;

  //POTĘGOWANIE
  const exponenation = 5 ** 3;

  //-------------------------------------------------
  //ZŁOŻONE OPERATORY PRZYPISANIA
  //-------------------------------------------------

  //DODAJ I PRZYPISZ
  let x1 = 5;
  x1 += 5;

  //ODEJMIJ I PRZYPISZ
  let x2 = 6;
  x2 -= 2;

  //-------------------------------------------------
  //OPERATORY PORÓWNANIA
  //-------------------------------------------------

  // < - MNIEJSZE NIŻ
  // > - WIĘKSZE OD
  // <= - MNIEJSZE LUB RÓWNE OD
  // >= - WIĘKSZE LUB RÓWNE OD
  // === - RÓWNE (RAZEM Z TYPEM ZMIENNEJ)
  // == - RÓWNE
  const a = 5;
  const b = '5';
  const c = 7;

  const result1 = a < c;
  const result2 = a <= b;
  const result3 = a === b;

  //-------------------------------------------------
  //METODY NA LICZBACH
  //-------------------------------------------------

  //parseInt() parseFloat()

  console.log(parseInt(0.1));
  console.log(parseFloat(11));

  //NaN - not a number
  //isNaN() - sprawdzanie czy wartosc nie jest liczba

  // toString()
  const toStringVal = 42;
  console.log(toStringVal.toString());

  //toFixed()
  const toFixedVal = 3.13465;
  console.log(toFixedVal.toFixed(3));

  //Math.round()
  console.log(Math.round(2.61));

  //Math.ceil() zaokragla w gore
  console.log(Math.ceil(2.61));

  //Math.floor() zaokragla w dol
  console.log(Math.floor(2.61));

  //Math.sqrt() pierwsiastkuje
  console.log(Math.sqrt(16));

  //Math.abs() wartosc bezwzgledna
  console.log(Math.abs(-42));

  //Math.min() wyszukuje najmniejsza liczbe
  console.log(Math.min(12, 15, 5, 6));

  //Math.max() wyszukuje najwiekszaliczbe
  console.log(Math.max(12, 15, 5, 6));

  //Math.random() wyszkuje liczbe randomowa
  console.log(Math.random());
  return (
    <div>
      {/*DODAWANIE*/}
      <div>{sum}</div>
      <div>{fullName}</div>

      {/*ODEJMOWANIE*/}
      <div>{diff}</div>

      {/*MNOŻENIE*/}
      <div>{multiply}</div>

      {/*DZIELENIE*/}
      <div>{division}</div>

      {/*RESZTA Z DZIELENIA*/}
      <div>{rest_of_division}</div>

      {/*POTĘGOWANIE*/}
      <div>{exponenation}</div>

      {/*DODAJ I PRZYPISZ*/}
      <div>{x1}</div>

      {/*ODEJMIJ I PRZYPISZ*/}
      <div>{x2}</div>

      {/*PORÓWNANIA*/}
      <div>{result1}</div>
      <div>{result2}</div>
      <div>{result3}</div>
    </div>
  );
};
