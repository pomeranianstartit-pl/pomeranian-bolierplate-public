import './styles.css';

export function Numbers() {
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

  // DODAWANIE +
  const sum = 5 + 3; // 8
  // const fullName = 'John' + ' ' + 'Wick';

  // ODEJMOWANIE -
  const diff = 5 - 3; // 2

  // MNOŻENIE *
  const multiply = 5 * 3; // 15

  // DZIELENIE /
  const division = 5 / 3; // 1.666...

  // RESZTA Z DZIELENIA %
  const rest_of_division = 5 % 3; // 1

  // POTĘGOWANIE **
  const exponenation = 5 ** 3; // 125

  // --------------------------------------------------------------------
  // ZŁOŻONE OPERATORY PRZYPISANIA
  // --------------------------------------------------------------------

  // DODAJ I PRZYPISZ +=
  let x1 = 5;
  x1 += 5; // x1 = x1 + 5                // === 10

  // ODEJMIJ I PRZYPISZ +=
  let x2 = 6;
  x2 -= 2; // x1 = x1 - 5                // === 4

  // --------------------------------------------------------------------
  // OPERATORY PORÓWNANIA
  // --------------------------------------------------------------------

  // < - MNIEJSZE NIŻ
  // > - WIĘKSZE OD
  // <= - MNIEJSZE LUB RÓWNE OD
  // >= - WIĘKSZE LUB RÓWNE OD
  // === - RÓWNE (RAZEM Z TYPEM ZMIENNEJ MUSI BYĆ RÓWNE === PRAWDA)
  // == - RÓWNE (UWZGLĘDNIAJĄC TYP ZMIENNEJ)
  const a = 5;
  const b = '5';
  const c = 7;

  const result1 = a < c; // true
  const result2 = a <= b; // true
  const result3 = a === b; // false

  // --------------------------------------------------------------------
  // METODY NA LICZBACH
  // --------------------------------------------------------------------

  // parseInt() parseFloat() - zmiana liczby na zmiennoprzecinkową/stałą
  console.log(parseInt('0.9999')); // 0
  console.log(parseFloat(11)); // 11.0

  // NaN - not a number - typ prosty (działania matematyczne niedozwolone np. = 100 / 'Apple')
  // isNaN() - sprawdzanie czy wartość nie jest liczbą

  // toString() - wywołaj metodę odpowiedzialną za przerobienie wartości liczbowej na string
  const toStringVal = 42;
  console.log(toStringVal.toString()); // '42'

  // toFixed() - wywołaj metodę odpowiedzialną za zaookrągleniew wartości do X miejsca po przecinku
  const toFixedVal = 3.141525;
  console.log(toFixedVal.toFixed(3)); // '3.14'

  // Math.round() - wywołaj metodę odpowiedzialną za zaookrąglenie liczby do najbliższej liczby całkowitej
  console.log(Math.round(2.61));

  // Math.ceil() - wywołaj metodę odpowiedzialną za zaookrąglenie liczby w górę do najbliższej liczby całkowitej
  console.log(Math.ceil(2.21));

  // Math.floor() - wywołaj metodę odpowiedzialną za zaookrąglenie liczby w dół do najbliższej liczby całkowitej
  console.log(Math.floor(2.61));

  // Math.sqrt() - wywołaj metodę odpowiedzialną za pierwiastkowanie
  console.log(Math.sqrt(16));

  // Math.abs() - wywołaj metodę odpowiedzialną za zwracanie wartości bezwzględnej
  console.log(Math.abs(-42));

  // Math.min() - wywołaj metodę odpowiedzialną za wyszukanie najmniejszej liczby
  console.log(Math.min(12, 15, 5, 6));

  // Math.max() - wywołaj metodę odpowiedzialną za wyszukanie największej liczby
  console.log(Math.max(12, 15, 5, 6));

  // Math.random() - wywołaj metodę odpowiedzialną za wyszukanie największej liczby
  console.log(Math.random());

  return (
    <div>
      {/* DODAWANIE + */}
      <div>{sum}</div>
      {/* <div>{fullName}</div> */}
      {/* ODEJMOWANIE - - */}
      <div>{diff}</div>
      {/* MNOŻENIE - * */}
      <div>{multiply}</div>
      {/* DZIELENIE - / */}
      <div>{division}</div>
      <div>{rest_of_division}</div>
      {/* POTĘGOWANIE - / */}
      <div>{exponenation}</div>
      {/* DODAJ I PRZYPISZ += */}
      <div>{x1}</div>
      {/* ODEJMIJ I PRZYPISZ -= */}
      <div>{x2}</div>
      {/* OPERATORY PORÓWNANIA -= */}
      <div>{result1}</div>
      <div>{result2}</div>
      <div>{result3}</div>
    </div>
  );
}
