import './styles.css';
// --------------------------------------------------------------------
// 1. SPOSÓB IMPORTU
// --------------------------------------------------------------------
// import * as math from './math.js'; add -> 4kb import cost - bo importujemy cały plik

// 2. SPOSÓB IMPORTU
// --------------------------------------------------------------------

// import { add } from './math.js'; // add -> 1kb import cost

export function Exercise() {
  // --------------------------------------------------------------------
  // JS FUNCTIONS
  // --------------------------------------------------------------------

  // --------------------------------------------------------------------
  // 1. SPOSÓB IMPORTU
  // --------------------------------------------------------------------
  // console.log(math.add(1, 2));

  // --------------------------------------------------------------------
  // 2. SPOSÓB IMPORTU
  // --------------------------------------------------------------------
  console.log(add(1, 2));

  // --------------------------------------------------------------------
  // JS FUNCTIONS - BASICS
  // --------------------------------------------------------------------

  // --------------------------------------------------------------------
  // 1. DECLARATION - NAMED FUNCTION
  // --------------------------------------------------------------------

  function add(a, b) {
    return a + b;
  }

  console.log(add(2, 2));

  // --------------------------------------------------------------------
  // 2. EXPRESSION - ANONYMOUS FUNCTION
  // --------------------------------------------------------------------

  const square = function (x) {
    return x * x;
  };

  console.log(square(2));

  // --------------------------------------------------------------------
  // 2. EXPRESSION - ARROW FUNCTION / LAMBDA / FUNKCJA STRZAŁKOWA
  // --------------------------------------------------------------------

  // const double = (x) => {
  //   return x * 2;
  // };

  const double = (x) => x * 2;

  console.log(double(5));

  // --------------------------------------------------------------------
  // RETURN TYPES
  // --------------------------------------------------------------------

  // const firstPerson = { name: 'John', age: 24 };
  // const secondPerson = { name: 'Ania', age: 38 };
  // const thirdPerson = { name: 'Adam', age: 18 };

  // const people = [firstPerson, secondPerson, thirdPerson];

  // const createPerson = (name, age) => ({ name: name, age: age });
  // const createPerson = (fullName, age) => ({ name: fullName, age });
  // object
  const createPerson = (name, age) => ({ name, age });

  // array
  // const createPerson = (name, age) => [name, age];

  const firstPerson = createPerson('John', 24);
  const secondPerson = createPerson('Ania', 38);
  const thirdPerson = createPerson('Adam', 18);

  const people = [firstPerson, secondPerson, thirdPerson];
  console.log(people);

  // --------------------------------------------------------------------
  // OUTER FUNCTION AND INNTER FUNCTION
  // --------------------------------------------------------------------

  function outerFunction(x) {
    function innerFunction(y) {
      return x + y;
    }

    return innerFunction;
  }

  const addWithTen = outerFunction(10);
  const result = addWithTen(5);

  console.log(result);

  // --------------------------------------------------------------------
  // RECURSION / REKURENCJE - WYWOŁYWANIE FUNCJI W FUNKCJI
  //
  // 1. Obliczanie silni, ciągu Fibonacciego i innych matematycznych wzorców.
  // 2. Przeszukiwanie i manipulowanie drzewami i grafami.
  // 3. Sortowanie (np. algorytm QuickSort).
  // 4. Wyszukiwanie w strukturach danych (np. drzewa binarne).
  // 5. Rozwiązywanie problemów kombinatorycznych (np. kombinacje, permutacje).
  // --------------------------------------------------------------------

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  console.log(factorial(10));

  // --------------------------------------------------------------------
  // FUNCTION ARGUMENTS
  // --------------------------------------------------------------------

  function greet(name, greeting) {
    console.log(`${greeting} ${name}`);
  }

  // DEFAULT ARGUMENT
  function greet(name, greeting = 'Hello') {
    console.log(`${greeting} ${name}`);
  }

  greet('John', 'Hi');

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum(1, 2, 3, 4, 5, 6));

  // --------------------------------------------------------------------
  // WARTOŚĆ VS REFERENNCJA
  // --------------------------------------------------------------------

  // WARTOŚĆ
  // --------------------------------------------------------------------
  // DLA TYPÓW PROSTYCH - LICZBY, STRINGI, BOOLEAN - PRZEKAZYWANE SĄ PRZEZ WARTOŚĆ
  // CO OZNACZA ŻE ICH KOPIA JEST PRZEKAZYWANA DO FUNKCJI

  function updateNumber(num) {
    num = num * 2;
    return num;
  }

  let x = 5;
  let resultValue = updateNumber(x);
  console.log(x);
  console.log(resultValue);

  // REFERENCJA
  // --------------------------------------------------------------------
  // DLA TYPÓW REFERENCYJNYCH - OBIEKTY, TABLICE, FUNKCJE - PRZEKAZYWANE SĄ PRZEZ REFERENCJĘ
  // CO OZNACZA ŻE FUNKCJA OTRZYMUJE REFERENCJE DO ORYGINALNEGO OBIEKTU/TABLICY/FUNKCJI

  function updateArray(arr) {
    arr.push(4);
    return arr;
  }

  let arr = [1, 2, 3];
  let updatedArray = updateArray(arr);

  console.log(arr);
  console.log(updatedArray);

  // PORÓWNANIE WARTOŚĆ VS REFERENCJA

  let x1 = 5;
  let y1 = 5;

  console.log(x1 === y1); // true -> bo porównujemy wartości

  let x2 = [1, 2, 3];
  let y2 = [1, 2, 3];

  console.log(x2 === y2); // false -> bo porównujemy referencje

  // --------------------------------------------------------------------
  // HOISTING
  // Hoisting to zachowanie w JavaScript, w którym deklaracje zmiennych i funkcji są przenoszone na górę swojego zakresu, zanim kod zostanie wykonany. Oznacza to, że możemy używać zmiennych i funkcji przed ich faktyczną deklaracją w kodzie.
  // --------------------------------------------------------------------

  // console.log(x3);

  // const x3 = 5;

  hello();

  function hello() {
    console.log('Hello');
  }

  // --------------------------------------------------------------------
  // BLOCK SCOPE
  // --------------------------------------------------------------------

  const c = 5;

  function addTwoNumbers(a) {
    console.log(c, 'c');
    console.log(a, 'a');
    return a + c;
  }

  // function test() {
  //   console.log(c, 'c z funkcji test');
  // }

  // test();

  addTwoNumbers(12);

  function myFunction() {
    if (true) {
      let x4 = 10;

      console.log('x4 w zakresie {} ifa', x4);
    }

    // test();

    // console.log('x4 w zakresie funkcji myFunction', x4); // ReferenceError: x4 is not defined
  }

  // VAR, LET, CONST
  // LET I CONST - ZMIENNE KTÓRE SĄ DOSTĘPNE W BLOKU KODU W KTÓRYM ZOSTAŁY ZDEFINIOWANE
  // VAR - ZMIENNE KTÓRE SĄ DOSTĘPNE W FUNKCJI W KTÓREJ ZOSTAŁY ZDEFINIOWANE

  // LET - ZMIENIALNY
  // CONST - NIEZMIENIALNY (TABLICE I OBIEKTY SĄ ZMIENIALNE)

  // const x5 = [5];

  // x5.push(6);

  // Komilator JS i hoisting:
  // Przed wykonaniem kodu JavaScript przechodzi przez proces kompilacji, podczas którego zbierane są deklaracje zmiennych i funkcji. Zmienne są zainicjalizowane na wartość undefined, a funkcje zostają przeniesione na górę zakresu.

  // Dlaczego używamy let i const, a nie var?
  // var nie posiada zasięgu blokowego, co może prowadzić do nieoczekiwanych rezultatów w kodzie. W przypadku let i const, zmienne są widoczne tylko wewnątrz bloku, co poprawia czytelność i bezpieczeństwo kodu.

  // --------------------------------------------------------------------
  // CURRYING
  // Currying to technika programowania, w której funkcja o wielu argumentach zostaje przekształcona w sekwencję funkcji, które mają po jednym argumencie. Dzięki temu można wywoływać funkcje po kolei, dostarczając jedynie pojedyncze argumenty.
  // --------------------------------------------------------------------

  function addCurring(a) {
    return function (b) {
      return a + b;
    };
  }

  const addFive = addCurring(5);
  console.log(addFive(10));
  console.log(addFive(15));
  console.log(addFive(25));

  return <div>JS Function basics</div>;
}
