export function ExerciseJsFunctions() {
  // 1. ćwiczenie 1 posortuj liczby z tablicy

  const sortImmune = (parametr) => {
    const result = [...parametr];
    return result.sort((a, b) => a - b);
  };

  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);

  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  // 2. ćwiczenie 2
  //jeden sposób
  let objectExample = {
    imie: 'ania',
    nazwisko: 'wisz',
    miejsceUrodzenia: 'gdansk',
  };

  function capitalizeEveryValue(theObject) {
    for (const property in theObject) {
      const changedValue =
        theObject[property].charAt(0).toUpperCase() +
        theObject[property].slice(1);
      theObject[property] = changedValue;
    }
  }
  console.log('pierwotna forma obiektu: ', objectExample);
  capitalizeEveryValue(objectExample);
  console.log(' capitalizeEveryValue:', objectExample);

  // drugi sposób z powiekszeniem klucza
  const capitilize = (obj) => {
    const newObj = {};
    for (const key in obj) {
      newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
    }
    return newObj;
  };
  console.log(capitilize({ name: 'test', keys: 'ania' }), 'capitalize');

  // trzecia metoda
  const capitilize1 = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.charAt(0).toUpperCase() + key.slice(1),
        value,
      ])
    );
  };
  console.log(capitilize1({ name: 'test', keys: 'ania' }), 'capitalize1');

  // ćwiczenie 3 napisz funkcję, która jako paramatr przyjmuje tablicę obiektów,
  // a zwraca tablicę z wyliczoną średnią wartością zamiast ocen.
  // Funkcja nie zmiania pierwotnej tablicy.

  const calcAvr = (arr) => {
    return arr.map(({ id, name, grades }) => {
      const avr = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
      return {
        id,
        name,
        avr: avr,
      };
    });
  };

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  console.log(tablicaPierwotna, 'tablicaPierwotna');
  console.log(tablicaWynikowa, 'tablicaWynikowa');

  // ćwiczenie 4
  // Funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie
  // fibonacci(3) -> 2
  // fibonnaci(12) -> 144

  const fibonacci = (n) => {
    if (n < 0) {
      return 'Błąd liczba musi być naturalna';
    } else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  console.log(fibonacci(-1));
  console.log(fibonacci(12));

  //ćwiczenie 5 - stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  const sumOfParams = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc !== 'number') return 'Złe wejście';
      return acc + curr;
    }, 0);
  };
  console.log(sumOfParams(10, 1, 1, '15', 23), 'sumOfParams(10)');

  //Przykład funkcji chaining
  const outerFunction = (param) => {
    return () => {
      return (str) => {
        return param + str;
      };
    };
  };
  console.log(outerFunction('Hello')()('World'), 'outerFunction(10)');

  //ćwiczenie 6 Stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty
  // calculateWithChar('+')(1,2) -> 3
  // calculateWithChar('*')(1,2) -> 2
  // calculateWithChar('/')(1,2) -> 0.5
  // calculateWithChar('---')(1,2) -> 'zły znak'
  // calculateWithChar('+')('abc',2) -> 'złe wejscie'

  const calculateWithChar = (operator) => {
    return (val1, val2) => {
      if (typeof val1 !== 'number' || typeof val2 !== 'number')
        return 'Złe wejście';
      switch (operator) {
        case '+':
          return val1 + val2;
        case '-':
          return val1 - val2;
        case '/':
          return val1 / val2;
        case '*':
          return val1 * val2;
        case '%':
          return val1 % val2;
        default:
          return 'Zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
      <p>
        napisz funkcję która jako parametr przyjmuje obiekt przechodzi po
        wszystkich jego polach i kapitalizuje im pierwszą literę
      </p>
    </div>
  );
}
