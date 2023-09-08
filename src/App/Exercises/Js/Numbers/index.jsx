export const Exercise = () => {
  // -------------------------------------------------------
  //
  // NUMBERS - liczby
  //
  // -------------------------------------------------------

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

  //
  // DODAWANIE ( + )
  //
  console.log(1 + 1); // 2

  //
  // ODEJMOWANIE ( - )
  //
  console.log(2 - 1); // 1

  //
  // MNOŻENIE ( * )
  //
  console.log(2 * 2); // 4

  //
  // DZIELENIE ( / )
  //
  console.log(4 / 2); // 2

  //
  // RESZTA Z DZIELENIA ( % )
  //
  console.log(5 % 3); // 2

  //
  // POTĘGOWANIE ( ** )
  //
  console.log(5 ** 3); // 125

  //
  // ZŁOŻONE OPERATORY PRZYPISANIA
  //
  // +=, -=, *=, /=, %=, **=

  // += - DODAJ I PRZYPISZ
  let x1 = 5;
  // x1 = x1 + 2;
  x1 += 2;

  console.log(x1); // 7

  // *= - POMNÓŻ I PRZYPISZ
  let x2 = 5;
  x2 *= 2;

  console.log(x2); // 10

  //
  // OPERATORY PORÓWNANIA
  //
  // <, >, <=, >=, ==, !=, ===, !==

  // < - MNIEJSZY NIŻ
  // > - WIĘKSZY NIŻ
  // <= - MNIEJSZY LUB RÓWNY
  // >= - WIĘKSZY LUB RÓWNY
  // == - RÓWNY
  // != - NIERÓWNY
  // === - IDENTYCZNY
  // !== - NIEIDENTYCZNY

  const a = 5;
  const b = '5';
  const c = 7;

  const result1 = a < c;
  const result2 = a > c;
  const result3 = a != b;
  const result4 = a !== b;
  const result5 = a == b;
  const result6 = a === b;

  console.log(result1); // true
  console.log(result2); // false
  console.log(result3); // false
  console.log(result4); // true
  console.log(result5); // true
  console.log(result6); // false

  //
  // METODY NA LICZBACH
  //

  // parseInt() - zamienia string na liczbę całkowitą
  console.log(parseInt('5.2')); // 5

  // parseFloat() - zamienia string na liczbę zmiennoprzecinkową
  console.log(parseFloat('5.2'));

  // toString() - zamienia liczbę na string
  const valueToString = 5;
  console.log(valueToString.toString()); // '5'

  // toFixed() - zaokrągla liczbę do podanej liczby miejsc po przecinku
  const valueToFixed = 3.14159265359;
  console.log(valueToFixed.toFixed(2)); // 3.14

  // NaN - Not a Number - wartość specjalna oznaczająca "nie jest liczbą"
  // isNan() - sprawdza czy wartość jest NaN

  console.log(parseInt('abc')); // NaN
  console.log(100 / 'abc'); // NaN

  //
  // OBIEKT MATH
  //

  // Math.round() - zaokrągla liczbę do najbliższej liczby całkowitej
  console.log(Math.round(3.14159265359)); // 3

  // Math.floor() - zaokrągla liczbę w dół do najbliższej liczby całkowitej
  console.log(Math.floor(3.64159265359)); // 3

  // Math.ceil() - zaokrągla liczbę w górę do najbliższej liczby całkowitej
  console.log(Math.ceil(3.14159265359)); // 4

  // Math.sqrt() - wywołaj metodę odpowiedzialną za pierwiastkowanie
  console.log(Math.sqrt(16)); // 4

  // Math.pow() - wywołaj metodę odpowiedzialną za potęgowanie
  console.log(Math.pow(2, 3)); // 8

  // Math.min - wywołaj metodę odpowiedzialną za zwrócenie najmniejszej liczby z podanych
  console.log(Math.min(1, 2, 3, 4, 5)); // 1

  // Math.max - wywołaj metodę odpowiedzialną za zwrócenie największej liczby z podanych
  console.log(Math.max(1, 2, 3, 4, 5)); // 5

  // Math.random() - wywołaj metodę odpowiedzialną za zwrócenie losowej liczby z przedziału od 0 do 1
  console.log(Math.random());
  console.log(Math.floor(Math.random() * 100));

  return <div>Numbers</div>;
};
