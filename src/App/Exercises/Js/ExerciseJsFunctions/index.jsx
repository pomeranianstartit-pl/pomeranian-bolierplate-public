export function Exercise() {
  // ćwiczenie 1
  // Napisz funkcję sortImmute, która przyjmuje jako parametr tablice cyfr i
  // zwraca ją posortowaną, funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmune = (parametr) => {
    return parametr.sort((a, b) => a - b);
  };

  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);

  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  // ćwiczenie 2
  // napisz funkcję która jako parametr przyjmuje obiekt przechodzi po
  // wszystkich jego polach i kapitalizuje im pierwszą literę

  let objectExample = {
    name: 'filip',
    nazwisko: 'szczesniak',
    miejsceUrodzenia: 'kair',
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

  // ---------------------

  const capitilize = (obj) => {
    const newObj = {};

    for (const key in obj) {
      newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
    }
    return newObj;
  };

  // ------------
  const capitilize1 = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.charAt(0).toUpperCase() + key.slice(1),
        value,
      ])
    );
  };

  // ćwiczenie 3
  // napisz funkcję, która za parametr przyjmuje tablicę obiektów natomiast
  // zwraca tablicę z wyliczoną wartością średnią zamiast ocen.
  // Funkcja ma nie zmieniać pierwotnej tablicy.

  const objectsArray = [
    { id: 1, name: 'Bójka', grades: [5, 4, 3] },
    { id: 2, name: 'Bajka', grades: [3, 2, 2] },
    { id: 3, name: 'Brawurka', grades: [4, 5, 2] },
  ];
  const newArray = averageGrade(objectsArray);
  console.log(newArray);

  function averageGrade(objectsArray) {
    const newArray = [];

    for (const object of objectsArray) {
      const grades = object.grades;

      if (!Array.isArray(grades) || grades.length === 0) {
        newArray.push({ ...object }); // Dodaj object bez zmian, jeśli brak ocen.
      } else {
        const sum = grades.reduce((sum, grades) => sum + grades, 0);
        const average = sum / grades.length;

        const newObject = { ...object, averageGrade: average };
        delete newObject.grades; // Usuń pole "grades" z nowego obiektu.
        newArray.push(newObject);
      }
    }

    return newArray;
  }
  // -----------

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

  // tablicaWynikowa -> [
  //    {id: 0, name: "Eve", avr: 3.14},
  //    {id: 1, name: "Eve2", avr: 3.14},
  // ]

  // ćwiczenie 3
  //  napisz funkcję,która  zwraca podany w argumencie element
  // ciągu Fibonacciego. Napisać rekurencyjnie
  // fibonacci(3) -> 2
  // fibonnaci(12) -> 144

  function fibonacci(n) {
    if (n < 0) return 'Błąd - musi być liczba naturalna';
    else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log(fibonacci(3)); // Wynik: 2
  console.log(fibonacci(12)); // Wynik: 144

  // ćwiczenie 4

  // stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  const sumOfParams = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc !== 'number') return 'Złe wejście';

      return acc + curr;
    }, 0);
  };

  console.log(sumOfParams(10, 1, 1, '15', 23), 'sumOfParams(10)');

  // -------------------

  const outerFunction = (param) => {
    return () => {
      return (str) => {
        return param + str;
      };
    };
  };

  console.log(outerFunction('Hello')()('World'), 'outerFunction(10)');

  // ćwiczenie 5
  // // Stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
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

  console.log(calculateWithChar('+')(1, 2), 'calculateWithChar()');
  console.log(calculateWithChar('-')(1, 'abc'), 'calculateWithChar()');
  console.log(calculateWithChar('/')('abc', 2), 'calculateWithChar()');
  console.log(calculateWithChar('*')(4, 2), 'calculateWithChar()');

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h3>Ćw sortImmute</h3>
    </div>
  );
}
