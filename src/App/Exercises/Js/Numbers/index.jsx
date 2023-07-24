import './styles.css';

// Boolean
export function Exercise() {
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

  // --------------------------------------------------------------------
  // NUMBERS
  // --------------------------------------------------------------------

  // DODAWANIE +
  const sum = 5 + 3;
  const fullName = 'John' + ' ' + 'Wick';
  console.log(sum);
  console.log(fullName);

  // ODEJMOWANIE -
  const diff = 8 - 3;
  console.log(diff);

  // MNOŻENIE *
  const multiply = 5 * 3;
  console.log(multiply);

  // DZIELENIE /
  const division = 5 / 3;
  console.log(division);

  // RESZTA Z DZIELENIA %
  const rest_of_division = 5 % 3;
  console.log(rest_of_division);

  // POTĘGOWANIE **
  const exponentiation = 5 ** 3;
  console.log(exponentiation);

  // --------------------------------------------------------------------
  // ZŁOŻONE OPERATORY PRZYPISANIA
  // --------------------------------------------------------------------

  // DODAJ I PRZYPISZ +=
  let x1 = 5;
  x1 += 10; // x1 = x1 + 10;
  console.log(x1);

  // ODEJMI I PRZYPISZ -=
  let x2 = 5;
  x2 -= 10; // x1 = x1 - 10;
  console.log(x2);

  // POMNÓŻ I PRZYPISZ *=
  let x3 = 5;
  x3 *= 10; // x1 = x1 * 10;
  console.log(x3);

  // --------------------------------------------------------------------
  // OPEATORY PORÓWNANIA
  // --------------------------------------------------------------------
  // < - MNIEJSZE NIŻ
  // > - WIĘKSZE OD
  // <= - MNIEJSZE LUB RÓWNE OD
  // >= - WIĘKSZE LUB RÓWNE OD
  // === - RÓWNE (RAZEM Z TYPEM ZMIENNEJ MUSI BYĆ RÓWNE === PRAWDA)
  //       console.log(1 === '1'); // false
  // == - RÓWNE (UWZGLĘDNIAJĄC TYP ZMIENNEJ)
  //       console.log(1 == '1'); // true
  const a = 5;
  const b = '5';
  const c = 7;

  const result1 = a < c; // true
  const result2 = a <= b; // true
  const result3 = a === b; // false

  console.log(result1);
  console.log(result2);
  console.log(result3);

  // --------------------------------------------------------------------
  // METODY NA LICZBACH
  // --------------------------------------------------------------------

  // parseInt() parseFloat() - zmiana liczby na zmiennoprzecinkową/stałą
  console.log(parseInt('0.9999')); // 0
  console.log(parseFloat(11)); // 11.0

  // toString() - wywołaj metodę odpowiedzialną za przerobienie wartości liczbowej na string
  const toStringVal = 42;
  console.log(toStringVal.toString()); // '42'

  // toFixed() - wywołaj metodę odpowiedzialną za zaookrągleniew wartości do X miejsca po przecinku
  const toFixedVal = 3.141525;
  console.log(toFixedVal.toFixed(3)); // '3.142'

  // --------------------------------------------------------------------
  // MATH
  // --------------------------------------------------------------------
  // Math.PI - stała Pi
  console.log(Math.PI);

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
  const array = [12, 15, 5, 6];
  console.log(Math.min(12, 15, 5, 6));
  console.log(Math.min(...array));

  // Math.max() - wywołaj metodę odpowiedzialną za wyszukanie największej liczby
  console.log(Math.max(12, 15, 5, 6));
  console.log(Math.max(...array));

  // Math.random() - wywołaj metodę odpowiedzialną za wyszukanie największej liczby
  console.log(Math.random());

  return <div></div>;
}
