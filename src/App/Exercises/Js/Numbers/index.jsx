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
  // DODAWANIE +
  const sum = 5 + 3; // 8
  console.log(sum, 'sum');
  const fullName = 'John' + ' ' + 'Doe';
  console.log(fullName, 'fullName');
  // ODEJMOWANIE -
  const difference = 5 - 3; // 2
  console.log(difference, 'difference');
  // MNOŻENIE *
  const multiply = 5 * 3; // 15
  console.log(multiply, 'multiply');
  // DZIELENIE /
  const divide = 5 / 3; // 1.6666666666666667
  console.log(divide, 'divide');
  // RESZTA Z DZIELENIA %
  const modulo = 5 % 3; // 2
  console.log(modulo, 'modulo');
  // POTĘGOWANIE **
  const power = 5 ** 3; // 125
  console.log(power, 'power');
  const result1 = 5 + (3 * 2) / 2 - 1 ** 5;
  console.log(result1, 'result1');

  //

  // ZŁOŻONE OPERATORY PRZYPISANIA

  //

  // +=

  let sum_1 = 5;

  sum_1 += 3; // sum_1 = sum_1 + 3;

  console.log(sum_1, 'sum_1');

  // -=

  let difference_1 = 5;

  difference_1 -= 3; // difference_1 = difference_1 - 3;

  console.log(difference_1, 'difference_1');

  // ...

  //

  // *=

  // /=

  // %=

  // **=

  //

  // OPERATORY PORÓWNANIA

  //

  // < - MNIEJSZ NIŻ

  // > - WIĘKSZY NIŻ

  // <= - MNIEJSZY LUB RÓWNY

  // >= - WIĘKSZY LUB RÓWNY

  // == - RÓWNY

  // != - NIERÓWNY

  // === - IDENTYCZNY

  // !== - NIEIDENTYCZNY

  const a = 5;

  const b = 7;

  const c = '5';

  // < - MNIEJSZ NIŻ

  const resultLessThan = a < b;

  console.log(resultLessThan, 'resultLessThan');

  // > - WIĘKSZY NIŻ

  const resultGreaterThan = a > b;

  console.log(resultGreaterThan, 'resultGreaterThan');

  // == - RÓWNY

  const resultEqual = a == c;

  console.log(resultEqual, 'resultEqual');

  // === - INDETYCZNY

  const resultIdentical = a === c;

  console.log(resultIdentical, 'resultIdentical');
  //

  // METODY NA LICZBACH

  //

  const number = 5.123456789;

  console.log(Number.parseInt(number), 'number.parseInt()');

  const toStringVal = 42;

  console.log(toStringVal, 'toStringVal');

  console.log(toStringVal.toString(), 'toStringVal.toString()');

  // Math.round - wywołaj metodę odpowiedzialną za zaokrąglanie liczb do najbliższej liczby całkowitej

  console.log(Math.round(5.723456789), 'Math.round(5.123456789)');

  // Math.ceil - wywołaj metodę odpowiedzialną za zaokrąglanie liczb do najbliższej liczby całkowitej w górę

  console.log(Math.ceil(5.123456789), 'Math.ceil(5.123456789)');

  // Math.floor - wywołaj metodę odpowiedzialną za zaokrąglanie liczb do najbliższej liczby całkowitej w dół

  console.log(Math.floor(5.923456789), 'Math.floor(5.923456789)');

  // Math.min - wywołaj metodę odpowiedzialną za zwrócenie najmniejszej liczby

  console.log(Math.min(12, 5, 62, 12, 1), 'Math.min(12, 5, 62, 12, 1)');

  // Math.max - wywołaj metodę odpowiedzialną za zwrócenie największej liczby

  console.log(Math.max(12, 5, 62, 12, 1), 'Math.max(12, 5, 62, 12, 1)');

  return (
    <div>
      <h2>Numbers</h2>
    </div>
  );
}
